import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _forEach from 'lodash/forEach'

import './index.scss'

export default class AtFlexItem extends Component {
  render () {
    const rootClass = ['at-flex__item']

    _forEach(this.props, (value, key) => {
      if (key === 'isAuto' && value) {
        return rootClass.push('at-flex__item--auto')
      }
      if (key === 'isWrap' && value) {
        return rootClass.push('at-flex__item--wrap')
      }
      rootClass.push(`at-flex__item-${key}--${value}`)
    })

    return <View className={rootClass}>{this.props.children}</View>
  }
}

AtFlexItem.propTypes = {
  isAuto: PropTypes.bool,
  isWrap: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'bottom', 'center']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}
