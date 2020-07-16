/* eslint-disable @typescript-eslint/no-empty-function */
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtEllipsisProps, AtEllipsisState } from '../../../types/ellipsis'
import { View, Canvas } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import {
  delayQuerySelector,
  isTest,
  uuid,
  pxTransform
} from '../../common/utils'

const ENV = Taro.getEnv()

const DEFAULT_FONT_SIZE = 28
const DEFAULT_TEXT_COLOR = '#646A73'
const DEFAULT_BTN_COLOR = '#9CA2A9'

const PLACEHOLDER = 'XXX'

const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB

const RADIO = isWEB
  ? window.document.body.clientWidth / 750
  : Taro.getSystemInfoSync().windowWidth / 750

export default class AtEllipsis extends React.Component<
  AtEllipsisProps,
  AtEllipsisState
> {
  public static defaultProps: AtEllipsisProps
  public static propTypes: InferProps<AtEllipsisProps>
  id: string
  constructor(props: AtEllipsisProps) {
    super(props)

    this.id = isTest() ? 'indexes-ellipsis-AOTU2018' : `ellipsis-${uuid()}`
    this.state = {
      texts: [],
      isMore: false,
      isExpand: !!props.expand
    }

    this.onSwitch = this.onSwitch.bind(this)
  }

  public componentDidMount(): void {
    setTimeout(() => {
      this.initData()
    }, 500)
  }

  private initData(): void {
    if (isWEB) {
      const elem = document.querySelector(`#${this.id}`)
      if (!elem) return
      const width = elem.getBoundingClientRect().width
      this.createCanvas({ width })
      return
    }
    delayQuerySelector(`#${this.id}`).then(rect => {
      this.createCanvas(rect[0])
    })
  }

  private createCanvas({ width }): void {
    let context
    let canvas
    if (isWEB) {
      canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
      if (!canvas) return
      context = canvas.getContext('2d')
    } else {
      context = Taro.createCanvasContext('canvas')
    }

    const { text = '', btnText, lines, textStyle = {} } = this.props

    const fontSize = Math.floor(parseInt(`${textStyle.fontSize}`) * RADIO)

    isWEB
      ? (context.font = `${fontSize}px Arial`)
      : context.setFontSize(fontSize)
    const chr = text.split('')

    const row: Array<string> = []
    let temp = ''
    let isMore = false
    for (let i = 0; i < chr.length; i++) {
      if (row.length === lines) {
        isMore = true
        temp = ''
        break
      }
      let t = temp
      if (row.length + 1 === lines) {
        t += `${PLACEHOLDER}${btnText}`
      }
      if (context.measureText(t + chr[i]).width < width && chr[i] !== '\\n') {
        temp += chr[i]
      } else {
        row.push(temp)
        temp = chr[i]
      }
    }
    temp && row.push(temp)
    isMore && (row[row.length - 1] = `${row[row.length - 1]}...`)

    if (isWEB) {
      document.body.removeChild(canvas)
    }
    this.setState({
      texts: row,
      isMore
    })
  }

  private onSwitch(): void {
    const {
      onExpand = (): void => {},
      onWillExpand = (): void => {},
      onWillCollapse = (): void => {},
      onCollapse = (): void => {}
    } = this.props
    const originExpand = this.state.isExpand
    if (originExpand) {
      const willExpand = onWillExpand(this.props.text)

      if (typeof willExpand === 'boolean' && willExpand === false) return
      this.setState(
        {
          isExpand: !originExpand
        },
        () => {
          onExpand()
        }
      )
    } else {
      onWillCollapse()

      this.setState(
        {
          isExpand: !originExpand
        },
        () => {
          onCollapse()
        }
      )
    }
  }

  public render(): JSX.Element {
    const {
      text,
      lines,
      btnText,
      expandText,
      textStyle = {},
      btnTextStyle = {}
    } = this.props
    const { texts, isMore, isExpand } = this.state
    textStyle.fontSize = pxTransform(+(textStyle.fontSize || DEFAULT_FONT_SIZE))
    textStyle.color = textStyle.color || DEFAULT_TEXT_COLOR
    btnTextStyle.fontSize = pxTransform(
      +(btnTextStyle.fontSize || DEFAULT_FONT_SIZE)
    )
    btnTextStyle.color = btnTextStyle.color || DEFAULT_BTN_COLOR
    // const tStyle = { fontSize: textFont, color: textColor }
    // const bStyle = { fontSize: btnFont, color: btnColor }
    const rootClass = classNames({
      'at-ellipsis': true,
      [`at-ellipsis--${ENV}`]: true,
      'at-ellipsis--lineclamp': lines
    })

    if (text) {
      return (
        <View>
          <Canvas
            canvasId='canvas'
            style={{
              position: 'fixed',
              left: '-1000px',
              top: '-1000px',
              width: '100%',
              height: '100%'
            }}
          />
          <View id={this.id} className={rootClass} onClick={this.onSwitch}>
            <View className='at-ellipsis__block' style={{ ...textStyle }}>
              {text}
            </View>
            {isExpand &&
              texts.map(t => (
                <View className='at-ellipsis__text' key={t} style={textStyle}>
                  {t}
                </View>
              ))}
            {!isExpand && <View style={textStyle}>{text}</View>}
            {isMore && (
              <View className='at-ellipsis__btn' style={btnTextStyle}>
                {isExpand ? btnText : expandText}
              </View>
            )}
          </View>
        </View>
      )
    }

    return (
      <View
        id={this.id}
        className={rootClass}
        style={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignorets
          '-webkit-line-clamp': `${lines}`,
          ...textStyle
        }}
      >
        {this.props.children}
      </View>
    )
  }
}

AtEllipsis.defaultProps = {
  text: '',
  btnText: '全部',
  expandText: '',
  textStyle: {},
  btnTextStyle: {},
  expand: false,
  onWillExpand: (): void => {},
  onWillCollapse: (): void => {},
  onExpand: (): void => {},
  onCollapse: (): void => {}
}

AtEllipsis.propTypes = {
  text: PropTypes.string,
  btnText: PropTypes.string,
  expandText: PropTypes.string,
  textStyle: PropTypes.object,
  lines: PropTypes.number,
  expand: PropTypes.bool,
  btnTextStyle: PropTypes.object,
  onWillExpand: PropTypes.func,
  onWillCollapse: PropTypes.func,
  onExpand: PropTypes.func,
  onCollapse: PropTypes.func
}
