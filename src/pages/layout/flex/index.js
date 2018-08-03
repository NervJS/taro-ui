import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtFlex from '../../../components/flex/index'
import AtFlexItem from '../../../components/flex/item/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class FlexPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='Flex 弹性布局'></DocsHeader>

        <View className='doc-body'>
          {/* 基本案例 */}
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem>A</AtFlexItem>
                  <AtFlexItem>B</AtFlexItem>
                  <AtFlexItem>C</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem>A</AtFlexItem>
                  <AtFlexItem>B</AtFlexItem>
                  <AtFlexItem>C</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* 定义长度 */}
          <View className='panel'>
            <View className='panel__title'>定义长度</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem size='3'>A</AtFlexItem>
                  <AtFlexItem size='6'>B</AtFlexItem>
                  <AtFlexItem size='2'>C</AtFlexItem>
                  <AtFlexItem size='1'>D</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* 定义偏移 */}
          <View className='panel'>
            <View className='panel__title'>定义偏移</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem offset='2'>A</AtFlexItem>
                  <AtFlexItem offset='3'>B</AtFlexItem>
                  <AtFlexItem>C</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* 超出换行 */}
          <View className='panel'>
            <View className='panel__title'>超出换行</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex wrap='wrap'>
                  <AtFlexItem size='4'>A</AtFlexItem>
                  <AtFlexItem size='4'>B</AtFlexItem>
                  <AtFlexItem size='4'>C</AtFlexItem>
                  <AtFlexItem size='4'>D</AtFlexItem>
                  <AtFlexItem size='4'>E</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* 宽度根据内容撑开 */}
          <View className='panel'>
            <View className='panel__title'>宽度根据内容撑开</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem isAuto size='1'>
                    被内容撑开
                  </AtFlexItem>
                  <AtFlexItem>B</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem size='1'>没有被内容撑开</AtFlexItem>
                  <AtFlexItem>B</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* 内容自动换行 */}
          <View className='panel'>
            <View className='panel__title'>内容自动换行</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem isWrap size='1'>
                    内容自动换行
                  </AtFlexItem>
                  <AtFlexItem>B</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem size='1'>内容没有自动换行</AtFlexItem>
                  <AtFlexItem>B</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* Flex Item 对齐方式 */}
          <View className='panel'>
            <View className='panel__title'>Flex Item 对齐方式</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex>
                  <AtFlexItem>撑开高度 撑开高度 撑开高度 撑开高度</AtFlexItem>
                  <AtFlexItem align='center'>B</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>

          {/* Flex 对齐方式 */}
          <View className='panel'>
            <View className='panel__title'>Flex 对齐方式</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtFlex justify='start'>
                  <AtFlexItem size='4'>
                    撑开高度 撑开高度 撑开高度 撑开高度
                  </AtFlexItem>
                  <AtFlexItem size='3'>B</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex justify='center'>
                  <AtFlexItem size='4'>
                    撑开高度 撑开高度 撑开高度 撑开高度
                  </AtFlexItem>
                  <AtFlexItem size='3'>B</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex justify='end'>
                  <AtFlexItem size='4'>
                    撑开高度 撑开高度 撑开高度 撑开高度
                  </AtFlexItem>
                  <AtFlexItem size='3'>B</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex justify='between'>
                  <AtFlexItem size='4'>
                    撑开高度 撑开高度 撑开高度 撑开高度
                  </AtFlexItem>
                  <AtFlexItem size='3'>B</AtFlexItem>
                </AtFlex>
              </View>
              <View className='example-item'>
                <AtFlex justify='around'>
                  <AtFlexItem size='4'>
                    撑开高度 撑开高度 撑开高度 撑开高度
                  </AtFlexItem>
                  <AtFlexItem size='3'>B</AtFlexItem>
                </AtFlex>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
