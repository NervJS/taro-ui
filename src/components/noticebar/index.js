import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import AtComponent from '../../common/component'

export default class AtNoticebar extends AtComponent {
  constructor () {
    super(...arguments)
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
    this.state = {
      show: true,
      animElemId,
      dura: 15,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
    }
  }

  onClose () {
    this.setState({
      show: false,
    })
    this.props.onClose && this.props.onClose(...arguments)
  }

  onGotoMore () {
    this.props.onGotoMore && this.props.onGotoMore(...arguments)
  }

  componentWillReceiveProps () {
    if (!this.timeout) {
      this.interval && clearInterval(this.interval)
      this.initAnimation()
    }
  }

  componentDidMount () {
    if (!this.props.marquee) return
    this.initAnimation()
  }

  initAnimation () {
    const {
      isWEAPP,
      isALIPAY,
    } = this.state
    this.timeout = setTimeout(() => {
      this.timeout = null
      if (this.state.isWEB) {
        const elem = document.querySelector(`.${this.state.animElemId}`)
        if (!elem) return
        const width = elem.getBoundingClientRect().width
        const dura = width / (+this.props.speed)
        this.setState({ dura })
      } else if (isWEAPP || isALIPAY) {
        const query = isALIPAY ? Taro.createSelectorQuery() : Taro.createSelectorQuery()
        console.log(this.state.animElemId)
        query.select(`.${this.state.animElemId}`).boundingClientRect().exec(res => {
          res = res[0]
          if (!res) return
          const { width } = res
          const dura = width / (+this.props.speed)
          const animation = Taro.createAnimation({
            duration: dura * 1000,
            timingFunction: 'linear',
          })
          const resetAnimation = Taro.createAnimation({
            duration: 0,
            timingFunction: 'linear',
          })
          const resetOpacityAnimation = Taro.createAnimation({
            duration: 0,
            timingFunction: 'linear',
          })
          const animBody = () => {
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
          this.interval = setInterval(animBody, (dura * 1000) + 1000)
        })
      }
    }, 1000)
  }

  render () {
    const {
      single,
      icon,
      marquee,
      customStyle,
    } = this.props
    let {
      showMore,
      close,
    } = this.props
    const { dura } = this.state
    const rootClassName = ['at-noticebar']
    let _moreText = this.props.moreText

    if (!single) showMore = false

    if (!_moreText) _moreText = '查看详情'

    const style = {}
    const innerClassName = ['at-noticebar__content-inner']
    if (marquee) {
      close = false
      style['animation-duration'] = `${dura}s`
      innerClassName.push(this.state.animElemId)
    }

    const classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (this.state.isWEAPP || this.state.isALIPAY),
      'at-noticebar--single': !marquee && single,
    }

    const iconClass = ['at-icon']
    if (icon) iconClass.push(`at-icon-${icon}`)

    return (
      this.state.show &&
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >
        {close && (
          <View className='at-noticebar__close' onClick={this.onClose.bind(this)}>
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
            <View animation={this.state.animationData} className={classNames(innerClassName)} id={this.state.animElemId} style={style}>{this.props.children}</View>
          </View>
        </View>
        {showMore && (
          <View className='at-noticebar__more' onClick={this.onGotoMore.bind(this)}>
            <Text className='text'>{_moreText}</Text>
            <View className='at-noticebar__more-icon'>
              <Text className='at-icon at-icon-chevron-right'></Text>
            </View>
          </View>
        )}
      </View>
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
  customStyle: {},
  onClose: () => {},
  onGotoMore: () => {},
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
  onGotoMore: PropTypes.func,
}
