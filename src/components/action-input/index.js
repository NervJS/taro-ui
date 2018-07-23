/* eslint-disable react/no-direct-mutation-state */
import Taro from '@tarojs/taro'
import { View, Input, Icon } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author: chenzeji
 * @description 带有点击动作的input输入框
 * @prop second {Number} 倒计时，单位：秒 default:60
 * @prop maxlength {Number} 输入长度最大值 default:200
 * @prop placeholder {String} 提示字符
 * @prop actionName {String} 点击操作的文案
 * @prop onChange {Function} input数据改变触发事件
 * @prop onClick {Function} 点击右边按钮触发的事件
 */
class AtActionInput extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      second: this.props.second ? parseInt(this.props.second) : 60,
      disabled: false
    }
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
          second: this.props.second ? parseInt(this.props.second) : 60,
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
    return <View className='at-actioninput'>
      <Input className={this.props.actionName ? 'at-actioninput__input' : 'at-actioninput__input at-actioninput__input--withoutaction'}
        value={this.props.value}
        type='text'
        placeholder={this.props.placeholder}
        maxlength={this.props.maxlength}
        onInput={this.handleChange.bind(this)}
      />
      <View className='at-actioninput__action'>
        {this.props.value && this.props.value.length
          ? <Icon className='at-actioninput__icon' size='15' type='clear' onClick={this.clearValue.bind(this)} />
          : null
        }
        {this.props.actionName
          ? <View className='at-actioninput__tip' onClick={this.handleClick.bind(this)}>
            {this.showTipText()}
          </View>
          : null
        }
      </View>
    </View>
  }
}
AtActionInput.defaultProps = {
  second: 60,
  maxlength: 200,
  placeholder: '',
  actionName: '',
  onClick: () => {},
  onChange: () => {}
}
AtActionInput.propTypes = {
  second: PropTypes.number,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  actionName: PropTypes.string,
  selectedList: PropTypes.array,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}
export default AtActionInput
