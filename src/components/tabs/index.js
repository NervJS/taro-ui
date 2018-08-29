import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtComponent from '../../common/component'
import './index.scss'

/**
 * @author:chenzeji
 * @description tabs 标签页
 * @prop current {Number} 当前选中的tab index值，从0计数，default:0
 * @prop scroll {Boolean} 是否横向滚动，default:false
 * @prop tabList {Array} tab 列表 eg: [{ title: '标签页1' }, { title: '标签页2' }]
 * @prop onClick {Function} 点击时触发事件，回调参数 {value: 1}
 */
class AtTabs extends AtComponent {
  constructor () {
    super(...arguments)
    // 触摸时的原点
    this.touchDot = 0
    // 定时器
    this.interval = null
    // 滑动时间间隔
    this.time = 0
    // 是否已经在滑动
    this.isMoving = false
    // 最大索引
    this.maxIndex = this.props.tabList.length
  }

  handleClick (i) {
    this.props.onClick(i, ...arguments)
  }

  handleTouchStart (e) {
    if (!this.props.swipeable) return

    // 获取触摸时的原点
    this.touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this.interval = setInterval(() => {
      this.time++
    }, 100)
  }
  handleTouchMove (e) {
    if (!this.props.swipeable) return

    const { current } = this.props
    const touchMove = e.touches[0].pageX
    // 向左滑动
    if (!this.isMoving && current + 1 < this.maxIndex && touchMove - this.touchDot <= -40 && this.time < 10) {
      this.isMoving = true
      this.handleClick(current + 1)
    }
    // 向右滑动
    if (!this.isMoving && current - 1 >= 0 && touchMove - this.touchDot >= 40 && this.time < 10) {
      this.isMoving = true
      this.handleClick(current - 1)
    }
  }

  handleTouchEnd () {
    if (!this.props.swipeable) return

    clearInterval(this.interval)
    this.time = 0
    this.isMoving = false
  }

  render () {
    const { style, tabList, scroll, current } = this.props
    const headerCls = ['at-tabs__header']
    if (scroll) {
      headerCls.push('at-tabs__header--scroll')
    }
    const animationStyle = `transform: translate3d(-${current * 100}%, 0px, 0px);`
    return <View className='at-tabs' style={style}>
      <View className={headerCls}>
        {
          tabList.map((item, i) => <View
            className={
              current === i
                ? 'at-tabs__item at-tabs__item--active'
                : 'at-tabs__item'
            }
            key={item.title}
            onClick={this.handleClick.bind(this, i)}
          >
            {item.title}
          </View>)
        }
      </View>
      <View className='at-tabs__body'
        id='test'
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        style={animationStyle}
      >
        {this.props.children}
      </View>
    </View>
  }
}
AtTabs.defaultProps = {
  style: '',
  current: 0,
  swipeable: true,
  scroll: false,
  tabList: [],
  onClick: () => { }
}
AtTabs.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
export default AtTabs
