import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author:chenzeji
 * @description tab bar 标签栏
 * @prop current {Number} 当前选中的tab index值，从0计数，default:0
 * @prop color {String} 选中标签的颜色
 * @prop tabList {Array} tab 列表 eg: [{ title: '标签页1',icon: '' }, { title: '标签页2' }]
 * @prop onClick {Function} 点击时触发事件，回调参数 {value: 1}
 */
class AtTabBar extends Taro.Component {
  render () {
    const { tabList, current, color } = this.props
    const style = `color: ${color};border-bottom: 1px solid ${color};`
    return <View className='at-tab-bar'>
      {
        tabList.map((item, i) => <View className='at-tab-bar__item' style={current === i ? style : ''} key={item} onClick={this.handleClick.bind(this, i)}>
          {item.title}
        </View>)
      }
    </View>
  }
}
AtTabBar.defaultProps = {
  current: 0,
  color: '',
  scroll: false,
  tabList: [],
  onClick: () => { }
}
AtTabBar.propTypes = {
  current: PropTypes.number,
  color: PropTypes.string,
  scroll: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
export default AtTabBar
