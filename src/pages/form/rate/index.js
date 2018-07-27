import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtRate from '../../../components/rate/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'rate 使用示例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      rateValue: 3
    }
  }
  handleRateChange (detail) {
    this.setState({
      rateValue: detail.value
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>评分</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础</View>
            <View className='panel__content'>
              <View><AtRate size={20} value={this.state.rateValue} max={7} onChange={this.handleRateChange.bind(this)} /></View>
              <View><AtRate /></View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
