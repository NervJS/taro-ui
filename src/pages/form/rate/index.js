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
  handleRateChange (value) {
    this.setState({
      rateValue: value
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
              <View><AtRate value={this.state.rateValue} onChange={this.handleRateChange.bind(this)} /></View>
            </View>
            <View className='panel__title'>自定义星星大小</View>
            <View className='panel__content'>
              <View><AtRate size='20' value={this.state.rateValue} onChange={this.handleRateChange.bind(this)} /></View>
            </View>
            <View className='panel__title'>自定义评分数</View>
            <View className='panel__content'>
              <View><AtRate max={10} value={this.state.rateValue} onChange={this.handleRateChange.bind(this)} /></View>
            </View>
            <View className='panel__title'>只读</View>
            <View className='panel__content'>
              <View><AtRate value={5} /></View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
