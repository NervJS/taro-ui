/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import AtActionSheet from '../../../components/action-sheet'
import AtActionSheetItem from '../../../components/action-sheet/body/item/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ActionSheetPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false
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
        {/* S Header */}
        <DocsHeader title='ActionSheet 操作面板' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 圆形头像 */}
          <View className='panel'>
            <View className='panel__title'>示例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button onClick={this.handleClick}>打开 ActionSheet</Button>
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
