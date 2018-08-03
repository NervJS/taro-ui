import Taro from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'

import './index.scss'

export default class Toast extends Taro.Component {
  constructor (props) {
    super(...arguments)

    const { isOpened } = props

    if (isOpened) {
      this._makeTimer()
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
    this.makeTimer()
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
    const { text, hiddenIcon, iconSize, iconType, iconColor } = this.props

    const iconClass = [
      'at-toast-content__icon',
      'at-toast-content__icon--no-margin'
    ]

    return isOpened ? (
      <View className='at-toast' onClick={this.handleClick}>
        <View className='at-toast-content'>
          {!hiddenIcon && (
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

Toast.defaultProps = {
  duration: 3000
}
