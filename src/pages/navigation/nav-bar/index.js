import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtNavBar from '../../../components/nav-bar/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'nav bar 导航栏 示例'
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
      <View className='example__body'>
        <View className='item'>
          <AtNavBar
            onClickLeftIcon={this.handleClick.bind(this, '点击左边')}
            onClickRgIconSt={this.handleClick.bind(this, '点击右边1')}
            onClickRgIconNd={this.handleClick.bind(this, '点击右边2')}
            title='nav bar 导航栏 示例'
            leftIconType='return'
            leftText='返回'
            rightFirstIconType='group'
            rightSecondIconType='feedback'
          />
        </View>
        <View className='item'>
          <AtNavBar
            onClickLeftIcon={this.handleClick.bind(this, '点击左边')}
            onClickRgIconSt={this.handleClick.bind(this, '点击右边1')}
            onClickRgIconNd={this.handleClick.bind(this, '点击右边2')}
            title='nav bar 导航栏'
            leftIconType='return'
            rightFirstIconType='group'
            rightSecondIconType='feedback'
          />
        </View>
        <View className='item'>
          <AtNavBar
            onClickLeftIcon={this.handleClick.bind(this, '点击左边')}
            onClickRgIconSt={this.handleClick.bind(this, '点击右边1')}
            onClickRgIconNd={this.handleClick.bind(this, '点击右边2')}
            color='#000'
            title='nav bar导航栏 示例'
            leftIconType='return'
            leftText='返回'
            rightFirstIconType='feedback'
          />
        </View>
      </View>
    )
  }
}
