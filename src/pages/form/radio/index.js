import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtRadio } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      radioValue1: 'option1',
      radioValue2: 'option1',
      radioOptions1: [
        { label: '单选项一', value: 'option1' },
        { label: '单选项二', value: 'option2' },
        { label: '单选项三', value: 'option3' }
      ],
      radioOptions2: [
        { label: '单选项一', value: 'option1', desc: '单选项描述一' },
        { label: '单选项二', value: 'option2', desc: '单选项描述二' },
        { label: '单选项三', value: 'option3', desc: '单选项描述三' }
      ],
      radioOptions3: [
        { label: '单选项一', value: 'option1', desc: '单选项描述' },
        { label: '单选项二', value: 'option2' },
        { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
      ],
    }
  }

  handleRadioChange (value) {
    this.setState({
      radioValue1: value
    })
  }

  handleRadioChangeScnd (value) {
    this.setState({
      radioValue2: value
    })
  }

  handleRadioChangeThd (value) {
    this.setState({
      radioValue3: value
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Radio 单选框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio options={this.state.radioOptions1} value={this.state.radioValue1} onClick={this.handleRadioChange.bind(this)} />
              </View>
            </View>
          </View>

          {/* 含有单项描述 */}
          <View className='panel'>
            <View className='panel__title'>含有单项描述</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio options={this.state.radioOptions2} value={this.state.radioValue2} onClick={this.handleRadioChangeScnd.bind(this)} />
              </View>
            </View>
          </View>

          {/* 单项禁用 */}
          <View className='panel'>
            <View className='panel__title'>单项禁用</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio options={this.state.radioOptions3} value={this.state.radioValue3} onClick={this.handleRadioChangeThd.bind(this)} />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
