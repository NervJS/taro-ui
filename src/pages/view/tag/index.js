import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtTag from '../../../components/tag/index'

import './index.scss'

export default class TagPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
    // alert('点击了！')
    console.log(arguments)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>标签</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 常规标签 */}
          <View className='panel'>
            <View className='panel__title'>常规标签</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtTag circle onClick={this.onClick.bind(this)}>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag circle active>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 选中态 */}
          <View className='panel'>
            <View className='panel__title'>选中态</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtTag type='primary' circle>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag type='primary'>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag type='primary' circle active>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag type='primary' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 不可点击态 */}
          <View className='panel'>
            <View className='panel__title'>不可点击态</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtTag type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag type='primary' disabled>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 常规标签（小） */}
          <View className='panel'>
            <View className='panel__title'>常规标签（小）</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtTag size='small' circle onClick={this.onClick.bind(this)}>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small'>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small' circle active>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 选中态（小） */}
          <View className='panel'>
            <View className='panel__title'>选中态（小）</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtTag size='small' type='primary' circle>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small' type='primary'>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small' type='primary' circle active>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small' type='primary' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 不可点击态（小） */}
          <View className='panel'>
            <View className='panel__title'>不可点击态（小）</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtTag size='small' type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='example-item'>
                  <AtTag size='small' type='primary' disabled>标签</AtTag>
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
