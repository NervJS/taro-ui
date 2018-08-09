import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtRadio from '../../../components/radio/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      radioValue: 'option1',
      radioOptions: [{ label: '单选项', value: 'option1', desc: '单选项描述' }, { label: '单选项', value: 'option2' }, { label: '单选项禁用某一项', value: 'option3', disabled: true }],
    }
  }
  handleRadioChange (value) {
    this.setState({
      radioValue: value
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
          <View className='panel'>
            <View className='panel__title'>基础单选框</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
