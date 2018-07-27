import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtInput from '../../../components/input/index'
import AtActionInput from '../../../components/action-input/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      inputValue: ''
    }
  }
  handleInput (detail) {
    this.setState({
      inputValue: detail.value
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
  clearValue () {
    this.setState({
      inputValue: ''
    })
  }
  handleBlur () {
    Taro.showToast({
      title: '失去焦点',
      icon: 'success',
      duration: 2000
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>输入框</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础输入框</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='item'><AtInput title='单项输入' placeholder='预设内容' value={this.state.inputValue} onChange={this.handleInput.bind(this)} /></View>
                <View className='item'>
                  <AtInput autoFocus type='number' placeholder='请输入数字' value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
                  <AtInput title='密码' type='password' placeholder='密码不能少于10位数' value={this.state.inputValue} onChange={this.handleInput.bind(this)} onFocus={this.clearValue.bind(this)} onBlur={this.handleBlur} />
                  <AtInput title='标题实在特别长就换行吧' placeholder='其他列保持正常间距' value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
                  <AtInput title='出现错误' error placeholder='其他列保持正常间距' value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
                </View>
                <View className='input__item'>
                  <AtActionInput placeholder='输入验证码' actionName='获取验证码' value={this.state.inputValue} onChange={this.handleChange.bind(this)} onClick={this.handleClick.bind(this)} />
                  <AtActionInput placeholder='输入验证码' value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
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
