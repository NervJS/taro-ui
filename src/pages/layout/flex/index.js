import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtFlex from '../../../components/flex/index'
import AtFlexItem from '../../../components/flex/item/index'

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
              <AtFlexItem>A</AtFlexItem>
              <AtFlexItem>B</AtFlexItem>
              <AtFlexItem>C</AtFlexItem>
            </AtFlex>
            <AtFlex>
              <AtFlexItem>A</AtFlexItem>
              <AtFlexItem>B</AtFlexItem>
              <AtFlexItem>C</AtFlexItem>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>定义长度</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlexItem size='3'>A</AtFlexItem>
              <AtFlexItem size='6'>B</AtFlexItem>
              <AtFlexItem size='2'>C</AtFlexItem>
              <AtFlexItem size='1'>D</AtFlexItem>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>定义偏移</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlexItem offset='2'>A</AtFlexItem>
              <AtFlexItem offset='3'>B</AtFlexItem>
              <AtFlexItem>C</AtFlexItem>
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
              <AtFlexItem size='4'>A</AtFlexItem>
              <AtFlexItem size='4'>B</AtFlexItem>
              <AtFlexItem size='4'>C</AtFlexItem>
              <AtFlexItem size='4'>D</AtFlexItem>
              <AtFlexItem size='4'>E</AtFlexItem>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>宽度根据内容撑开</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlexItem isAuto size='1'>
                被内容撑开
              </AtFlexItem>
              <AtFlexItem>B</AtFlexItem>
            </AtFlex>
            <AtFlex>
              <AtFlexItem size='1'>没有被内容撑开</AtFlexItem>
              <AtFlexItem>B</AtFlexItem>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>内容自动换行</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlexItem isWrap size='1'>
                内容自动换行
              </AtFlexItem>
              <AtFlexItem>B</AtFlexItem>
            </AtFlex>
            <AtFlex>
              <AtFlexItem size='1'>内容没有自动换行</AtFlexItem>
              <AtFlexItem>B</AtFlexItem>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>Flex Item 对齐方式</Text>
          </View>
          <View className='example__body'>
            <AtFlex>
              <AtFlexItem>撑开高度 撑开高度 撑开高度 撑开高度</AtFlexItem>
              <AtFlexItem align='center'>B</AtFlexItem>
            </AtFlex>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>Flex对齐方式</Text>
          </View>
          <View className='example__body'>
            <AtFlex justify='start'>
              <AtFlexItem size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlexItem>
              <AtFlexItem size='3'>B</AtFlexItem>
            </AtFlex>
            <AtFlex justify='center'>
              <AtFlexItem size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlexItem>
              <AtFlexItem size='3'>B</AtFlexItem>
            </AtFlex>
            <AtFlex justify='end'>
              <AtFlexItem size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlexItem>
              <AtFlexItem size='3'>B</AtFlexItem>
            </AtFlex>
            <AtFlex justify='between'>
              <AtFlexItem size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlexItem>
              <AtFlexItem size='3'>B</AtFlexItem>
            </AtFlex>
            <AtFlex justify='around'>
              <AtFlexItem size='4'>
                撑开高度 撑开高度 撑开高度 撑开高度
              </AtFlexItem>
              <AtFlexItem size='3'>B</AtFlexItem>
            </AtFlex>
          </View>
        </View>
      </View>
    )
  }
}
