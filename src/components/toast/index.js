import Taro from '@tarojs/taro'
import { View, Icon, Image } from '@tarojs/components'

import PropTypes from 'prop-types'

import statusImg from './img.json'

import './index.scss'

export default class AtToast extends Taro.Component {
  constructor (props) {
    super(...arguments)

    const { isOpened } = props

    if (isOpened) {
      this.makeTimer()
    }

    this._timer = null
    this.state = {
      isOpened
    }
  }

  clearTimmer () {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  makeTimer () {
    const { duration } = this.props
    this._timer = setTimeout(() => {
      this.setState({
        isOpened: false
      })
    }, duration)
  }

  close () {
    const { isOpened } = this.state
    if (isOpened) {
      this.setState({
        isOpened: false
      })
      this.clearTimmer()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    if (!isOpened) return

    if (!this.state.isOpened) {
      this.setState({
        isOpened
      })
    } else {
      this.clearTimmer()
    }
    // this.makeTimer()
  }

  handleClick = () => {
    const { onClickToast } = this.props
    if (onClickToast) {
      return onClickToast()
    }
    this.close()
  }

  render () {
    const { isOpened } = this.state
    const {
      text,
      isHiddenIcon,
      iconSize,
      iconType,
      iconColor,
      status,
      img
    } = this.props

    const realImg = statusImg[status] || img

    const rootClass = ['at-toast']
    const iconClass = ['at-toast-content__icon']

    if (!text) {
      iconClass.push('at-toast-content__icon--no-margin')
    }

    if (status) {
      rootClass.push(`at-toast--${status}`)
    }

    return isOpened ? (
      <View className={rootClass} onClick={this.handleClick}>
        <View className='at-toast-content'>
          {realImg && (
            <View className='at-toast-content__img'>
              <Image
                className='at-toast-content__img-item'
                src={realImg}
                mode='scaleToFill'
              />
            </View>
          )}
          {!isHiddenIcon &&
            !realImg && (
            <View className={iconClass}>
              <Icon type={iconType} color={iconColor} size={iconSize} />
            </View>
          )}
          {text && <View className='at-toast-content__info'>{text}</View>}
        </View>
      </View>
    ) : null
  }
}

AtToast.defaultProps = {
  duration: 3000
}

AtToast.propTypes = {
  text: PropTypes.string,
  isOpened: PropTypes.bool,
  iconType: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  isHiddenIcon: PropTypes.bool
}
