import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
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
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                />
              </View>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                  rightFirstIconType='user'
                />
              </View>
            </View>
          </View>

          {/* 自定义左上角文案 */}
          <View className='panel'>
            <View className='panel__title'>自定义左上角文案</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftText='返回'
                  leftIconType='chevron-left'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
              <View className='example-item'>
                <AtNavBar
                  onClickLeftIcon={this.handleClick.bind(this, '返回')}
                  title='NavBar 导航栏示例'
                  leftText='返回'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content no-padding'>
              <AtNavBar
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#333'
                title='NavBar 导航栏示例'
                leftText='返回'
                rightFirstIconType='bullet-list'
                rightSecondIconType='user'
              />
            </View>
          </View>

          {/* 自定义图标样式 */}
          <View className='panel'>
            <View className='panel__title'>自定义图标样式</View>
            <View className='panel__content no-padding'>
              <AtNavBar
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#333'
                title='NavBar 导航栏示例'
                leftText='返回'
                rightFirstIconType='bullet-list'
                rightSecondIconType={{ value: 'user', size: 36, color: 'red' }}
              />
            </View>
          </View>

          {/* 无下划线 */}
          <View className='panel'>
            <View className='panel__title'>无下划线</View>
            <View className='panel__content no-padding'>
              <AtNavBar
                border={false}
                onClickRgIconSt={this.clickList.bind(this)}
                onClickRgIconNd={this.clickMy.bind(this)}
                onClickLeftIcon={this.clickReturn.bind(this)}
                color='#333'
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
