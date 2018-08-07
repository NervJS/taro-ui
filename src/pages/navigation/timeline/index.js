import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTimeline from '../../../components/timeline/index'
import AtTimelineItem from '../../../components/timeline/item'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class TimelinePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='Timeline 时间轴'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTimeline pending>
                  <AtTimelineItem>刷牙洗脸</AtTimelineItem>
                  <AtTimelineItem color='green'>吃早餐</AtTimelineItem>
                  <AtTimelineItem color='red'>上班</AtTimelineItem>
                  <AtTimelineItem color='yellow'>睡觉</AtTimelineItem>
                </AtTimeline>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>带icon</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTimeline pending>
                  <AtTimelineItem icon='check-circle' color='red'>刷牙洗脸</AtTimelineItem>
                  <AtTimelineItem icon='clock'>吃早餐</AtTimelineItem>
                  <AtTimelineItem icon='clock'>上班</AtTimelineItem>
                  <AtTimelineItem icon='clock'>睡觉</AtTimelineItem>
                </AtTimeline>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
