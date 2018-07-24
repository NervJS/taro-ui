import Taro from '@tarojs/taro'
import _forEach from 'lodash/forEach'

import { View } from '@tarojs/components'

import './index.scss'

export default class AtFlexItem extends Taro.Component {
  render () {
    const { children, isAuto, isWrap, ...props } = this.props

    const rootClass = ['at-flex__item']

    isAuto && rootClass.push('at-flex__item--auto')
    isWrap && rootClass.push('at-flex__item--wrap')

    _forEach(props, (value, key) => {
      rootClass.push(`at-flex__item-${key}--${value}`)
    })

    return <View className={rootClass}>{children}</View>
  }
}
