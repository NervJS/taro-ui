/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtGrid from '../../../components/grid/index'

import './index.scss'

export default class GridPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Grid Page'
  }

  render () {
    return (
      <View className='grid__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <AtGrid mode='square'>
              <AtGrid.Item />
            </AtGrid>
          </View>
        </View>
      </View>
    )
  }
}
