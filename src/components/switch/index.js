import Taro from '@tarojs/taro'
import { View, Switch } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author: chenzeji
 * @description 开关组件
 * @prop title {String} 选项名
 * @prop checked {Boolean} 是否显示开启 default:false
 * @prop onChange {Function} 监听函数，数值改变时触发
 */
class AtSwitch extends Taro.Component {
  handleChange (e) {
    this.props.onChange({ value: e.detail.value })
  }
  render () {
    return <View className='at-switch'>
      <View className='at-switch__title'>{this.props.title}</View>
      {
        this.props.checked
          ? <Switch checked color='#6190e8' onChange={this.handleChange.bind(this)} />
          : <Switch color='#6190e8' onChange={this.handleChange.bind(this)} />
      }
    </View>
  }
}
AtSwitch.defaultProps = {
  title: '',
  checked: false,
  onChange: () => {}
}
AtSwitch.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
export default AtSwitch
