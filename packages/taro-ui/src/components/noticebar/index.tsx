import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtNoticeBarProps, AtNoticeBarState } from '../../../types/noticebar'

export default class AtNoticebar extends React.Component<
  AtNoticeBarProps,
  AtNoticeBarState
> {
  public static defaultProps: AtNoticeBarProps
  public static propTypes: InferProps<AtNoticeBarProps>

  private timeout: NodeJS.Timeout | null
  private interval: NodeJS.Timer

  public constructor(props: AtNoticeBarProps) {
    super(props)
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
    this.state = {
      show: true,
      animElemId,
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
    }
  }

  private onClose(event: CommonEvent): void {
    this.setState({
      show: false
    })
    this.props.onClose && this.props.onClose(event)
  }

  private onGotoMore(event: CommonEvent): void {
    this.props.onGotoMore && this.props.onGotoMore(event)
  }

  public UNSAFE_componentWillReceiveProps(): void {
    if (!this.timeout) {
      this.interval && clearInterval(this.interval)
      this.initAnimation()
    }
  }

  public componentDidMount(): void {
    if (!this.props.marquee) return
    this.initAnimation()
  }

  private initAnimation(): void {
    const { isWEAPP, isALIPAY } = this.state
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.timeout = setTimeout(() => {
      this.timeout = null
      if (this.state.isWEB) {
        const { speed = 100 } = this.props
        const elem = document.querySelector(`.${this.state.animElemId}`)
        if (!elem) return
        const width = elem.getBoundingClientRect().width
        const dura = width / +speed
        this.setState({ dura })
      } else if (isWEAPP || isALIPAY) {
        const query = Taro.createSelectorQuery()
        query
          .select(`.${this.state.animElemId}`)
          .boundingClientRect()
          .exec(res => {
            const queryRes = res[0]
            if (!queryRes) return
            const { width } = queryRes
            const { speed = 100 } = this.props
            const dura = width / +speed
            const animation = Taro.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            })
            const resetAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            })
            const resetOpacityAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            })
            const animBody = (): void => {
              resetOpacityAnimation.opacity(0).step()
              this.setState({ animationData: resetOpacityAnimation.export() })

              setTimeout(() => {
                resetAnimation.translateX(0).step()
                this.setState({ animationData: resetAnimation.export() })
              }, 300)

              setTimeout(() => {
                resetOpacityAnimation.opacity(1).step()
                this.setState({ animationData: resetOpacityAnimation.export() })
              }, 600)

              setTimeout(() => {
                animation.translateX(-width).step()
                this.setState({ animationData: animation.export() })
              }, 900)
            }
            animBody()
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.interval = setInterval(animBody, dura * 1000 + 1000)
          })
      }
    }, 1000)
  }

  public render(): JSX.Element | boolean {
    const {
      single,
      icon,
      marquee,
      customStyle,
      className,
      moreText = '查看详情'
    } = this.props
    let { showMore, close } = this.props
    const { dura, show, animElemId, animationData, isWEAPP, isALIPAY } =
      this.state
    const rootClassName = ['at-noticebar']

    if (!single) showMore = false

    const style = {}
    const innerClassName = ['at-noticebar__content-inner']
    if (marquee) {
      close = false
      style['animation-duration'] = `${dura}s`
      innerClassName.push(animElemId)
    }

    const classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
      'at-noticebar--single': !marquee && single
    }

    const iconClass = ['at-icon']
    if (icon) iconClass.push(`at-icon-${icon}`)

    return (
      show && (
        <View
          className={classNames(rootClassName, classObject, className)}
          style={customStyle}
        >
          {close && (
            <View
              className='at-noticebar__close'
              onClick={this.onClose.bind(this)}
            >
              <Text className='at-icon at-icon-close'></Text>
            </View>
          )}
          <View className='at-noticebar__content'>
            {icon && (
              <View className='at-noticebar__content-icon'>
                {/* start hack 百度小程序 */}
                <Text className={classNames(iconClass, iconClass)}></Text>
              </View>
            )}
            <View className='at-noticebar__content-text'>
              <View
                id={animElemId}
                animation={animationData}
                className={classNames(innerClassName)}
                style={style}
              >
                {this.props.children}
              </View>
            </View>
          </View>
          {showMore && (
            <View
              className='at-noticebar__more'
              onClick={this.onGotoMore.bind(this)}
            >
              <Text className='text'>{moreText}</Text>
              <View className='at-noticebar__more-icon'>
                <Text className='at-icon at-icon-chevron-right'></Text>
              </View>
            </View>
          )}
        </View>
      )
    )
  }
}

AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {}
}

AtNoticebar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  marquee: PropTypes.bool,
  speed: PropTypes.number,
  moreText: PropTypes.string,
  showMore: PropTypes.bool,
  icon: PropTypes.string,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func
}
