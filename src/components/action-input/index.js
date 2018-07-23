/* eslint-disable react/no-direct-mutation-state */
import Taro from '@tarojs/taro'
import { View, Input, Icon } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author: chenzeji
 * @description 带有点击动作的input输入框
 * @prop value {String} 当前输入框值
 * @type type {String} 输入框类型,可选为 text,number,password default: text
 * @prop second {Number} 倒计时，单位：秒 default:60
 * @prop maxlength {Number} 输入长度最大值 default:200
 * @prop placeholder {String} 提示字符
 * @prop actionName {String} 点击操作的文案
 * @prop autoFocus {Boolean} 是否自动聚焦 default:false
 * @prop onChange {Function} 输入框值改变时触发的事件,回调参数: {value:''}
 * @prop onFocus {Function} 输入框被选中时触发的事件,回调参数: {value:''}
 * @prop onBlur {Function} 输入框失去焦点时触发的事件,回调参数: {value:''}
 * @prop onConfirm {Function} 点击完成按钮时触发,回调参数: {value:''}
 * @prop onClick {Function} 点击右边按钮触发的事件, 无回调参数
 */
class AtActionInput extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      second: this.props.second,
      disabled: false
    }
  }
  handleFocus (e) {
    this.props.onFocus({ value: e.target.value })
  }
  handleConfirm (e) {
    this.props.onConfirm({ value: e.target.value })
  }
  handleBlur (e) {
    this.props.onBlur({ value: e.target.value })
  }
  handleClick () {
    if (this.state.disabled) return

    this.props.onClick()
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
  clearValue () {
    this.props.onChange({ value: '' })
  }
  handleChange (e) {
    this.props.onChange({ value: e.target.value })
  }
  showTipText () {
    return this.state.disabled ? `${this.state.second}s后重试` : this.props.actionName
  }
  render () {
    return <View className='at-action-input'>
      <View className={this.props.actionName ? 'at-action-input__input' : 'at-action-input__input at-action-input__input--withoutaction'}>
        <Input
          value={this.props.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          maxlength={this.props.maxlength}
          autoFocus={this.props.autoFocus}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onConfirm={this.handleConfirm.bind(this)}
          onInput={this.handleChange.bind(this)}
        />
      </View>
      <View className='at-action-input__action'>
        {this.props.value.length
          ? <Icon className='at-action-input__icon' size='15' type='clear' onClick={this.clearValue.bind(this)} />
          : null
        }
        {this.props.actionName
          ? <View className={this.state.disabled ? 'at-action-input__tip at-action-input__tip--disabled' : 'at-action-input__tip'} onClick={this.handleClick.bind(this)}>
            {this.showTipText()}
          </View>
          : null
        }
      </View>
    </View>
  }
}
AtActionInput.defaultProps = {
  value: '',
  type: 'text',
  second: 60,
  maxlength: 200,
  placeholder: '',
  actionName: '',
  autoFocus: false,
  onClick: () => {},
  onChange: () => {},
  onConfirm: () => {},
  onBlur: () => {},
  onFocus: () => {}
}
AtActionInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  second: PropTypes.number,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  actionName: PropTypes.string,
  autoFocus: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onConfirm: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func

}
export default AtActionInput
