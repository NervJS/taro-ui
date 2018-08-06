import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtButton from '../../../components/button/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ButtonPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  onButtonClick () {
    const ENV = Taro.getEnv()
    if (ENV === 'WEAPP') Taro.showModal({ content: '您点击了！', showCancel: false })
    else if (ENV === 'WEB') alert('您点击了！')
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Button 按钮'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 主操作 */}
          <View className='panel'>
            <View className='panel__title'>主操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton type='primary'>主操作按钮</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' loading>Loading</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' disabled>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 次要操作 */}
          <View className='panel'>
            <View className='panel__title'>次要操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton type='secondary'>次操作按钮</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='secondary' loading>Loading</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='secondary' disabled>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 次次要操作 */}
          <View className='panel'>
            <View className='panel__title'>次次要操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton>次次要操作按钮</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton icon='activity' loading>Loading</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton disabled>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 小按钮 */}
          <View className='panel'>
            <View className='panel__title'>小按钮</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small'>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small'>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small'>按钮</AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' loading></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' loading></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' loading></AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' disabled>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' disabled>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' disabled>按钮</AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角按钮 */}
          <View className='panel'>
            <View className='panel__title'>圆角按钮</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' circle>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' circle>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' circle>按钮</AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' loading circle></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' loading circle></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' loading circle></AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' disabled circle>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' disabled circle>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' disabled circle>按钮</AtButton>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
