// import { AtForm, AtInput } from 'taro-ui'
import { AtInput, AtInputGroup, AtIcon, AtButton } from 'tiga-ui'
import classNames from 'classnames'
import React from 'react'
import { Image, View, Form } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import Taro, { setBackgroundColor } from '@tarojs/taro'
import verificationCode from '../../../assets/images/verification_code.png'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  value1: string
  value2: string
  value3: string
  value4: string
  value5: string
  value6: string
  value7: string
  value8: string
  value9: string
  value10: string
  value11: any
  value12: string
  value13: string
  value14: string
  value15: string
  value16: string
  value17: string
  disabled: boolean
  second: number
  [key: string]: string | boolean | number
}

export default class InputItemPage extends React.Component<any, IndexState> {
  public constructor(props) {
    super(props)
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
      value11: [
        { value: '', label: '室' },
        { value: '', label: '厅' },
        { value: '', label: '卫' }
      ],
      value12: '',
      // value13: '',
      value14: '',
      // value15: '',
      // value16: '',
      // value17: '',
      disabled: false,
      second: 60
    }
  }
  componentDidMount() {}
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  private showTipText(): string {
    return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
  }

  private sendCode(): void {
    if (this.state.disabled) return
    this.setState({
      disabled: true
    })
    // 倒计时
    const timer = setInterval(() => {
      if (this.state.second > 0) {
        this.setState({
          second: this.state.second - 1
        })
      } else {
        this.setState({
          second: 60,
          disabled: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }

  private handleInput(stateName: string, value: string): void {
    this.setState(
      {
        [stateName]: value
      },
      () => {
        // console.log(this.state.value1, 'value1')
      }
    )
  }
  private handleInput2(value: any): void {
    // console.log('handleInput2', value)
    this.setState(
      {
        value11: value
      },
      () => {
        // console.log(this.state.value11, 'VAL111')
      }
    )
  }

  private onClickErrorIcon(): void {
    Taro.showToast({
      title: '请输入数字',
      icon: 'success',
      duration: 2000
    })
  }
  private handleKeyboardHeightChange(
    event: BaseEventOrig<InputProps.onKeyboardHeightChangeEventDetail>
  ): void {
    // console.log(event.detail.height, 'event.detail.heightevent.detail.height')
    Taro.showToast({
      title: `高度 ${event.detail.height}`,
      icon: 'success',
      duration: 2000
    })
  }
  validFC(val) {
    // console.log(val, 'val')
    if (val) {
      return /^[0-9]*$/.test(val)
    } else {
      return true
    }
  }
  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Input 输入框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View
          className={classNames('doc-body', 'inputPage')}
          style={{ backgroundColor: '#ccc' }}
        >
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              {/* <Form  onSubmit={this.formSubmit}> */}
              <View>常规</View>
              <AtInput
                name='value1'
                title='标题'
                placeholder='请输入'
                value={this.state.value1}
                onChange={this.handleInput.bind(this, 'value1')}
              />
              <View className='gap'></View>
              <AtInput
                name='value1'
                title='标题为六字时'
                placeholder='请输入'
                required
                value={this.state.value2}
                onChange={this.handleInput.bind(this, 'value2')}
              />
              <View className='gap'></View>
              <AtInput
                name='value1'
                title='标题超过六个字转行'
                required
                placeholder='请输入'
                value={this.state.value3}
                onChange={this.handleInput.bind(this, 'value3')}
              />
              <View className='gap'></View>
              <AtInput
                name='value2'
                required
                title='标题'
                placeholder='请输入'
                value={this.state.value4}
                onChange={this.handleInput.bind(this, 'value4')}
                validMessage='请输入数字'
                prefix={
                  <AtIcon
                    className='at-input-icon'
                    value='curtain_icon_cancel'
                    size={8}
                    style={{ color: 'gray' }}
                  />
                }
              />
              <View className='gap'></View>
              <AtInput
                name='value3'
                required
                title='必填项'
                placeholder='请输入'
                value={this.state.value5}
                onChange={this.handleInput.bind(this, 'value5')}
                validMessage='请输入数字'
                // clearable
                // contentIcon
              />
              <View className='gap'></View>
              <AtInput
                name='value3'
                title='带清除'
                placeholder='请输入'
                value={this.state.value6}
                onChange={this.handleInput.bind(this, 'value6')}
                validMessage='请输入数字'
                clearable
              />
              <View className='gap'></View>
              <AtInput
                name='value3'
                title='右区按钮'
                placeholder='请输入'
                value={this.state.value7}
                onChange={this.handleInput.bind(this, 'value7')}
                clearable
                buttonTxt='功能按钮'
              />
              <View className='gap'></View>
              <AtInput
                name='value'
                required
                title='右区icon'
                placeholder='请输入'
                value={this.state.value14}
                onChange={this.handleInput.bind(this, 'value14')}
                iconName='curtain_icon_cancel'
                iconSize={24}
              />
              <View className='gap'></View>
              <AtInput
                name='value'
                required
                title='右区自定义'
                placeholder='请输入'
                value={this.state.value8}
                onChange={this.handleInput.bind(this, 'value8')}
              >
                <View>自定义后缀</View>
              </AtInput>
              <View className='gap'></View>
              <AtInput
                name='value3'
                title='校验测试'
                placeholder='请输入'
                value={this.state.value9}
                onChange={this.handleInput.bind(this, 'value9')}
                // validMessage='请输入数字'
                // clearable
                // rules={this.validFC.bind(this)}
                onKeyboardHeightChange={this.handleKeyboardHeightChange.bind(
                  this
                )}
              />
              <View className='gap'></View>
              <AtInput
                name='value3'
                title='禁用'
                placeholder='请输入'
                value={this.state.value10}
                onChange={this.handleInput.bind(this, 'value10')}
                validMessage='请输入数字'
                clearable
                disabled
              />
              <View className='gap'></View>
              <AtInputGroup
                title='标题'
                value={this.state.value11}
                onChange={this.handleInput2.bind(this)}
              ></AtInputGroup>
              <View className='gap'></View>
              <AtInput
                name='value12'
                required
                title='标题'
                placeholder='请输入'
                value={this.state.value12}
                onChange={this.handleInput.bind(this, 'value12')}
                validMessage='请输入数字'
                prefix={<View className='unit'>¥</View>}
              />
              <View className='gap'></View>
              <AtInput
                name='value13'
                required
                title='标题'
                placeholder='请输入'
                value={this.state.value12}
                onChange={this.handleInput.bind(this, 'value13')}
                validMessage='请输入数字'
              >
                万元
              </AtInput>
              {/* <AtForm>
                  <AtInput
                    name='value1'
                    title='标准五个字'
                    type='text'
                    placeholder='标准五个字'
                    value={this.state.value1}
                    onChange={this.handleInput.bind(this, 'value1')}
                  />
                  <AtInput
                    name='value2'
                    title='标题实在特别长就换行'
                    placeholder='其他列保持正常间距'
                    value={this.state.value2}
                    onChange={this.handleInput.bind(this, 'value2')}
                  />
                  <AtInput
                    name='value3'
                    border={false}
                    placeholder='无标题'
                    value={this.state.value3}
                    onChange={this.handleInput.bind(this, 'value3')}
                  />
                </AtForm> */}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
