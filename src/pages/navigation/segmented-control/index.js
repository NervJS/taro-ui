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
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    const { current } = this.state
    const tabList1 = ['标签页1', '标签页2' ]
    const tabList2 = ['标签页1', '标签页2', '标签页3']
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>分段器</View>
        </View>
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础</View>
            <View className='panel__content'>
              <View>
                <AtSegmentedControl onClick={this.handleClick.bind(this)} selectedColor='#6190E8' current={current} values={tabList2} />
                {current === 0 ? <View className='tab-content'>标签1的内容</View> : null}
                {current === 1 ? <View className='tab-content'>标签2的内容</View> : null}
                {current === 2 ? <View className='tab-content'>标签3的内容</View> : null}
              </View>
            </View>
            <View className='panel__title'>禁用</View>
            <View className='panel__content'>
              <View><AtSegmentedControl disabled values={tabList1} /></View>
            </View>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content'>
              <View>
                <AtSegmentedControl onClick={this.handleClick.bind(this)} selectedColor='#FF4949' fontSize='12' current={current} values={tabList2} />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
