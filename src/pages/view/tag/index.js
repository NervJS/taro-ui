import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtTag from '../../../components/tag/index'
import DocsHeader from '../../components/doc-header'

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
        <DocsHeader title='Tag 标签'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 常规标签 */}
          <View className='panel'>
            <View className='panel__title'>常规标签</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag name='tag-1' circle onClick={this.onClick.bind(this)}>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag name='tag-2'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag name='tag-3' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag name='tag-4' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 选中态 */}
          <View className='panel'>
            <View className='panel__title'>选中态</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag name='tag-5' type='primary' circle>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag name='tag-6' type='primary'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag name='tag-7' type='primary' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag name='tag-8' type='primary' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 不可点击态 */}
          <View className='panel'>
            <View className='panel__title'>不可点击态</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag type='primary' disabled>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 常规标签（小） */}
          <View className='panel'>
            <View className='panel__title'>常规标签（小）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' circle onClick={this.onClick.bind(this)}>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 选中态（小） */}
          <View className='panel'>
            <View className='panel__title'>选中态（小）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 不可点击态（小） */}
          <View className='panel'>
            <View className='panel__title'>不可点击态（小）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='subitem'>
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
