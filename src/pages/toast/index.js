import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    return (
      <View className='index-page'>
        <View onClick={Taro.showToast.bind(this, { title: 'Toast Test' })}>
          Toast
        </View>
        <View
          onClick={Taro.showModal.bind(this, {
            title: 'Modal Test',
            content: '这是一个Modal框里面的内容'
          })}>
          Modal
        </View>
        <View onClick={Taro.showLoading.bind(this, { title: 'Start Loading' })}>
          Start Loading
        </View>
        <View
          onClick={Taro.hideLoading.bind(this, { itemList: 'Cancle Loading' })}>
          Cancle Loading
        </View>
        <View
          onClick={Taro.showActionSheet.bind(this, {
            itemList: ['Action Sheet Test']
          })}>
          Action Sheet
        </View>
      </View>
    )
  }
}
