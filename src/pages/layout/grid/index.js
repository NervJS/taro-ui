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
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
            </AtGrid>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>定义最大的列数</Text>
          </View>
          <View className='example__body'>
            <AtGrid mode='square' columnNum={4}>
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
            </AtGrid>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>定义最大的列数</Text>
          </View>
          <View className='example__body'>
            <AtGrid mode='rect'>
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
              <AtGrid.Item icon='emoji' value='放置文本' />
            </AtGrid>
          </View>
        </View>
      </View>
    )
  }
}
