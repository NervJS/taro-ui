import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'

import AtComponent from '../../common/component'
import AtIcon from '../icon/index'
import './index.scss'

export default class AtNoticebar extends AtComponent {
  constructor () {
    super(...arguments)
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
    this.state = {
      show: true,
      animElemId,
      dura: 15,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
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
    this.timeout = setTimeout(() => {
      this.timeout = null
      if (this.state.isWEB) {
        const elem = document.querySelector(`.${this.state.animElemId}`)
        if (!elem) return
        const width = elem.getBoundingClientRect().width
        const dura = width / (+this.props.speed)
        this.setState({ dura })
      } else if (this.state.isWEAPP) {
        const query = Taro.createSelectorQuery().in(this.$scope)
        query.select(`.${this.state.animElemId}`).boundingClientRect(res => {
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
          const animBody = () => {
            resetAnimation.translateX(0).step()
            this.setState({ animationData: resetAnimation.export() })
            setTimeout(() => {
              animation.translateX(-width).step()
              this.setState({ animationData: animation.export() })
            }, 100)
          }
          animBody()
          this.interval = setInterval(animBody, (dura * 1000) + 100)
        }).exec()
      }
    }, 100)
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
      'at-noticebar--weapp': marquee && this.state.isWEAPP,
      'at-noticebar--more': !marquee && showMore,
      'at-noticebar--single': !marquee && single,
    }

    return (
      this.state.show &&
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >
        {close && <View className='at-noticebar__close' onClick={this.onClose.bind(this)}><AtIcon customStyle={{ fontSize: '16px' }} value='close' color='#ccc'></AtIcon></View>}
        <View className='at-noticebar__content'>
          {icon && <View className='at-noticebar__content-icon'><AtIcon customStyle={{ fontSize: '16px' }} value={icon}></AtIcon></View>}
          <View className='at-noticebar__content-text'>
            <View animation={this.state.animationData} className={innerClassName} style={style}>{this.props.children}</View>
          </View>
        </View>
        {showMore && <View className='at-noticebar__more' onClick={this.onGotoMore.bind(this)}><Text className='text'>{_moreText}</Text><View className='at-noticebar__more-icon'><AtIcon customStyle={{ fontSize: '16px' }} value='chevron-right'></AtIcon></View></View>}
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
