import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabs from '../../../components/tabs/index'
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
    const tabList1 = [{ title: '标签页1' }, { title: '默认颜色的标签页2' }]
    const tabList2 = [{ title: '标签页1' }, { title: '滚动的标签页2' }, { title: '标签页3' }, { title: '标签页4' }, { title: '标签页5' }]
    const tabList3 = [{ title: '标签页1' }, { title: '自定义颜色的标签页2' }, { title: '标签页3' }]
    return (
      <View className='example__body'>
        <View className='item'>
          <AtTabs tabList={tabList1} />
        </View>
        <View className='item'>
          <AtTabs scroll current={current} tabList={tabList2} onClick={this.handleClick.bind(this)} />
        </View>
        <View className='item'>
          <AtTabs onClick={this.handleClick.bind(this)} color='#f759ab' scroll current={current} tabList={tabList3} />
          {current === 0 ? <View className='tab-content'>标签1的内容</View> : null}
          {current === 1 ? <View className='tab-content'>标签2的内容</View> : null}
          {current === 2 ? <View className='tab-content'>标签3的内容</View> : null}
        </View>
      </View>
    )
  }
}
