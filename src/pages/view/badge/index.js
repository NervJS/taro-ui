import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtBadge from '../../../components/badge/index'
import AtButton from '../../../components/button/index'

import './index.scss'

export default class BadgePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Badge Page'
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  // onButtonClick() {
  //   alert('点击了！')
  // }

  render() {
    // let {icons} = this.state
    return (
      <View className='page'>

        <View className='example'>
          <View className='example-item'>
            <AtBadge value="10" maxValue="99">
              <AtButton size="small" circle>按钮</AtButton>
            </AtBadge>
          </View>
          <View className='example-item'>
            <AtBadge value="10" maxValue="99">
              <AtButton size="small">按钮</AtButton>
            </AtBadge>
          </View> 
        </View> 

        <View className='example'>
          <View className='example-item'>
            <AtBadge dot>
              <AtButton size="small" circle>按钮</AtButton>
            </AtBadge>
          </View> 
          <View className='example-item'>
            <AtBadge dot>
              <AtButton size="small">按钮</AtButton>
            </AtBadge>
          </View> 
        </View> 

        <View className='example'>
          <View className='example-item'>
            <AtBadge value="new">
              <AtButton size="small" circle>按钮</AtButton>
            </AtBadge>
          </View> 
          <View className='example-item'>
            <AtBadge value="new">
              <AtButton size="small">按钮</AtButton>
            </AtBadge>
          </View> 
        </View> 

        <View className='example'>
          <View className='example-item'>
            <AtBadge value="...">
              <AtButton size="small" circle>按钮</AtButton>
            </AtBadge>
          </View> 
          <View className='example-item'>
            <AtBadge value="...">
              <AtButton size="small">按钮</AtButton>
            </AtBadge>
          </View> 
        </View> 
        
      </View>
    )
  }
}
