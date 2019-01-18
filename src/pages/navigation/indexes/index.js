import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui'
import mockData from './mock-data'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  onClick (item) {
    console.log(item)
  }

  render () {
    return (
      <View className='page' style='height: 100vh;'>
        {/* 基础用法 */}
        <View style='height: 100%;'>
          <AtIndexes
            list={mockData}
            topKey='Top'
            onClick={this.onClick.bind(this)}
          >
            <View className='custom-area'>用户自定义内容</View>
          </AtIndexes>
        </View>
      </View>
    )
  }
}
