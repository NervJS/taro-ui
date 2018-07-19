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
 * @prop type {String}  输入框类型,可选为 text,number,password
 * @prop onChange {Function} 输入框值改变时触发的事件
 * @prop onFocus {Function} 输入框被选中时触发的事件
 * @prop onBlur {Function} 输入框失去焦点时触发的事件
 */
class AtInput extends Taro.Component {
  handleInput(e) {
    this.props.onChange(e)
  }
  handleFocus(e) {
    this.props.onFocus(e)
  }
  handleBlur(e) {
    this.props.onBlur(e)
  }
  render() {
    return <View className={this.props.error ? 'at-input at-input--error' : 'at-input'}>
      <View className='at-input__border'>
        <Label className='at-input__title'>{this.props.title}</Label>
        <Input className='at-input__input'
          type={this.props.type}
          placeholder={this.props.placeholder}
          maxlength={this.props.maxlength}
          onInput={this.handleInput.bind(this)}
          onChange={this.handleInput.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          value={this.props.value} />
        <View className='at-input__icon'><AtIcon type='warning_fill' color='#e93b3d' size='20' /></View>
      </View>
    </View>
  }
}
AtInput.defaultProps = {
  value: '',
  placeholder: '',
  title: '',
  maxlength: 200,
  type: 'text',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
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
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}
export default AtInput
