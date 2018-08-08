import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtDrawer from '../../../components/drawer/index'
import AtButton from '../../../components/button/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class DrawerPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      leftDrawerShow: false,
      rightDrawerShow: false,
    }
  }

  leftDrawerClick () {
    console.log('click====')
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }

  rightDrawerClick () {
    this.setState({
      rightDrawerShow: !this.state.rightDrawerShow,
    })
  }

  onClose (e, index) {
    this.setState({
      leftDrawerShow: false,
      rightDrawerShow: false,
    })

    const ENV = Taro.getEnv()
    let content
    if (typeof index !== 'number') {
      // content = '你点击了遮罩关闭'
      content = ''
    } else {
      content = `你点击了第 ${+index + 1} 个项目`
    }
    if (ENV === 'WEAPP') content && Taro.showModal({ content, showCancel: false })
    else if (ENV === 'WEB') content && alert(content)
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='Drawer 抽屉'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>左边滑出</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.leftDrawerClick.bind(this)}>显示drawer</AtButton>
                {this.state.leftDrawerShow && <AtDrawer show={this.state.leftDrawerShow} mask onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>}
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>右边滑出</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.rightDrawerClick.bind(this)}>显示drawer</AtButton>
                {this.state.rightDrawerShow && <AtDrawer show={this.state.rightDrawerShow} right mask onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>}
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
