/* eslint-disable react/no-direct-mutation-state */
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import AtInput from '../../../components/input/index'
import AtForm from '../../../components/form/index'
import verificationCode from '../../../assets/images/verification_code.png'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      disabled: false,
      second: 60
    }
  }
  showTipText () {
    return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
  }
  sendCode () {
    if (this.state.disabled) return
    // 使用setState 数值更新有延迟
    this.state.disabled = true
    // 倒计时
    const timer = setInterval(() => {
      if (this.state.second > 0) {
        // 使用setState 数值更新有延迟
        this.state.second--
        this.setState({
          second: this.state.second
        })
      } else {
        // 使用setState 数值更新有延迟
        this.state.disabled = false
        this.setState({
          second: this.props.second,
          disabled: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }
  handleInput (stateName, value) {
    this.state[stateName] = value
    this.setState()
  }
  handleClick () {
    Taro.showToast({
      title: '已发送验证码',
      icon: 'success',
      duration: 2000
    })
  }
  onClickErrorIcon () {
    Taro.showToast({
      title: '请输入数字',
      icon: 'success',
      duration: 2000
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Input 输入框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础输入框</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput title='标准五个字' type='text' clear placeholder='标准五个字' value={this.state.value1} onChange={this.handleInput.bind(this, 'value1')} />
                  <AtInput type='number' placeholder='请输入数字' value={this.state.value2} onChange={this.handleInput.bind(this, 'value2')} />
                  <AtInput title='密码' type='password' placeholder='密码不能少于10位数' value={this.state.value3} onChange={this.handleInput.bind(this, 'value3')} />
                  <AtInput title='标题实在特别长就换行' placeholder='其他列保持正常间距' value={this.state.value4} onChange={this.handleInput.bind(this, 'value4')} />
                  <AtInput title='出现错误' clear error onClickErrorIcon={this.onClickErrorIcon.bind(this)} placeholder='其他列保持正常间距' value={this.state.value5} onChange={this.handleInput.bind(this, 'value5')} />
                  <AtInput title='禁用' disabled placeholder='禁止输入' onChange={this.handleInput.bind(this)} />
                  <AtInput title='验证码' type='text' maxlength='4' clear placeholder='验证码' value={this.state.value7} onChange={this.handleInput.bind(this, 'value7')}>
                    <Image src={verificationCode} />
                  </AtInput>
                  <AtInput type='phone' clear placeholder='请输入手机号码' value={this.state.value6} onChange={this.handleInput.bind(this, 'value6')}>
                    <View style={this.state.disabled ? 'color:#e93b3d;' : ''} onClick={this.sendCode.bind(this)}>{this.showTipText()}</View>
                  </AtInput>
                </AtForm>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
