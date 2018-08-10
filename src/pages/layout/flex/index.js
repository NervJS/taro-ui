import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import DocsHeader from '../../components/doc-header'

import '../../../components/flex/index.scss'
import '../../../components/flex/item/index.scss'
import './index.scss'

export default class FlexPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='Flex 弹性布局' />

        <View className='doc-body'>
          {/* 基本案例 */}
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='at-flex'>
                  <View className='at-flex__item'>A</View>
                  <View className='at-flex__item'>B</View>
                  <View className='at-flex__item'>C</View>
                </View>
              </View>
            </View>
          </View>

          {/* 定义长度 */}
          <View className='panel'>
            <View className='panel__title'>定义长度</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='at-flex'>
                  <View className='at-flex__item at-flex__item-size--3'>A</View>
                  <View className='at-flex__item at-flex__item-size--6'>B</View>
                  <View className='at-flex__item at-flex__item-size--2'>C</View>
                  <View className='at-flex__item at-flex__item-size--1'>D</View>
                </View>
              </View>
            </View>
          </View>

          {/* 定义偏移 */}
          <View className='panel'>
            <View className='panel__title'>定义偏移</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='at-flex'>
                  <View className='at-flex__item at-flex__item-offset--2'>
                    A
                  </View>
                  <View className='at-flex__item at-flex__item-offset--3'>
                    B
                  </View>
                  <View className='at-flex__item'>C</View>
                </View>
              </View>
            </View>
          </View>

          {/* 超出换行 */}
          <View className='panel'>
            <View className='panel__title'>超出换行</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='at-flex at-flex__wrap--wrap'>
                  <View className='at-flex__item at-flex__item-size--4'>A</View>
                  <View className='at-flex__item at-flex__item-size--4'>B</View>
                  <View className='at-flex__item at-flex__item-size--4'>C</View>
                  <View className='at-flex__item at-flex__item-size--4'>D</View>
                  <View className='at-flex__item at-flex__item-size--4'>E</View>
                </View>
              </View>
            </View>
          </View>

          {/* 宽度根据内容撑开 */}
          <View className='panel'>
            <View className='panel__title'>宽度根据内容撑开</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='at-flex'>
                  <View className='at-flex__item at-flex__item-size--1 at-flex__item--auto'>
                    被内容撑开
                  </View>
                  <View className='at-flex__item'>B</View>
                </View>
              </View>
            </View>
          </View>

          {/* 内容自动换行 */}
          <View className='panel'>
            <View className='panel__title'>内容自动换行</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='at-flex'>
                  <View className='at-flex__item at-flex__item-size--1 at-flex__item--wrap'>
                    被内容撑开
                  </View>
                  <View className='at-flex__item'>B</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
