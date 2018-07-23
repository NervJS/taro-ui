import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import _isFunction from 'lodash/isFunction'

import './index.scss'

export default class AtActionSheetItem extends Taro.Component {
  handleClick () {
    const { onClick } = this.props
    if (_isFunction(onClick)) {
      return onClick()
    }
  }

  render () {
    const { children } = this.props
    return (
      <View className='at-action-sheet-item' onClick={this.handleClick}>
        {children}
      </View>
    )
  }
}
