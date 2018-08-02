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
 * @prop onChange {Function} 监听函数，数值改变时触发
 */
class AtSwitch extends Taro.Component {
  handleChange (e) {
    this.props.onChange(e.detail.value)
  }
  render () {
    const { title, checked, color } = this.props
    return <View className='at-switch'>
      <View className='at-switch__title'>{title}</View>
      {
        checked
          ? <Switch checked color={color} onChange={this.handleChange.bind(this)} />
          : <Switch color={color} onChange={this.handleChange.bind(this)} />
      }
    </View>
  }
}
AtSwitch.defaultProps = {
  title: '',
  color: '#6190e8',
  checked: false,
  onChange: () => {}
}
AtSwitch.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
export default AtSwitch
