import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import AtRate from '../../../components/rate/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
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
        <DocsHeader title='Rate 评分'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate value={this.state.rateValue} onChange={this.handleRateChange.bind(this)} />
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义星星大小</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate size='12' value={this.state.rateValue} onChange={this.handleRateChange.bind(this)} />
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义评分数</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate max={10} value={this.state.rateValue} onChange={this.handleRateChange.bind(this)} />
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>只读</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View><AtRate value={3.5} /><Text className='rate'>评分: 3.5</Text></View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
