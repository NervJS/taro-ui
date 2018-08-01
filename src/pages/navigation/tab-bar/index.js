import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabBar from '../../../components/tab-bar/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'tabs 标签页示例'
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
    const tabList1 = [{ title: '标签页1', dot: true }, { title: '标签页2', count: 8 }]
    const tabList2 = [{ title: '标签页1', iconType: 'computer', dot: true, selectedIconType: 'computer_fill', count: 'new' }, { title: '标签页2', iconType: 'computer', dot: true }, { title: '标签页3', iconType: 'computer', count: '99' }]
    return (
      <View className='example__body'>
        <View className='item'>
          <AtTabBar tabList={tabList1} onClick={this.handleClick.bind(this)} current={current} />
        </View>
        <View className='item'>
          <AtTabBar backgroundColor='#B2B2B2' onClick={this.handleClick.bind(this)} selectedColor='#6190E8' fontSize='10' current={current} tabList={tabList2} />
          {current === 0 ? <View className='tab-content'>标签1的内容</View> : null}
          {current === 1 ? <View className='tab-content'>标签2的内容</View> : null}
          {current === 2 ? <View className='tab-content'>标签3的内容</View> : null}
        </View>
        <AtTabBar fixed onClick={this.handleClick.bind(this)} selectedColor='#6190E8' fontSize='10' current={current} tabList={tabList2} />
      </View>
    )
  }
}
