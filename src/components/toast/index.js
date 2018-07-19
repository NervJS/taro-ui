import Taro from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'

import './index.scss'

export default class Toast extends Taro.Component {
  constructor(props) {
    super(...arguments)

    const { isOpen } = props

    if (isOpen) {
      this._makeTimer()
    }

    this._timer = null
    this.state = {
      isOpen
    }
  }

  _clearTimer() {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  _makeTimer() {
    const { duration } = this.props
    this._timer = setTimeout(() => {
      this.setState({
        isOpen: false
      })
    }, duration)
  }

  _close() {
    const { isOpen } = this.state
    if (isOpen) {
      this.setState({
        isOpen: false
      })
      this._clearTimer()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen } = nextProps
    if (!isOpen) return

    if (!this.state.isOpen) {
      this.setState({
        isOpen
      })
    } else {
      this._clearTimer()
    }
    this._makeTimer()
  }

  handleClick = () => {
    const { onClickToast } = this.props
    if (onClickToast) {
      return onClickToast()
    }
    this._close()
  }

  render() {
    const { isOpen } = this.state
    const { text, hiddenIcon, iconSize, iconType, iconColor } = this.props
    return isOpen ? (
      <View className='at-toast' onClick={this.handleClick}>
        <View className='at-toast-content'>
          {!hiddenIcon && (
            <View className='at-toast-content__icon'>
              <Icon type={iconType} color={iconColor} size={iconSize} />
            </View>
          )}
          {text && <View className='at-toast-content__info'>{text}</View>}
        </View>
      </View>
    ) : null
  }
}

Toast.defaultProps = {
  duration: 3000
}
