import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import ActionSheet from '../../../components/action-sheet/index'

import './index.scss'

export default class ActionSheetPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'ActionSheet Page'
  }

  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    return (
      <View className='action-sheet__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>真实案例</Text>
          </View>
          <View className='example__body' />
        </View>
        <ActionSheet></ActionSheet>
      </View>
    )
  }
}
