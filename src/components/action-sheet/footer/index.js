import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../../common/component'

export default class AtActionSheetFooter extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    const rootClass = classNames(
      'at-action-sheet__footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
