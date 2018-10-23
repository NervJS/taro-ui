import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtDivider from '../../../components/divider/index'
import AtIcon from '../../../components/icon/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class LoadMorePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='LoadMore 页面提示'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content no-padding'>
              <AtDivider content='分割线' />
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content no-padding'>
              <AtDivider content='没有更多了' fontColor='#ed3f14' lineColor='#ed3f14' />
              <AtDivider content='没有更多了' fontColor='#ff9900' lineColor='#ff9900' />
              <AtDivider content='没有更多了' color='#2d8cf0' lineColor='#2d8cf0' />
            </View>
          </View>

          {/* 自定义内容 */}
          <View className='panel'>
            <View className='panel__title'>自定义内容</View>
            <View className='panel__content no-padding'>
              <AtDivider>
                <AtIcon value='check-circle'></AtIcon>
              </AtDivider>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
