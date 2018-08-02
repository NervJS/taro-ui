/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import AtActionSheet from '../../../components/action-sheet'
import AtActionSheetItem from '../../../components/action-sheet/body/item/index'

import './index.scss'

export default class ActionSheetPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'ActionSheet Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: true
    }
  }

  handleClick = e => {
    const state = Object.assign({ isOpened: true }, e.currentTarget.dataset)
    this.setState(state)
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='action-sheet__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>真实案例</Text>
          </View>
          <View className='example__body'>
            <Button onClick={this.handleClick}>打开ActionSheet</Button>
          </View>
        </View>
        <AtActionSheet title='标题' cancleText='取消' isOpened={isOpened}>
          <AtActionSheetItem>这是啥??</AtActionSheetItem>
          <AtActionSheetItem>这是啥</AtActionSheetItem>
          <AtActionSheetItem>这是啥</AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}
