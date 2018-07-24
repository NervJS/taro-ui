import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtTag from '../../../components/tag/index'

import './index.scss'

export default class TagPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Tag Page'
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  onClick() {
    // alert('点击了！')
    console.log(arguments)
  }

  render() {
    // let {icons} = this.state
    return (
      <View className='page'>

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

        <View className='example'>
          <View className='example-item'>
            <AtTag type="primary" circle>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag type="primary">标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag type="primary" circle active>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag type="primary" active>标签</AtTag>
          </View>
        </View>

        <View className='example'>
          <View className='example-item'>
            <AtTag type="primary" circle disabled>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag type="primary" disabled>标签</AtTag>
          </View>
        </View>

        {/* 小尺寸 */}

        <View className='example'>
          <View className='example-item'>
            <AtTag size="small" circle onClick={this.onClick.bind(this)}>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small">标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small" circle active>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small" active>标签</AtTag>
          </View>
        </View>

        <View className='example'>
          <View className='example-item'>
            <AtTag size="small" type="primary" circle>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small" type="primary">标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small" type="primary" circle active>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small" type="primary" active>标签</AtTag>
          </View>
        </View>

        <View className='example'>
          <View className='example-item'>
            <AtTag size="small" type="primary" circle disabled>标签</AtTag>
          </View>
          <View className='example-item'>
            <AtTag size="small" type="primary" disabled>标签</AtTag>
          </View>
        </View>
        
      </View>
    )
  }
}
