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
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>菜单栏</View>
        </View>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>真实案例</View>
            <View className='panel__content'>
              <View className='example__body example__body--list'>
                <Button onClick={this.handleClick}>打开ActionSheet</Button>
              </View>
            </View>
          </View>
        </View>

        <AtActionSheet
          cancleText='取消'
          isOpened={isOpened}
          title='清除位置信息后， 别人将不能查看到你这里最多显示两行'
        >
          <AtActionSheetItem>按钮一</AtActionSheetItem>
          <AtActionSheetItem>按钮二</AtActionSheetItem>
          <AtActionSheetItem>
            <Text className='danger'>清除位置信息并退出</Text>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}
