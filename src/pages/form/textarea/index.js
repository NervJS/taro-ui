import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTextarea from '../../../components/textarea/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'textarea 使用范例'
  }
  constructor() {
    super(...arguments)
    this.state = {
      textareaValue: ''
    }
  }
  handleTextAreaChange(e) {
    this.setState({
      textareaValue: e.target.value
    })
  }

  render() {
    return (
      <View className='example__body'>
        <View className='item'>
          <AtTextarea
            value={this.state.textareaValue}
            onChange={this.handleTextAreaChange.bind(this)}
            maxlength='200'
            placeholder='你的问题是...' />
        </View>
      </View>
    )
  }
}
