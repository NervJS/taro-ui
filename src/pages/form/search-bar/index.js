import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      value2: '',
      value3: ''
    }
  }
  onChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  onActionClick () {
    Taro.showToast({
      title: '开始搜索',
      icon: 'success',
      duration: 2000
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='SearchBar 搜索栏'></DocsHeader>
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  value={this.state.value1}
                  onChange={this.onChange.bind(this, 'value1')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 自定义按钮文字和点击事件 */}
          <View className='panel'>
            <View className='panel__title'>自定义按钮文字和点击事件</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  actionName='搜一下'
                  value={this.state.value2}
                  onChange={this.onChange.bind(this, 'value2')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 始终显示按钮 */}
          <View className='panel'>
            <View className='panel__title'>始终显示按钮</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  showActionButton
                  value={this.state.value3}
                  onChange={this.onChange.bind(this, 'value3')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
