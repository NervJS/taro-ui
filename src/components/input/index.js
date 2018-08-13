import Taro from '@tarojs/taro'
import { View, Input, Label } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'
/**
 * @author:chenzeji
 * @description 单行输入框
 * @prop name {String} 输入框的唯一标识，传入点击title会聚焦输入框，小程序官方bug，暂时有问题
 * @prop value {String|Number} 输入框值
 * @prop placeholder {String} 提示字符
 * @prop title {String} 输入框左侧标题，若传入为空，则不显示标题
 * @prop maxlength {Number} 最大长度 default:140
 * @prop disabled {Boolean} 是否禁止输入，禁止点击按钮 default: false
 * @prop border {Boolean} 是否显示下划线边框 default: true
 * @prop editable {Boolean} 是否可编辑 default: true
 * @prop error {Boolean} 是否出现错误, default: false
 * @prop clear {Boolean} 是否显示清除按钮, default: false
 * @prop type {String}  输入框类型,可选为 text,number,password,phone,idcard,digit  default: text
 * @prop autoFocus {Boolean} 是否自动聚焦 default:false
 * @prop onChange {Function} 输入框值改变时触发的事件
 * @prop onFocus {Function} 输入框被选中时触发的事件
 * @prop onBlur {Function} 输入框失去焦点时触发的事件
 * @prop onErrorClick {Function} 点击错误按钮触发的事件
 */
class AtInput extends Taro.Component {
  handleInput (e) {
    this.props.onChange(e.target.value, ...arguments)
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
    this.props.onErrorClick(...arguments)
  }
  render () {
    const { name, type, maxlength, disabled, border, title, editable, error, clear, placeholder, autoFocus, value } = this.props
    let newMaxlength = maxlength
    let newType = type
    let newDisabled = disabled
    const containerCls = ['at-input__container']
    if (error) {
      containerCls.push('at-input--error')
    }
    if (disabled) {
      containerCls.push('at-input--disabled')
    }
    if (type === 'phone') {
      newMaxlength = 11
      newType = 'number'
    }
    if (disabled === false && editable === false) {
      newDisabled = true
    }
    let rootStyle = ''
    if (!border) {
      rootStyle = 'border: none;'
    }
    return <View className='at-input' style={rootStyle}>
      <View className={containerCls}>
        {
          title
            ? <Label className='at-input__title' for={name}>{title}</Label>
            : null
        }
        <Input className='at-input__input'
          id={name}
          type={newType}
          placeholder={placeholder}
          maxlength={newMaxlength}
          autoFocus={autoFocus}
          value={value}
          disabled={newDisabled}
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
              <AtIcon value='alert-circle' color='#e93b3d' size='15' />
            </View>
            : null
        }
        <View className='at-input__children'>{this.props.children}</View>
      </View>
    </View>
  }
}
const defaultFunc = () => {}
AtInput.defaultProps = {
  value: '',
  name: '',
  placeholder: '',
  title: '',
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onErrorClick: defaultFunc
}
AtInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: '',
  placeholder: PropTypes.string,
  title: PropTypes.string,
  maxlength: PropTypes.number,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  backgroundColor: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onErrorClick: PropTypes.func,
}
export default AtInput
