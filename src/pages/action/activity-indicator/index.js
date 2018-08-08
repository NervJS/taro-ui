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
        <DocsHeader title='Activity Indicator 活动指示器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 任意尺寸 */}
          <View className='panel'>
            <View className='panel__title'>任意尺寸</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <ActivityIndicator size='20' ></ActivityIndicator>
                </View>
                <View className='subitem'>
                  <ActivityIndicator size='30' />
                </View>
                <View className='subitem'>
                  <ActivityIndicator size='40' />
                </View>
                <View className='subitem'>
                  <ActivityIndicator size='50' />
                </View>
              </View>
            </View>
          </View>

          {/* 各种颜色 */}
          <View className='panel'>
            <View className='panel__title'>各种颜色</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <ActivityIndicator color='red' />
                </View>
                <View className='subitem'>
                  <ActivityIndicator color='#DE8C17' />
                </View>
                <View className='subitem'>
                  <ActivityIndicator color='#00D06D' />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义文字 */}
          <View className='panel'>
            <View className='panel__title'>自定义文字</View>
            <View className='panel__content'>
              <View className='example-item'>
                <ActivityIndicator content='加载中...' />
              </View>
            </View>
          </View>

          {/* 垂直水平居中 */}
          <View className='panel'>
            <View className='panel__title'>垂直水平居中</View>
            <View className='panel__content'>
              <View className='example-item example-item--center'>
                <ActivityIndicator mode='center' />
              </View>
              <View className='example-item example-item--center'>
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
