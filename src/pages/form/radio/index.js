import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtRadio from '../../../components/radio/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'radio 使用示例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      radioValue: 'apple',
      radioOptions: [{ label: '苹果', value: 'apple' }, { label: '梨子', value: 'pear' }, { label: '菠萝', value: 'pineapple' }],
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
        <View className='doc-header'>
          <View className='doc-header__title'>单选框</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础单选框</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='item'><AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} /></View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
