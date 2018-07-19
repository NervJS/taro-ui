import Taro from '@tarojs/taro'
import { View, Input, Label } from '@tarojs/components'
import './index.scss'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'

/**
 * @author:chenzeji
 * @description 单行输入框
 * @prop placeholder {String} 提示字符
 * @prop maxlength {Number} 最大长度
 * @prop type {String} 图标类型 eg：'collection_fill' 图标列表详细请看文档：https://weapp.iviewui.com/components/icon
 * @prop size {Number|String} 图标大小 default: 30
 * @prop color {String} 图标颜色 default:#6190e8
 */
class AtInput extends Taro.Component {
  handleInput(e) {
    this.props.onChange(e)
  }
  handleFocus(e) {
    this.props.onFocus(e)
  }
  render() {
    return <View className={this.props.error ? 'at-input at-input--error' : 'at-input'}>
      <View className='at-input_border'>
        <Label className='at-input__label'>{this.props.label}</Label>
        <Input className='at-input__input'
          type={this.props.type ? this.props.type : 'text'}
          placeholder={this.props.placeholder}
          maxlength={this.props.maxlength || 140}
          onInput={this.handleInput.bind(this)}
          onChange={this.handleInput.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          value={this.props.value || ''} />
        <View className='at-input__icon'><AtIcon type='warning_fill' color='#e93b3d' size='20' /></View>
      </View>
    </View>
  }
}
AtInput.defaultProps = {
  color: '#6190e8',
  size: '30',
  onClick: () => { }
}
AtInput.propTypes = {
  color: PropTypes.string,

  onChange: PropTypes.func,
  onFocus: PropTypes.func
}
export default AtInput
