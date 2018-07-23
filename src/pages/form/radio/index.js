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
      radioValue: '',
      radioOptions: ['鸡', '鸭', '鹅'],
    }
  }
  handleRadioChange (detail) {
    this.setState({
      radioValue: detail.value
    })
  }
  render () {
    return (
      <View className='example__body'>
        <View className='item'><AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} /></View>
      </View>
    )
  }
}
