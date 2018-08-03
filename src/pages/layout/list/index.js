import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtListItem from '../../../components/list/item/index'

import './index.scss'

export default class ListPage extends Component {
  config = {
    navigationBarTitleText: 'List Page'
  }

  render () {
    return (
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>列表</View>
        </View>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础列表</View>
            <View className='panel__content'>
              <View className='example__body'>
                <AtListItem
                  title='标题文字'
                  onClick={console.log.bind(this, 1)}
                />
                <AtListItem title='标题文字' arrow='right' />
                <AtListItem
                  arrow='right'
                  title='标题文字'
                  extraText='详细信息'
                />
                <AtListItem isSwitch arrow='right' title='标题文字' />
                <AtListItem
                  disabledPadding
                  arrow='right'
                  title='标题文字'
                  extraText='详细信息'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15307837419.PNG'
                />
                <AtListItem
                  arrow='right'
                  note='描述信息'
                  title='标题文字'
                  extraText='详细信息'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15307837419.PNG'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
