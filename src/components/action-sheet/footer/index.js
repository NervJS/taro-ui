import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import './index.scss'

export default class AtActionSheetFooter extends Component {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    return (
      <View className='at-action-sheet-footer' onClick={this.handleClick}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
