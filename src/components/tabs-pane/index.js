import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

/**
 * @author:chenzeji
 * @description tabs 标签页
 * @prop current {Number} 当前选中的tab index值，从0计数，default:0
 * @prop color {String} 选中标签的颜色
 * @prop scroll {Boolean} 是否横向滚动，default:false
 * @prop tabList {Array} tab 列表 eg: [{ title: '标签页1' }, { title: '标签页2' }]
 * @prop onClick {Function} 点击时触发事件，回调参数 {value: 1}
 */
class AtTabsPane extends Taro.Component {
  render () {
    return <View className='tabs-pane'>
      {this.props.children}
    </View>
  }
}

export default AtTabsPane
