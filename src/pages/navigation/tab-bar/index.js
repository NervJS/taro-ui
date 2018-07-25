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
  handleClick (detail) {
    this.setState({
      current: detail.value
    })
  }
  render () {
    const { current } = this.state
    return (
      <View className='example__body'>
        <View className='item'>
          <AtTabBar tabList={[{ title: '标签页1' }, { title: '标签页2' }]} />
        </View>
        <View className='item'>
          <AtTabBar current={1} tabList={[{ title: '标签页1' }, { title: '很长很长很长很长的标签页2' }, { title: '标签页3' }, { title: '标签页4' }, { title: '标签页5' }, { title: '标签页7' }, { title: '标签页8' }, { title: '标签页9' }]} />
        </View>
        <View className='item'>
          <AtTabBar onClick={this.handleClick.bind(this)} color='#f759ab' scroll current={current} tabList={[{ title: '标签页1' }, { title: '很长很长很长很长的标签页2' }, { title: '标签页3' }]} />
          {current === 0 ? <View className='tab-content'>标签1的内容</View> : null}
          {current === 1 ? <View className='tab-content'>标签2的内容</View> : null}
          {current === 2 ? <View className='tab-content'>标签3的内容</View> : null}
        </View>
      </View>
    )
  }
}
