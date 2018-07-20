import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class ActionSheet extends Taro.Component {
  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className='at-action-sheet'>
        <View className='at-action-sheet__overlay' />
        <View className='at-action-sheet__container'>
          <View className='at-action-sheet__container-header'>
            <View>清除位置信息后， 别人将不能查看到你</View>
            <View>这里最多显示两行</View>
          </View>
          <View className='at-action-sheet__container-body body__list'>
            <View className='body__list-item'>清除位置信息并退出 </View>
            <View className='body__list-item'>清除位置信息并退出</View>
            <View className='body__list-item'>清除位置信息并退出</View>
          </View>
          <View className='at-action-sheet__container-footer'>
            <View>取消</View>
          </View>
        </View>
      </View>
    )
  }
}
