import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtComponent from '../../common/component'

const DEFAULT_ICON = 'data:image/png;base64,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'

export default class AtFloatButton extends AtComponent {
  constructor () {
    super(...arguments)
    const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
    const offset = isWEAPP ? parseInt(Taro.pxTransform(this.props.size).replace('rpx')) : this.props.size
    const windowWidth = isWEAPP ? Taro.getSystemInfoSync().windowWidth : window.innerWidth
    const windowHeight = isWEAPP ? Taro.getSystemInfoSync().windowHeight : window.innerHeight
    this.state = {
      position: {
        left: `${(windowWidth * 0.85) - offset}px`,
        top: `${(windowHeight * 0.90) - offset}px`
      },
      offset,
      movableRangeWidth: (windowWidth * 0.95) - (2 * offset),
      movableRangeHeight: (windowHeight * 0.95) - (2 * offset),
      backgroundColor: this.props.backgroundColor,
      isWEAPP,
    }
  }

  onClick () {
    this.props.onClick && this.props.onClick(...arguments)
  }

  onTouchStart () {
    this.props.onTouchStart && this.props.onTouchStart(...arguments)
    this.setState({
      backgroundColor: this.props.touchedBackgroundColor
    })
  }

  onTouchEnd () {
    this.props.onTouchEnd && this.props.onTouchEnd(...arguments)
    this.setState({
      backgroundColor: this.props.backgroundColor
    })
  }

  onTouchMove (e) {
    e.stopPropagation()
    let x = this.state.isWEAPP ?
      e.touches[0].clientX - this.state.offset
      : e.changedTouches[0].clientX - this.state.offset

    let y = this.state.isWEAPP ?
      e.touches[0].clientY - this.state.offset
      : e.changedTouches[0].clientY - this.state.offset

    if (x > this.state.movableRangeWidth) {
      x = this.state.movableRangeWidth
    } else if (x < this.state.movableRangeWidth * 0.05) {
      x = this.state.movableRangeWidth * 0.05
    }
    if (y > this.state.movableRangeHeight) {
      y = this.state.movableRangeHeight
    } else if (y < 0) {
      y = 0
    }

    this.setState({
      position: {
        left: `${x}px`,
        top: `${y}px`
      }
    })
  }

  render () {
    const {
      icon,
      size,
      borderColor
    } = this.props
    const {
      backgroundColor,
      position
    } = this.state
    return <View className='at-floating-button'
      style={{
        backgroundImage: `url("${icon}")`,
        top: position.top,
        left: position.left,
        padding: `${size}Px`,
        backgroundSize: `${size}Px`,
        backgroundColor,
        border: `1Px solid ${borderColor}`
      }}
      onClick={this.onClick.bind(this)}
      onTouchStart={this.onTouchStart.bind(this)}
      onTouchEnd={this.onTouchEnd.bind(this)}
      onTouchMove={this.onTouchMove.bind(this)}
    >
    </View>
  }
}

AtFloatButton.defaultProps = {
  icon: DEFAULT_ICON,
  size: 25,
  onClick: () => { },
  onTouchStart: () => { },
  onTouchEnd: () => { },
  backgroundColor: 'rgba(97,144,232, 0.8)',
  touchedBackgroundColor: 'rgba(97, 144, 232, 1)',
  borderColor: 'rgba(97,144,232, 0.8)'
}

AtFloatButton.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  backgroundColor: PropTypes.string,
  touchedBackgroundColor: PropTypes.string,
  borderColor: PropTypes.string
}
