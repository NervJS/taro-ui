import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../../../common/component'

import './index.scss'

export default class AtActionSheetItem extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    return (
      <View
        className={this.getClassName(
          'at-action-sheet-item',
          this.props.className
        )}
        onClick={this.handleClick}
      >
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
}
