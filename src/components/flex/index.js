import Taro from '@tarojs/taro'
import _forEach from 'lodash/forEach'

import { View } from '@tarojs/components'

import AtFlexItem from './item/index'

import './index.scss'

export default class AtFlex extends Taro.Component {
  static Item = AtFlexItem

  render () {
    const { children, ...props } = this.props

    const rootClass = ['at-flex']

    _forEach(props, (value, key) => {
      if (key === 'alignContent') {
        return rootClass.push(`at-flex__align-content--${value}`)
      }
      rootClass.push(`at-flex__${key}--${value}`)
    })

    return <View className={rootClass}>{children}</View>
  }
}
