import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtDrawer from '../../../components/drawer/index'
import AtButton from '../../../components/button/index'

import './index.scss'

export default class DrawerPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Drawer Page'
  }
  constructor () {
    super(...arguments)
    this.state = {
      drawerShow1: false,
      drawerShow2: false,
    }
  }

  onClick1 () {
    this.setState({
      drawerShow1: !this.state.drawerShow1,
    })
  }

  onClick2 () {
    this.setState({
      drawerShow2: !this.state.drawerShow2,
    })
  }

  onClose (e, index) {
    this.setState({
      drawerShow1: false,
      drawerShow2: false,
    })

    const ENV = Taro.getEnv
    let content
    if (typeof index === 'undefined') {
      content = '你点击了遮罩关闭'
    } else {
      content = `你点击了第 ${+index + 1} 个项目`
    }
    if (ENV === 'WEAPP') Taro.showModal({ content })
    else if (ENV === 'WEB') alert(content)
  }

  render () {
    return (
      <View className='page'>

        <View className='example'>
          <AtButton type='primary' onClick={this.onClick1.bind(this)}>显示drawer(左边)</AtButton>
          {this.state.drawerShow1 && <AtDrawer show={this.state.drawerShow1} onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
          </AtDrawer>}
        </View>

        <View className='example'>
          <AtButton type='primary' onClick={this.onClick2.bind(this)}>显示drawer(右边)</AtButton>
          {this.state.drawerShow2 && <AtDrawer show={this.state.drawerShow2} right onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
          </AtDrawer>}
        </View>
      </View>
    )
  }
}
