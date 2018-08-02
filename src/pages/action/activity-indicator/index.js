import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import ActivityIndicator from '../../../components/activity-indicator/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ActivityIndicatorPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.atButton = ''
    this.state = {}
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='活动指示器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 任意尺寸 */}
          <View className='panel'>
            <View className='panel__title'>任意尺寸</View>
            <View className='panel__content'>
              <View className='example__body example__body--list'>
                <ActivityIndicator size='50' >11</ActivityIndicator>
                <ActivityIndicator size='75' />
                <ActivityIndicator size='100' />
              </View>
            </View>
          </View>

          {/* 各种颜色 */}
          <View className='panel'>
            <View className='panel__title'>各种颜色</View>
            <View className='panel__content'>
              <View className='example__body example__body--color'>
                <ActivityIndicator color='red' />
                <ActivityIndicator color='#DE8C17' />
                <ActivityIndicator color='#00D06D' />
              </View>
            </View>
          </View>

          {/* 自定义文字 */}
          <View className='panel'>
            <View className='panel__title'>自定义文字</View>
            <View className='panel__content'>
              <View className='example__body example__body--custom'>
                <ActivityIndicator content='加载中...' />
              </View>
            </View>
          </View>

          {/* 垂直水平居中 */}
          <View className='panel'>
            <View className='panel__title'>垂直水平居中</View>
            <View className='panel__content'>
              <View className='example__body example__body--center'>
                <ActivityIndicator mode='center' />
              </View>
              <View className='example__body example__body--center'>
                <ActivityIndicator mode='center' content='Loading...' />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
