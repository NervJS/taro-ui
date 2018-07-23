import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import _isFunction from 'lodash/isFunction'

import './index.scss'

export default class AtActionSheetFooter extends Taro.Component {
  handleClick = () => {
    const { onClick, $$close } = this.props
    if (_isFunction(onClick)) {
      return onClick()
    }
    $$close()
  }

  render () {
    const { children } = this.props
    return (
      <View className='at-action-sheet-footer' onClick={this.handleClick}>
        {children}
      </View>
    )
  }
}
