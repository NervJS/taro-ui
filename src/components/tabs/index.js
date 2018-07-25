import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
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
class AtTabs extends Taro.Component {
  handleClick (i) {
    this.props.onClick({ value: i })
  }

  render () {
    const { tabList, scroll, current, color } = this.props
    const rootCls = ['at-tabs']
    const style = `color: ${color};border-bottom: 1px solid ${color};`
    if (scroll) {
      rootCls.push('at-tabs--scroll')
    }
    return <View className={rootCls}>
      {
        tabList.map((item, i) => <View className='at-tabs__item' style={current === i ? style : ''} key={item} onClick={this.handleClick.bind(this, i)}>
          {item.title}
        </View>)
      }
    </View>
  }
}
AtTabs.defaultProps = {
  current: 0,
  color: '#6190E8',
  scroll: false,
  tabList: [],
  onClick: () => { }
}
AtTabs.propTypes = {
  current: PropTypes.number,
  color: PropTypes.string,
  scroll: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
export default AtTabs
