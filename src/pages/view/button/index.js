import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtButton from '../../../components/button/index'

import './index.scss'

export default class ButtonPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Button Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      // icons: [
      //   'arrow-left',
      //   'arrow-down-left',
      // ]
    }
  }

  onButtonClick () {
    alert('点击了！')
  }

  render () {
    // let {icons} = this.state
    return (
      <View className='page'>
        <View className='example'>
          <AtButton type='primary' onClick={this.onButtonClick.bind(this)}>页面主操作</AtButton>
        </View>
        <View className='example'>
          <AtButton type='primary' onClick={this.onButtonClick.bind(this)}>带icon</AtButton>
        </View>
        <View className='example'>
          <AtButton type='primary' active onClick={this.onButtonClick.bind(this)}>点击态</AtButton>
        </View>
        <View className='example'>
          <AtButton type='primary' disabled onClick={this.onButtonClick.bind(this)}>不可操作</AtButton>
        </View>


        <View className='example'>
          <AtButton type='secondary' onClick={this.onButtonClick.bind(this)}>页面次操作</AtButton>
        </View>
        <View className='example'>
          <AtButton type='secondary' onClick={this.onButtonClick.bind(this)}>带icon</AtButton>
        </View>
        <View className='example'>
          <AtButton type='secondary' active onClick={this.onButtonClick.bind(this)}>点击态</AtButton>
        </View>
        <View className='example'>
          <AtButton type='secondary' disabled onClick={this.onButtonClick.bind(this)}>不可操作</AtButton>
        </View>

        <View className='example'>
          <AtButton onClick={this.onButtonClick.bind(this)}>页面次要操作</AtButton>
        </View>
        <View className='example'>
          <AtButton onClick={this.onButtonClick.bind(this)}>带icon</AtButton>
        </View>
        <View className='example'>
          <AtButton active onClick={this.onButtonClick.bind(this)}>点击态</AtButton>
        </View>
        <View className='example'>
          <AtButton disabled onClick={this.onButtonClick.bind(this)}>不可操作</AtButton>
        </View>
      </View>
    )
  }
}
