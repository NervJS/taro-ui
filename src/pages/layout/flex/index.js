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
              <AtFlex.Item offset='3'>B</AtFlex.Item>
              <AtFlex.Item>C</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>超出换行</Text>
            <Text className='example__header-note'>默认超出不换行</Text>
          </View>
          <View className='example__body'>
            <AtFlex wrap='wrap'>
              <AtFlex.Item size='4'>A</AtFlex.Item>
              <AtFlex.Item size='4'>B</AtFlex.Item>
              <AtFlex.Item size='4'>C</AtFlex.Item>
              <AtFlex.Item size='4'>D</AtFlex.Item>
              <AtFlex.Item size='4'>E</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>宽度根据内容撑开</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item isAuto size='1'>
                被内容撑开
              </AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
            </AtFlex>
            <AtFlex>
              <AtFlex.Item size='1'>没有被内容撑开</AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>内容自动换行</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item isWrap size='1'>
                内容自动换行
              </AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
            </AtFlex>
            <AtFlex>
              <AtFlex.Item size='1'>内容没有自动换行</AtFlex.Item>
              <AtFlex.Item>B</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>Flex Item 对齐方式</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlex.Item>撑开高度 撑开高度 撑开高度 撑开高度</AtFlex.Item>
              <AtFlex.Item align='center'>B</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>Flex对齐方式</Text>
          </View>
          <View className='example__body'>
            <AtFlex justify='start'>
              <AtFlex.Item size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlex.Item>
              <AtFlex.Item size='3'>B</AtFlex.Item>
            </AtFlex>
            <AtFlex justify='center'>
              <AtFlex.Item size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlex.Item>
              <AtFlex.Item size='3'>B</AtFlex.Item>
            </AtFlex>
            <AtFlex justify='end'>
              <AtFlex.Item size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlex.Item>
              <AtFlex.Item size='3'>B</AtFlex.Item>
            </AtFlex>
            <AtFlex justify='between'>
              <AtFlex.Item size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlex.Item>
              <AtFlex.Item size='3'>B</AtFlex.Item>
            </AtFlex>
            <AtFlex justify='around'>
              <AtFlex.Item size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlex.Item>
              <AtFlex.Item size='3'>B</AtFlex.Item>
            </AtFlex>
          </View>
        </View>
      </View>
    )
  }
}
