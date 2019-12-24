import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import AtComponent from '../../common/component'

export default class AtLoading extends AtComponent {
  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  render () {
    const { color, size } = this.props
    const sizeStyle = {
      width: size ? `${Taro.pxTransform(parseInt(size))}` : '',
      height: size ? `${Taro.pxTransform(parseInt(size))}` : '',
    }
    const colorStyle = {
      'border': color ? `1px solid ${color}` : '',
      'borderColor': color ? `${color} transparent transparent transparent` : '',
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
  size: 0,
  color: '',
}

AtLoading.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}
