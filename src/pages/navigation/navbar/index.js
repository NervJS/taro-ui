import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtNavBar from '../../../components/nav-bar/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  handleClick (title) {
    Taro.showToast({
      'title': title,
      'duration': 2000,
      'icon': 'success'
    })
  }
  clickReturn () {
    Taro.showToast({
      'title': '返回',
      'duration': 2000,
      'icon': 'success'
    })
  }
  clickMy () {
    Taro.showToast({
      'title': '我的',
      'duration': 2000,
      'icon': 'success'
    })
  }
  clickList () {
    Taro.showToast({
      'title': '功能列表',
      'duration': 2000,
      'icon': 'success'
    })
  }
  render () {
    return (
      <View className='page'>
        <DocsHeader title='NavBar 导航栏'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <AtNavBar
                onClickLeftIcon={this.handleClick.bind(this, '返回')}
                title='NavBar 导航栏示例'
                leftIconType='chevron-left'
              />
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义图标、文字、颜色</View>
            <View className='panel__content'>
              <AtNavBar
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#000'
                title='NavBar 导航栏示例'
                leftText='返回'
                rightFirstIconType='bullet-list'
                rightSecondIconType='user'
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
