import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtInputNumber } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      number1: 1,
      number2: 1,
      number3: 1,
      number4: 1,
      number5: 1,
      number6: 1
    }
  }
  handleNumberChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Input Number 数字输入框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>min=0, max=10, step=1</View>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number1}
                  onChange={this.handleNumberChange.bind(this, 'number1')}
                />
              </View>
            </View>
          </View>

          {/* 小数 */}
          <View className='panel'>
            <View className='panel__title'>小数</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>min=0, max=10, step=0.1</View>
                <AtInputNumber
                  type='digit'
                  min={0}
                  max={10}
                  step={0.1}
                  value={this.state.number2}
                  onChange={this.handleNumberChange.bind(this, 'number2')}
                />
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className='panel'>
            <View className='panel__title'>禁用状态</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtInputNumber
                  disabled
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number3}
                  onChange={this.handleNumberChange.bind(this, 'number3')}
                />
              </View>
            </View>
          </View>
          {/* 禁用输入状态 */}
          <View className='panel'>
            <View className='panel__title'>禁用输入状态</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtInputNumber
                  disabledInput
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number6}
                  onChange={this.handleNumberChange.bind(this, 'number6')}
                />
              </View>
            </View>
          </View>

          {/* 自定义宽度 */}
          <View className='panel'>
            <View className='panel__title'>自定义宽度</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtInputNumber
                  width={200}
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number4}
                  onChange={this.handleNumberChange.bind(this, 'number4')}
                />
              </View>
            </View>
          </View>

          {/* 大尺寸 */}
          <View className='panel'>
            <View className='panel__title'>大尺寸</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtInputNumber
                  size='lg'
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number5}
                  onChange={this.handleNumberChange.bind(this, 'number5')}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
