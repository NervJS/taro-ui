import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtButton from '../../../components/button/index'

import './index.scss'

export default class ButtonPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Button Page'
  }

  constructor() {
    super(...arguments)
    this.state = {
      // icons: [
      //   'arrow-left',
      //   'arrow-down-left',
      // ]
    }
  }

  render() {
    // let {icons} = this.state
    return (
      <View className='page'>
        <View className='example'>
          <AtButton>测试按钮</AtButton>
        </View>
        <View className='example'>
          <AtButton>测试按钮</AtButton>
        </View>
        <View className='example'>
          <AtButton disabled>测试按钮</AtButton>
        </View>
        <View className='example'>
          <AtButton type="secondary">测试按钮</AtButton>
        </View>
        <View className='example'>
          <AtButton type="secondary" disabled>测试按钮</AtButton>
        </View>
      </View>
    )
  }
}
