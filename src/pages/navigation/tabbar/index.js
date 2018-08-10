import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabBar from '../../../components/tab-bar/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const { current } = this.state
    const tabList1 = [{ title: '待办事项', text: 8 }, { title: '拍照' }, { title: '通讯录', dot: true }]
    const tabList2 = [{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]

    return (
      <View className='page'>
        <DocsHeader title='TabBar 标签栏'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>文本标签栏</View>
            <View className='panel__content no-padding'>
              <AtTabBar tabList={tabList1} onClick={this.handleClick.bind(this)} current={current} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>图标文本标签栏</View>
            <View className='panel__content no-padding'>
              <AtTabBar tabList={tabList2} onClick={this.handleClick.bind(this)} current={current} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>自定义图标颜色、字体颜色、背景颜色</View>
            <View className='panel__content no-padding'>
              <AtTabBar backgroundColor='#ececec' color='#ea6bb8' selectedColor='#e64340' tabList={tabList2} onClick={this.handleClick.bind(this)} current={current} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>固定底部</View>
            <AtTabBar fixed tabList={tabList2} onClick={this.handleClick.bind(this)} current={current} />
          </View>
        </View>
      </View>
    )
  }
}
