import Taro from '@tarojs/taro'
import { View, Input, Icon } from '@tarojs/components'
import './index.scss'
/**
 * second 倒计时秒
 * onChange 函数，处理value 值的变化
 * onClick 函数，处理点击事件的变化
 * maxlength 输入长度最大值
 * type ？
 * placeholder  提示字符
 * actionName 操作名称 点击触发 onClick 函数
 */
export default class AtSingleInput extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      second: this.props.second ? parseInt(this.props.second): 60,
      disabled: false
    }
  }
  handleClick() {
    if (this.state.disabled) {
      return
    }
    if (this.props.onClick) {
      this.props.onClick()
      // 使用setState 数值更新有延迟
      this.state.disabled = true
      const timer = setInterval(()=>{
        if (this.state.second>0) {
          // 使用setState 数值更新有延迟
          this.state.second--
          this.setState({
            second: this.state.second
          })
        } else {
          // 使用setState 数值更新有延迟
          this.state.disabled = false
          this.setState({
            second: this.props.second ? parseInt(this.props.second) : 60,
            disabled: false
          })
          clearInterval(timer)
        }
      },1000)
    } else {
      throw Error('请传入 onClick 函数')
    }
  }
  clearValue() {
    if (this.props.onChange) {
      this.props.onChange({value:''})
    } else {
      throw Error('请传入 onChange 函数')
    }
  }
  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange({ value: e.target.value })
    } else {
      throw Error('请传入 onChange 函数')
    }
  }
  showTipText() {
    return this.state.disabled ? this.state.second + 's后重试' : this.props.actionName
  }
  render() {
    return <View className='at-singleinput'>
      <Input className={this.props.actionName ? 'at-singleinput__input' : 'at-singleinput__input at-singleinput__input--withoutaction'}
        value={this.props.value}
        type='text'
        placeholder={this.props.placeholder}
        maxlength={this.props.maxlength || '140'}
        onInput={this.handleChange.bind(this)} />
      <View className='at-singleinput_action'>
        {this.props.value && this.props.value.length
          ? <Icon className='at-singleinput__icon' size='15' type='clear' onClick={this.clearValue.bind(this)} />
          : null
        }
        {this.props.actionName
          ? <View className='at-singleinput_tip' onClick={this.handleClick.bind(this)}>
            {this.showTipText()}
            </View>
          : null
        }
      </View>
    </View>
  }
}
