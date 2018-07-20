import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtInput from '../../../components/input/index'
import AtActionInput from '../../../components/action-input/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'input 使用范例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      inputValue: '初始值',
    }
  }
  handleInput (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleChange (detail) {
    this.setState({
      inputValue: detail.value
    })
  }
  handleClick () {
    Taro.showToast({
      title: '已发送验证码',
      icon: 'success',
      duration: 2000
    })
  }
  render () {
    return (
      <View className='example__body'>
        <View className='item'><AtInput title='单项输入' placeholder='预设内容' value={this.state.inputValue} onChange={this.handleInput.bind(this)} /></View>
        <View className='item'>
          <AtInput title='标准五个字' placeholder='预设内容' />
          <AtInput title='多项' placeholder='预设内容' />
          <AtInput title='标题实在特别长就换行吧' placeholder='其他列保持正常间距' />
          <AtInput title='出现错误' error placeholder='其他列保持正常间距' />
        </View>
        <View className='input__item'>
          <AtActionInput placeholder='输入验证码' actionName='获取验证码' value={this.state.inputValue} onChange={this.handleChange.bind(this)} onClick={this.handleClick.bind(this)} />
          <AtActionInput placeholder='输入验证码' value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
        </View>
      </View>
    )
  }
}
