import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import DocsHeader from '../../components/doc-header'
import AtMessage from '../../../components/message/index'
import message from '../../../components/message/utils/index'
import AtButton from '../../../components/button/index'

import './index.scss'

export default class ToastPage extends Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  handleClick (type) {
    message({
      'message': '消息通知',
      'type': type,
    })
  }

  render () {
    return (
      <View className='page toast-page' style='padding:100px;'>
        {/* S Header */}
        <DocsHeader title='Message 消息通知' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this)}>
                  普通消息
                </AtButton>
              </View>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 'success')}>
                  成功消息
                </AtButton>
              </View>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 'error')}>
                  错误消息
                </AtButton>
              </View>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 'warning')}>
                  警告消息
                </AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
        <AtMessage />
      </View>
    )
  }
}
