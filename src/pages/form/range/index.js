import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtRange } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value1: [20, 60],
      value2: [20, 60],
    }
  }

  handleChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Range 范围选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                数值范围：{this.state.value1[0]}~{this.state.value1[1]}
              </View>
              <AtRange
                value={[20, 60]}
                onChange={this.handleChange.bind(this, 'value1')}
              />
            </View>
          </View>
          {/* 自定义样式 */}
          <View className='panel'>
            <View className='panel__title'>自定义样式</View>
            <View className='panel__content'>
              <View className='example-item'>
                数值范围：{this.state.value2[0]}~{this.state.value2[1]}
              </View>
              <AtRange
                sliderStyle={{ backgroundColor: '#6190E8' }}
                value={this.state.value2}
                onChange={this.handleChange.bind(this, 'value2')}
              />
            </View>
          </View>
          {/* 禁止状态 */}
          <View className='panel'>
            <View className='panel__title'>禁止状态</View>
            <View className='panel__content'>
              <AtRange
                value={[20, 40]}
                disabled
              />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
