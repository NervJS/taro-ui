/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtGridItem from './item/index'

import './index.scss'

export default class AtGrid extends Taro.Component {
  static Item = AtGridItem

  render () {
    const { children, mode, columnNum } = this.props

    const newChildren = children
      .filter(item => item.type === AtGridItem)
      .map((item, index, arr) => {
        item.props = Object.assign(
          {
            mode,
            columnNum,
            total: arr.length,
            order: index + 1
          },
          item.props
        )
        return item
      })

    return <View className='at-grid'>{newChildren}</View>
  }
}
