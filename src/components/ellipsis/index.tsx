/* eslint-disable @typescript-eslint/no-empty-function */
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View, Canvas } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtEllipsisProps, AtEllipsisState } from 'types/ellipsis'
import AtComponent from '../../common/component'

import { delayQuerySelector, isTest, uuid } from '../../common/utils'

const ENV = Taro.getEnv()

const DEFAULT_FONT_SIZE = 14
const DEFAULT_TEXT_COLOR = '#646A73'
const DEFAULT_BTN_COLOR = '#9CA2A9'

const PLACEHOLDER = '...X'

const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB

export default class AtEllipsis extends AtComponent<
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
    if (this.props.text) {
      this.initData()
    }
  }

  private initData(): void {
    if (isWEB) {
      const elem = document.querySelector(`#${this.id}`)
      if (!elem) return
      const width = elem.getBoundingClientRect().width
      this.createCanvas({ width })
      return
    }
    delayQuerySelector(this, `#${this.id}`).then(rect => {
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

    const {
      text = '',
      btnText = '',
      lines,
      textStyle = {},
      btnTextStyle = {}
    } = this.props
    const fontSize = parseInt(`${textStyle.fontSize || DEFAULT_FONT_SIZE}`)
    const btnTextSize = parseInt(
      `${btnTextStyle.fontSize || DEFAULT_FONT_SIZE}`
    )
    isWEB
      ? (context.font = `${btnTextSize}px Arial`)
      : context.setFontSize(btnTextSize)
    const placeholderWidth = context.measureText(PLACEHOLDER + btnText).width

    const chr = text.split('')

    isWEB
      ? (context.font = `${fontSize}px Arial`)
      : context.setFontSize(fontSize)
    const row: Array<string> = []
    let temp = ''
    let isMore = false
    for (let i = 0; i < chr.length; i++) {
      if (row.length === lines) {
        isMore = true
        temp = ''
        break
      }
      let totalWidth = width
      const t = temp
      if (row.length + 1 === lines) {
        totalWidth -= placeholderWidth
      }

      if (
        context.measureText(t + chr[i]).width <= totalWidth &&
        chr[i] !== '\\n'
      ) {
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
    const textSize = textStyle.fontSize || DEFAULT_FONT_SIZE

    const textColor = textStyle.color || DEFAULT_TEXT_COLOR
    const btnTextSize = btnTextStyle.fontSize || DEFAULT_FONT_SIZE
    const btnTextColor = btnTextStyle.color || DEFAULT_BTN_COLOR

    const tStyle = { fontSize: `${textSize}px`, color: textColor }
    const bStyle = { fontSize: `${btnTextSize}px`, color: btnTextColor }

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
            <View className='at-ellipsis__block' style={{ ...tStyle }}>
              {text}
            </View>
            {isExpand &&
              texts.map(t => (
                <View className='at-ellipsis__text' key={t} style={tStyle}>
                  {t}
                </View>
              ))}
            {!isExpand && <View style={tStyle}>{text}</View>}
            {isMore && (
              <View className='at-ellipsis__btn' style={bStyle}>
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
