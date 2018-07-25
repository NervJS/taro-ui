import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtGridItem from './item/index'

import './index.scss'

export default class AtGrid extends Taro.Component {
  static Item = AtGridItem

  render () {
    const { children } = this.props
    return <View className='at-grid'>{children}</View>
  }
}
