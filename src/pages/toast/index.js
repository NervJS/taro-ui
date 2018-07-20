import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <View className='index-page'>
        <View >
          Toast
        </View>
        <View>
          Modal
        </View>
        <View >
          Start Loading
        </View>
        <View>
          Cancle Loading
        </View>
        <View>
          Action Sheet
        </View>
      </View>
    )
  }
}
