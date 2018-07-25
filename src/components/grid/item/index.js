/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import _isFunction from 'lodash/isFunction'

import AtIcon from '../../icon/index'

import './index.scss'

export default class AtGridItem extends Taro.Component {
  handleClick = () => {
    const { onClick } = this.props
    if (_isFunction(onClick)) {
      onClick()
    }
  }

  render () {
    const {
      icon,
      mode = 'square',
      order,
      total,
      value,
      iconSize,
      iconColor
    } = this.props
    let { columnNum } = this.props

    if (mode === 'rect' && !columnNum) {
      columnNum = 2
    }
    if (mode === 'square' && !columnNum) {
      columnNum = 3
    }

    const maxRow = Math.ceil(total / columnNum)
    const isLastRow = order > (maxRow - 1) * columnNum
    const isLastCol = order % columnNum === 0

    const rootStyle = {
      flex: `0 0 ${100 / columnNum}%`
    }

    const contentStyle = {
      borderRightColor: isLastCol ? 'transparent' : '',
      borderBottomColor: isLastRow ? 'transparent' : ''
    }

    const rootClass = ['at-grid-item', `at-grid-item--${mode}`]

    return (
      <View style={rootStyle} className={rootClass} onClick={this.handleClick}>
        <View className='at-grid-item__content' style={contentStyle}>
          <View className='at-grid-item__content-inner'>
            <View className='content-inner__icon'>
              <AtIcon value={icon} color={iconColor} size={iconSize} />
            </View>
            <Text className='content-inner__text'>{value}</Text>
          </View>
        </View>
      </View>
    )
  }
}
