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
      rateValue1: 3,
      rateValue2: 3,
      rateValue3: 3
    }
  }

  handleRateChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  render () {
    const { rateValue1, rateValue2, rateValue3 } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Rate 评分'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate value={rateValue1} onChange={this.handleRateChange.bind(this, 'rateValue1')} />
              </View>
            </View>
          </View>

          {/* 自定义尺寸 */}
          <View className='panel'>
            <View className='panel__title'>自定义尺寸</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate size='16' value={rateValue2} onChange={this.handleRateChange.bind(this, 'rateValue2')} />
              </View>
            </View>
          </View>

          {/* 自定义评分数 */}
          <View className='panel'>
            <View className='panel__title'>自定义评分数</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate max={10} value={rateValue3} onChange={this.handleRateChange.bind(this, 'rateValue3')} />
              </View>
            </View>
          </View>

          {/* 只读 */}
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
