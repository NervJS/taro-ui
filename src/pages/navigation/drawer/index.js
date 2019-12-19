import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtDrawer, AtButton, AtIcon, AtBadge } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class DrawerPage extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false,
      childrenItem: ['首页', '可自定义结构', '或自定义样式', '消息', '个人'],
      icons: ['home', '', '', 'message', 'user'],
    }
  }

  leftDrawerClick () {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }

  rightDrawerClick () {
    this.setState({
      rightDrawerShow: !this.state.rightDrawerShow,
    })
  }

  childrenDrawerClick () {
    this.setState({
      childrenDrawerShow: !this.state.childrenDrawerShow,
    })
  }

  onItemClick (index) {
    const ENV = Taro.getEnv()
    let content
    if (typeof index !== 'number') {
      content = ''
    } else {
      content = `你点击了第 ${+index + 1} 个项目`
    }
    if (ENV !== 'WEB') content && Taro.showModal({ content, showCancel: false })
    else content && alert(content)
  }

  onClose () {
    this.setState({
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false,
    })
  }

  render () {
    const {
      icons,
    } = this.state
    return (
      <View className='page'>
        <DocsHeader title='Drawer 抽屉'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>左边滑出</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.leftDrawerClick.bind(this)}>显示 Drawer</AtButton>
                <AtDrawer show={this.state.leftDrawerShow} mask onItemClick={this.onItemClick.bind(this)} onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>右边滑出</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.rightDrawerClick.bind(this)}>显示 Drawer</AtButton>
                <AtDrawer show={this.state.rightDrawerShow} right mask onItemClick={this.onItemClick.bind(this)} onClose={this.onClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义内容</View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.childrenDrawerClick.bind(this)}>显示 Drawer</AtButton>
                <AtDrawer show={this.state.childrenDrawerShow} mask onItemClick={this.onItemClick.bind(this)} onClose={this.onClose.bind(this)}>
                  {
                    this.state.childrenItem.map((item, index) => <View className={classNames('drawer-item', {
                      'drawer-item--sub': index === 1 || index === 2,
                    })} onClick={this.onItemClick.bind(this, index)} key={`drawer-item-${index}`}
                    >
                      {item}
                      {index !== 3 && icons[index] && <AtIcon value={icons[index]} size='20' />}
                      {index === 3 && icons[index] && <AtBadge value='3'><AtIcon value={icons[index]} size='20' /></AtBadge>}
                    </View>)
                  }
                </AtDrawer>
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
