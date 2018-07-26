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
      drawerShow: true,
    }
  }

  onClick () {
    this.setState({
      drawerShow: !this.state.drawerShow,
    })
  }

  onClose () {
    this.setState({
      drawerShow: false,
    })
  }

  render () {
    return (
      <View className='page'>

        <View className='example'>
          <AtButton onClick={this.onClick.bind(this)}>显示drawer</AtButton>
          <AtDrawer show={this.state.drawerShow} onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}></AtDrawer>
        </View>
      </View>
    )
  }
}
