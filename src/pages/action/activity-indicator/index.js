import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import ActivityIndicator from '../../../components/activity-indicator/index'

import './index.scss'

export default class ActivityIndicatorPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'ActivityIndicator Page'
  }

  constructor() {
    super(...arguments)
    this.atButton = ''
    this.state = {}
  }

  render() {
    return (
      <View className='activity-indicator__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>任意尺寸</Text>
          </View>
          <View className='example__body example__body--list'>
            <ActivityIndicator size='50' />
            <ActivityIndicator size='75' />
            <ActivityIndicator size='100' />
          </View>
        </View>
        <View className='example example--color'>
          <View className='example__header'>
            <Text className='example__header-title'>各种颜色</Text>
          </View>
          <View className='example__body example__body--color'>
            <ActivityIndicator color='red' />
            <ActivityIndicator color='#DE8C17' />
            <ActivityIndicator color='#00D06D' />
          </View>
        </View>
        <View className='example example--custom'>
          <View className='example__header'>
            <Text className='example__header-title'>自定义文字</Text>
          </View>
          <View className='example__body example__body--custom'>
            <ActivityIndicator text='加载中...' />
          </View>
        </View>
        <View className='example example--center'>
          <View className='example__header'>
            <Text className='example__header-title'>垂直水平居中</Text>
          </View>
          <View className='example__body example__body--center'>
            <ActivityIndicator mode='center' />
          </View>
        </View>
      </View>
    )
  }
}
