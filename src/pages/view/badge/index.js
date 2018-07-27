import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtBadge from '../../../components/badge/index'
import AtButton from '../../../components/button/index'

import './index.scss'

export default class BadgePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>徽标</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 常规徽标 */}
          <View className='panel'>
            <View className='panel__title'>常规徽标</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtBadge value='10' maxValue='99'>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='example-item'>
                  <AtBadge value='10' maxValue='99'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 小红点 */}
          <View className='panel'>
            <View className='panel__title'>小红点</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtBadge dot>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='example-item'>
                  <AtBadge dot>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 文本 */}
          <View className='panel'>
            <View className='panel__title'>文本</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtBadge value='new'>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='example-item'>
                  <AtBadge value='new'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* 省略号 */}
          <View className='panel'>
            <View className='panel__title'>省略号</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtBadge value='...'>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='example-item'>
                  <AtBadge value='...'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
