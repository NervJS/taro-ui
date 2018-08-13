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
      value8: '',
      value9: '',
      value10: '',
      value12: '',
      value13: '',
      value14: '',
      value15: '',
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
          second: 60,
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
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput name='value1' title='标准五个字' type='text' placeholder='标准五个字' value={this.state.value1} onChange={this.handleInput.bind(this, 'value1')} />
                  <AtInput title='标题实在特别长就换行' placeholder='其他列保持正常间距' value={this.state.value2} onChange={this.handleInput.bind(this, 'value2')} />
                  <AtInput border={false} placeholder='无标题' value={this.state.value3} onChange={this.handleInput.bind(this, 'value3')} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 输入框类型 */}
          <View className='panel'>
            <View className='panel__title'>输入框类型</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput title='文本' type='text' placeholder='单行文本' value={this.state.value4} onChange={this.handleInput.bind(this, 'value4')} />
                  <AtInput title='数字' type='number' placeholder='请输入数字' value={this.state.value5} onChange={this.handleInput.bind(this, 'value5')} />
                  <AtInput title='密码' type='password' placeholder='密码不能少于10位数' value={this.state.value6} onChange={this.handleInput.bind(this, 'value6')} />
                  <AtInput title='身份证' type='idcard' placeholder='身份证号码' value={this.state.value7} onChange={this.handleInput.bind(this, 'value7')} />
                  <AtInput title='小数' type='digit' placeholder='请输入小数' value={this.state.value8} onChange={this.handleInput.bind(this, 'value8')} />
                  <AtInput border={false} title='手机号码' type='phone' placeholder='手机号码' value={this.state.value9} onChange={this.handleInput.bind(this, 'value9')} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 状态 */}
          <View className='panel'>
            <View className='panel__title'>状态</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput disabled title='禁用' type='text' placeholder='禁止输入' value={this.state.value10} onChange={this.handleInput.bind(this, 'value10')} />
                  <AtInput error title='出现错误' type='text' placeholder='点击按钮触发回调' value={this.state.value11} onChange={this.handleInput.bind(this, 'value11')} onErrorClick={this.onClickErrorIcon.bind(this)} />
                  <AtInput editable={false} title='不可编辑' type='text' placeholder='不可编辑' value='不可编辑的内容' onChange={this.handleInput.bind(this, 'value12')} />
                  <AtInput border={false} clear title='清除按钮' type='text' placeholder='点击清除按钮清空内容' value={this.state.value13} onChange={this.handleInput.bind(this, 'value13')} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 自定义右边栏 */}
          <View className='panel'>
            <View className='panel__title'>自定义右边栏</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput title='验证码' type='text' maxlength='4' clear placeholder='验证码' value={this.state.value14} onChange={this.handleInput.bind(this, 'value14')}>
                    <Image src={verificationCode} />
                  </AtInput>
                  <AtInput border={false} type='phone' clear placeholder='请输入手机号码' value={this.state.value15} onChange={this.handleInput.bind(this, 'value15')}>
                    <View
                      style={{
                        'color': this.state.disabled ? '#FF4949' : '',
                        'fontSize': '12px',
                        'width': '90px'
                      }}
                      onClick={this.sendCode.bind(this)}
                    >
                      {this.showTipText()}
                    </View>
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
