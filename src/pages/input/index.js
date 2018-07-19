import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtInput from '../../components/input/index'
import AtActionInput from '../../components/action-input/index'
import AtTextarea from '../../components/textarea/index'
import AtIcon from '../../components/icon/index'
import AtInputNumber from '../../components/input-number/index'
import AtRadio from '../../components/radio/index'
import AtCheckbox from '../../components/checkbox/index'
import AtSwitch from '../../components/switch/index'
import AtRate from '../../components/rate/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor() {
    super(...arguments)
    this.state = {
      inputValue: '初始值',
      number: 1,
      textareaValue: '',
      rateValue: 3,
      switchValue: false,
      radioValue: '',
      radioOptions: ['鸡', '鸭', '鹅'],
      checkedList: ['鸡'],
      checkboxOption: [{ value: '鸡', desc: '鸡肉好吃' }, { value: '鸭', desc: '鸭肉好吃' }, { value: '鹅' }]
    }
  }
  handleRadioChange(detail) {
    this.setState({
      radioValue: detail.value
    })
  }
  handleSwitchChange(detail) {
    this.setState({
      switchValue: detail.value
    })
  }
  handleRateChange(detail) {
    this.setState({
      rateValue: detail.value
    })
  }
  handleNumberChange(detail) {
    this.setState({
      number: detail.value
    })
  }
  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleChange(detail) {
    this.setState({
      inputValue: detail.value
    })
  }
  handleClick() {
    Taro.showToast({
      title: '已发送验证码',
      icon: 'success',
      duration: 2000
    })
  }
  handleTextAreaChange(e) {
    this.setState({
      textareaValue: e.target.value
    })
  }
  handleCheckboxChange(detail) {
    this.setState({
      checkedList: detail.value
    })
  }
  render() {
    return (
      <View className='index-page'>
        <View className='single'><AtInput label='单项输入' placeholder='预设内容' value={this.state.inputValue} onChange={this.handleInput.bind(this)} /></View>
        <View className='multi'>
          <AtInput label='标准五个字' placeholder='预设内容' />
          <AtInput label='多项' placeholder='预设内容' />
          <AtInput label='标题实在特别长就换行吧' placeholder='其他列保持正常间距' />
          <AtInput label='出现错误' error placeholder='其他列保持正常间距' />
        </View>
        <View className='single-input'>
          <AtActionInput placeholder='输入验证码' actionName='获取验证码' value={this.state.inputValue} onChange={this.handleChange.bind(this)} onClick={this.handleClick.bind(this)} />
          <AtActionInput placeholder='输入验证码' value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
        </View>
        <View className='index-page'>
          <AtTextarea
            value={this.state.textareaValue}
            onChange={this.handleTextAreaChange.bind(this)}
            maxlength='200'
            placeholder='你的问题是...' />
        </View>
        <View className='index-page'><AtIcon type='accessory' size='28' color='#80848f' /></View>
        <View className='index-page'><AtInputNumber min={0} max={10} step={3} value={this.state.number} onChange={this.handleNumberChange.bind(this)} /></View>
        <View className='index-page'><AtInputNumber min={0} max={1} step={0.01} value={this.state.number} onChange={this.handleNumberChange.bind(this)} /></View>
        <View className='index-page'><AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} /></View>
        <View className='index-page'>
          <View>sdf: <AtCheckbox onChange={1} /></View>
          <AtCheckbox options={this.state.checkboxOption} selectedList={this.state.checkedList} onChange={this.handleCheckboxChange.bind(this)} />
        </View>
        <View className='index-page'>
          <AtSwitch title='开启中' checked onChange={this.handleSwitchChange.bind(this)} />
          <AtSwitch title='已关闭' />
        </View>
        <View className='index-page'>
          <View><AtRate size={20} value={this.state.rateValue} max={7} onChange={this.handleRateChange.bind(this)} /></View>
          <View><AtRate /></View>
        </View>
      </View>
    )
  }
}
