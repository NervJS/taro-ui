import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
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

  componentDidMount () {
    if (!this.props.marquee) return
    setTimeout(() => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        const width = document.querySelector(`.${this.state.animElemId}`).getBoundingClientRect().width
        const dura = width / (+this.props.speed)
        this.setState({ dura })
      } else if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
        const query = Taro.createSelectorQuery().in(this.$scope)
        query.select(`.${this.state.animElemId}`).boundingClientRect(res => {
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
          setInterval(animBody, (dura * 1000) + 100)
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
      rootClassName.push('at-noticebar--marquee')
      style['animation-duration'] = `${dura}s`
      if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
        rootClassName.push('at-noticebar--weapp')
      }
      innerClassName.push(this.state.animElemId)
    } else {
      if (showMore) rootClassName.push('at-noticebar--more')
      if (single) rootClassName.push('at-noticebar--single')
    }

    return (
      this.state.show &&
      <View
        className={this.getClassName(rootClassName, this.props.className)}
        style={customStyle}
      >
        {close && <View className='at-noticebar__close' onClick={this.onClose.bind(this)}><AtIcon value='close' size='16' color='#ccc'></AtIcon></View>}
        <View className='at-noticebar__content'>
          {icon && <View className='at-noticebar__content-icon'><AtIcon value={icon} size='16'></AtIcon></View>}
          <View className='at-noticebar__content-text'>
            <Text animation={this.state.animationData} className={innerClassName} style={style}>{this.props.children}</Text>
          </View>
        </View>
        {showMore && <View className='at-noticebar__more' onClick={this.onGotoMore.bind(this)}><Text className='text'>{_moreText}</Text><View className='at-noticebar__more-icon'><AtIcon value='chevron-right' size='16'></AtIcon></View></View>}
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
