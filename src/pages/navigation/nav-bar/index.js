import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtNavBar from '../../../components/nav-bar/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'NavBar 导航栏示例'
  }
  handleClick (title) {
    Taro.showToast({
      'title': title,
      'duration': 2000,
      'icon': 'success'
    })
  }
  render () {
    return (
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>NavBar 导航栏</View>
        </View>
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <AtNavBar
                onClickLeftIcon={this.handleClick.bind(this, '点击左边')}
                onClickRgIconSt={this.handleClick.bind(this, '点击右边1')}
                onClickRgIconNd={this.handleClick.bind(this, '点击右边2')}
                title='NavBar 导航栏示例'
                leftIconType='return'
                leftText='返回'
                rightFirstIconType='group'
                rightSecondIconType='feedback'
              />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>自定义图标颜色</View>
            <View className='panel__content'>
              <AtNavBar
                onClickLeftIcon={this.handleClick.bind(this, '点击左边')}
                onClickRgIconNd={this.handleClick.bind(this, '点击右边2')}
                color='#000'
                title='NavBar 导航栏示例'
                leftIconType='return'
                leftText='返回'
                rightSecondIconType='feedback'
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
