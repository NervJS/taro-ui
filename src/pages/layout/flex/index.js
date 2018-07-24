/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtFlex from '../../../components/flex/index'

import './index.scss'

export default class FlexPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Flex Page'
  }

  render () {
    return (
      <View className='flex__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item>A</AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
              <AtFlex.Item>C</AtFlex.Item>
            </AtFlex>
            <AtFlex>
              <AtFlex.Item>A</AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
              <AtFlex.Item>C</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>定义长度</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item size='3'>A</AtFlex.Item>
              <AtFlex.Item size='6'>B</AtFlex.Item>
              <AtFlex.Item size='2'>C</AtFlex.Item>
              <AtFlex.Item size='1'>D</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>定义偏移</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item offset='2'>A</AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
              <AtFlex.Item>C</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item>A</AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
              <AtFlex.Item>C</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
      </View>
    )
  }
}
