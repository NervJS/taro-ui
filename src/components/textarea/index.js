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
 * @prop onChange {Function} 监听函数，数值改变时触发
 */
class AtTextarea extends Taro.Component {
  handleInput (e) {
    this.props.onChange(e)
  }
  render () {
    return <View className='at-textarea'>
      <Textarea
        value={this.props.value}
        className='at-textarea__textarea'
        onInput={this.handleInput.bind(this)}
        maxlength={this.props.maxlength}
        placeholder={this.props.placeholder}
      />
      <View className='at-textarea_bottom'>{this.props.value.length}/{this.props.maxlength}</View>
    </View>
  }
}
AtTextarea.defaultProps = {
  value: '',
  maxlength: 200,
  placeholder: '',
  onChange: () => {}
}
AtTextarea.propTypes = {
  value: PropTypes.string,
  maxlength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}
export default AtTextarea
