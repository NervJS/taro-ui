import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import './index.scss'

class AtLoading extends Taro.Component {
  render () {
    const { color, size } = this.props
    const sizeStyle = {
      width: `${size}px`,
      height: `${size}px`
    }
    const colorStyle = {
      'border': `1px solid ${color}`,
      'border-color': `${color} transparent transparent transparent`
    }
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)
    return (
      <View className='at-loading' style={sizeStyle}>
        <View className='at-loading__ring' style={ringStyle}></View>
        <View className='at-loading__ring' style={ringStyle}></View>
        <View className='at-loading__ring' style={ringStyle}></View>
      </View>
    )
  }
}

AtLoading.defaultProps = {
  size: '18',
  color: '#fff'
}
AtLoading.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
export default AtLoading
