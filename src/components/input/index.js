import Taro from '@tarojs/taro'
import { View, Input, Label } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'
/**
 * @author:chenzeji
 * @description 单行输入框
 * @prop value {String|Number} 输入框值
 * @prop placeholder {String} 提示字符
 * @prop title {String} 输入框左侧标题，若传入为空，则不显示标题
 * @prop maxlength {Number} 最大长度 default:200
 * @prop backgroundColor {String} 背景颜色 default:#fff
 * @prop disabled {Boolean} 是否禁止输入，禁止点击按钮 default: false
 * @prop error {Boolean} 是否出现错误, default: false
 * @prop clear {Boolean} 是否显示清除按钮, default: false
 * @prop type {String}  输入框类型,可选为 text,number,password,phone default: text
 * @prop autoFocus {Boolean} 是否自动聚焦 default:false
 * @prop onChange {Function} 输入框值改变时触发的事件
 * @prop onFocus {Function} 输入框被选中时触发的事件
 * @prop onBlur {Function} 输入框失去焦点时触发的事件
 * @prop onClickErrorIcon {Function} 点击错误按钮触发的事件
 */
class AtInput extends Taro.Component {
  handleInput (e) {
    const { value } = e.target
    const { type } = this.props
    let newValue = value
    if (type === 'phone') {
      newValue = value.replace(/\D/g, '').substring(0, 11)
      const valueLen = newValue.length
      if (valueLen > 3 && valueLen < 8) {
        newValue = `${newValue.substr(0, 3)} ${newValue.substr(3)}`
      } else if (valueLen >= 8) {
        newValue = `${newValue.substr(0, 3)} ${newValue.substr(3, 4)} ${newValue.substr(7)}`
      }
    }
    this.props.onChange(newValue, ...arguments)
  }
  handleFocus (e) {
    this.props.onFocus(e.target.value, ...arguments)
  }
  handleBlur (e) {
    this.props.onBlur(e.target.value, ...arguments)
  }
  clearValue () {
    this.props.onChange('', ...arguments)
  }
  handleClickErrIcon () {
    this.props.onClickErrorIcon(...arguments)
  }
  transferType (type) {
    if (type === 'phone') {
      return 'text'
    }
    return type
  }
  render () {
    const { title, disabled, error, clear, type, placeholder, maxlength, autoFocus, value, backgroundColor } = this.props
    const rootStyle = `background-color: ${backgroundColor};`
    const rootCls = ['at-input']
    if (error) {
      rootCls.push('at-input--error')
    }
    if (disabled) {
      rootCls.push('at-input--disabled')
    }
    return <View className={rootCls} style={rootStyle} >
      {
        title
          ? <Label className='at-input__title'>{title}</Label>
          : null
      }
      <Input className='at-input__input'
        type={this.transferType(type)}
        placeholder={placeholder}
        maxlength={maxlength}
        autoFocus={autoFocus}
        value={value}
        disabled={disabled}
        onInput={this.handleInput.bind(this)}
        onChange={this.handleInput.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
      {
        clear && value
          ? <View className='at-input__icon' onClick={this.clearValue.bind(this)} >
            <AtIcon value='close-circle' color='#ccc' size='15' />
          </View>
          : null
      }
      {
        error
          ? <View className='at-input__icon' onClick={this.handleClickErrIcon.bind(this)} >
            <AtIcon value='warning_fill' color='#e93b3d' size='15' />
          </View>
          : null
      }
      <View className='at-input__children'>{this.props.children}</View>
    </View>
  }
}
const defaultFunc = () => {}
AtInput.defaultProps = {
  value: '',
  placeholder: '',
  title: '',
  maxlength: 200,
  type: 'text',
  disabled: false,
  error: false,
  clear: false,
  backgroundColor: '#fff',
  autoFocus: false,
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onClickErrorIcon: defaultFunc
}
AtInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.string,
  title: PropTypes.string,
  maxlength: PropTypes.number,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  backgroundColor: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClickErrorIcon: PropTypes.func,
}
export default AtInput
