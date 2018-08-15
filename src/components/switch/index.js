import Taro from '@tarojs/taro'
import { View, Switch } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author: chenzeji
 * @description 开关组件
 * @prop title {String} 选项名
 * @prop color {String} 背景颜色 default:#6190e8
 * @prop checked {Boolean} 是否显示开启 default:false
 * @prop disabled {Boolean} 是否禁用 default:false
 * @prop onChange {Function} 监听函数，数值改变时触发
 */
class AtSwitch extends Taro.Component {
  handleChange (e) {
    this.props.onChange(e.detail.value)
  }
  render () {
    const { disabled, border, title, checked, color } = this.props
    let rootStyle = ''
    if (!border) {
      rootStyle = 'border: none;'
    }
    const containerCls = ['at-switch__container']
    if (disabled) {
      containerCls.push('at-switch--disabled')
    }
    return <View className='at-switch' style={rootStyle}>
      <View className='at-switch__title'>{title}</View>
      <View className={containerCls}>
        <View className='at-switch__mask'></View>
        {
          checked
            ? <Switch className='at-switch__switch' checked color={color} onChange={this.handleChange.bind(this)} />
            : <Switch className='at-switch__switch' color={color} onChange={this.handleChange.bind(this)} />
        }
      </View>
    </View>
  }
}
AtSwitch.defaultProps = {
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false,
  onChange: () => {}
}
AtSwitch.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}
export default AtSwitch
