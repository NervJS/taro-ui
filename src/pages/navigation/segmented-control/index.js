import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtSegmentedControl from '../../../components/segmented-control/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'segmented-control 分段器示例'
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
    const tabList1 = [{ title: '标签页1' }, { title: '标签页2' }]
    const tabList2 = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    const tabList3 = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }, { title: '标签页4' }]
    return (
      <View className='example__body'>
        <View className='item'>
          <AtSegmentedControl disabled tabList={tabList1} />
        </View>
        <View className='item'>
          <AtSegmentedControl onClick={this.handleClick.bind(this)} selectedColor='#6190E8' current={current} tabList={tabList2} />
          {current === 0 ? <View className='tab-content'>标签1的内容</View> : null}
          {current === 1 ? <View className='tab-content'>标签2的内容</View> : null}
          {current === 2 ? <View className='tab-content'>标签3的内容</View> : null}
        </View>
        <View className='item'>
          <AtSegmentedControl onClick={this.handleClick.bind(this)} selectedColor='#FF4949' fontSize='12' current={current} tabList={tabList3} />
        </View>
      </View>
    )
  }
}
