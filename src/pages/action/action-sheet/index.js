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
      isOpened1: false,
      isOpened2: false,
      isOpened3: false
    }
  }

  handleClick = e => {
    const { type } = e.currentTarget.dataset

    this.setState({
      [`isOpened${type}`]: true
    })
  }

  showToast = name => {
    Taro.showToast({
      icon: 'none',
      title: name
    })
  }

  render () {
    const { isOpened1, isOpened2, isOpened3 } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ActionSheet 操作面板' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 无 Title */}
          <View className='panel'>
            <View className='panel__title'>无标题</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button data-type='1' onClick={this.handleClick}>打开 ActionSheet</Button>
              </View>
            </View>
          </View>

          {/* 含标题 */}
          <View className='panel'>
            <View className='panel__title'>含标题</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button data-type='2' onClick={this.handleClick}>打开 ActionSheet</Button>
              </View>
            </View>
          </View>

          {/* 自定义选项 */}
          <View className='panel'>
            <View className='panel__title'>自定义选项</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button data-type='3' onClick={this.handleClick}>打开 ActionSheet</Button>
              </View>
            </View>
          </View>
        </View>

        <AtActionSheet
          cancleText='取消'
          isOpened={isOpened1}
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一按钮一按钮一按钮一按钮一按钮一按钮一按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancleText='取消'
          isOpened={isOpened2}
          title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancleText='取消'
          isOpened={isOpened3}
          title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '成功清除位置')}
          >
            <Text className='danger'>清除位置信息并退出</Text>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}
