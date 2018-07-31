import Taro from '@tarojs/taro'
import { View, Textarea } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author: chenzeji
 * @description 多行文本输入框组件
 * @prop value {String} 输入框当前值
 * @prop maxlength {Number|String}  最大长度 default:200
 * @prop placeholder {String} 提示
 * @prop disabled {Boolean} 是否禁用 default:false
 * @prop autoFocus {Boolean} 是否自动聚焦 default:false
 * @prop fixed {Boolean} 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true, default:false
 * @prop onChange {Function} 当键盘输入时触发
 * @prop onFocus {Function} 输入框获得焦点时触发
 * @prop onBlur {Function} 输入框失去焦点时触发
 * @prop onConfirm {Function} 点击完成时触发
 */
class AtTextarea extends Taro.Component {
  handleInput (e) {
    this.props.onChange(e)
  }
  handleFocus (e) {
    this.props.onFocus(e)
  }
  handleBlur (e) {
    this.props.onBlur(e)
  }
  handleConfirm (e) {
    this.props.onConfirm(e)
  }
  render () {
    const { value, maxlength, placeholder, disabled, autoFocus, fixed } = this.props
    return <View className='at-textarea'>
      <Textarea
        className='at-textarea__textarea'
        value={value}
        maxlength={maxlength}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        fixed={fixed}
        onInput={this.handleInput.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onConfirm={this.handleConfirm.bind(this)}
      />
      <View className='at-textarea__bottom'>{value.length}/{maxlength}</View>
    </View>
  }
}
const defaultFunc = () => {}
AtTextarea.defaultProps = {
  value: '',
  maxlength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  fixed: false,
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc
}
AtTextarea.propTypes = {
  value: PropTypes.string,
  maxlength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func
}
export default AtTextarea
