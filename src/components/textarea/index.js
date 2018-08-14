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
 * @prop count {Boolean} 是否显示字数
 * @prop fixed {Boolean} 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true, default:false
 * @prop textOverflowForbidden {Boolean} 文字超出最大长度时是否禁止输入，若否，则还可以在maxlength的基础上输入500字符，并右下角红字提示, default:false
 * @prop onChange {Function} 当键盘输入时触发
 * @prop onFocus {Function} 输入框获得焦点时触发
 * @prop onBlur {Function} 输入框失去焦点时触发
 * @prop onConfirm {Function} 点击完成时触发
 */
class AtTextarea extends Taro.Component {
  handleInput (e) {
    this.props.onChange(e, ...arguments)
  }
  handleFocus (e) {
    this.props.onFocus(e, ...arguments)
  }
  handleBlur (e) {
    this.props.onBlur(e, ...arguments)
  }
  handleConfirm (e) {
    this.props.onConfirm(e, ...arguments)
  }
  render () {
    const { value, maxlength, placeholder, count, disabled, autoFocus, fixed, textOverflowForbidden, height } = this.props
    let actualMaxLength = maxlength
    if (!textOverflowForbidden) {
      actualMaxLength += 500
    }
    const textareaStyle = height ? `height:${Taro.pxTransform(height)}` : ''

    return <View className='at-textarea'>
      <Textarea
        style={textareaStyle}
        placeholderClass='placeholder'
        cursorSpacing='50'
        className='at-textarea__textarea'
        value={value}
        showConfirmBar={false}
        confirmType='完成'
        maxlength={actualMaxLength}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        fixed={fixed}
        onInput={this.handleInput.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onConfirm={this.handleConfirm.bind(this)}
      />
      {
        count
          ? <View className={maxlength < value.length ? 'at-textarea__bottom at-textarea--error' : 'at-textarea__bottom'}>{value.length}/{maxlength}</View>
          : null
      }
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
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
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
  count: PropTypes.bool,
  textOverflowForbidden: PropTypes.bool,
  fixed: PropTypes.bool,
  height: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func
}
export default AtTextarea
