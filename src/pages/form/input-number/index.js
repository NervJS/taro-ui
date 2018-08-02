import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtInputNumber from '../../../components/input-number/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'input-number 使用范例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      number: 1
    }
  }
  handleNumberChange (value) {
    this.setState({
      number: value
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='数字输入框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础数字输入框</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='item'><AtInputNumber min={0} max={10} step={1} value={this.state.number} onChange={this.handleNumberChange.bind(this)} /></View>
              </View>
            </View>
            <View className='panel__title'>小数</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='item'><AtInputNumber min={0} max={1} step={0.1} value={this.state.number} onChange={this.handleNumberChange.bind(this)} /></View>
              </View>
            </View>
            <View className='panel__title'>其他规格</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='item'>
                  <AtInputNumber size='middle' min={0} max={1} step={0.1} value={this.state.number} onChange={this.handleNumberChange.bind(this)} />
                </View>
                <View className='item'>
                  <AtInputNumber size='small' min={0} max={1} step={0.1} value={this.state.number} onChange={this.handleNumberChange.bind(this)} />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
