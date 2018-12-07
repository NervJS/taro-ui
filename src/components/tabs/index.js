/* eslint-disable react/no-string-refs */
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtTabs extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    height: '',
    current: 0,
    swipeable: true,
    scroll: false,
    animated: true,
    tabList: [],
    onClick: () => { }
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    height: PropTypes.string,
    tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
    current: PropTypes.number,
    swipeable: PropTypes.bool,
    scroll: PropTypes.bool,
    animated: PropTypes.bool,
    tabList: PropTypes.array,
    onClick: PropTypes.func
  }

  constructor () {
    super(...arguments)
    this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      scrollIntoView: ''
    }
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
    if (this.props.scroll && i >= 1) {
      // 标签栏滚动
      const env = Taro.getEnv()
      if (env === Taro.ENV_TYPE.WEAPP) {
        // 小程序环境
        this.setState({
          scrollIntoView: `tab${i - 1}`
        })
      } else if (env === Taro.ENV_TYPE.WEB) {
        // web环境
        const prevTabItem = this.refs.refTabHeader.vnode.dom.childNodes[i - 1]
        this.setState({
          scrollTop: prevTabItem.offsetTop,
          scrollLeft: prevTabItem.offsetLeft
        })
      }
    }
    this.props.onClick(...arguments)
  }

  handleTouchStart (e) {
    if (!this.props.swipeable || this.props.tabDirection === 'vertical') return

    // 获取触摸时的原点
    this.touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this.interval = setInterval(() => {
      this.time++
    }, 100)
  }

  handleTouchMove (e) {
    if (!this.props.swipeable || this.props.tabDirection === 'vertical') return

    const { current } = this.props
    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this.touchDot

    if (!this.isMoving && this.time < 10) {
      // 向左滑动
      if (current + 1 < this.maxIndex && moveDistance <= -40) {
        this.isMoving = true
        this.handleClick(current + 1)

      // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= 40) {
        this.isMoving = true
        this.handleClick(current - 1)
      }
    }
  }

  handleTouchEnd () {
    if (!this.props.swipeable || this.props.tabDirection === 'vertical') return

    clearInterval(this.interval)
    this.time = 0
    this.isMoving = false
  }

  render () {
    const {
      customStyle,
      className,
      height,
      tabDirection,
      animated,
      tabList,
      scroll,
      current
    } = this.props
    const {
      scrollLeft,
      scrollTop,
      scrollIntoView
    } = this.state

    const heightStyle = { height }
    const underlineStyle = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX'
    }
    const bodyStyle = { }
    if (tabDirection === 'horizontal') {
      const transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
      bodyStyle.transform = transformStyle
      bodyStyle['-webkit-transform'] = transformStyle
    } else {
      const transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
      bodyStyle.transform = transformStyle
      bodyStyle['-webkit-transform'] = transformStyle
    }
    if (!animated) {
      bodyStyle.transition = 'unset'
    }

    const tabItems = tabList.map((item, i) => (
      <View
        className={
          classNames({
            'at-tabs__item': true,
            'at-tabs__item--active': current === i
          })
        }
        id={`tab${i}`}
        key={item.title}
        onClick={this.handleClick.bind(this, i)}
      >
        {item.title}
      </View>)
    )

    return (
      <View
        className={
          classNames({
            'at-tabs': true,
            'at-tabs--vertical': tabDirection === 'vertical',
          }, className)
        }
        style={this.mergeStyle(heightStyle, customStyle)}
      >
        {
          scroll
            ? <ScrollView
              className={
                classNames({
                  'at-tabs__header': true,
                  'at-tabs__header--scroll': scroll
                })
              }
              style={heightStyle}
              scrollX={tabDirection === 'horizontal'}
              scrollY={tabDirection === 'vertical'}
              scrollWithAnimation
              scrollLeft={scrollLeft}
              scrollTop={scrollTop}
              scrollIntoView={scrollIntoView}
              ref='refTabHeader'
            >
              {tabItems}
            </ScrollView>
            : <View
              className={
                classNames({
                  'at-tabs__header': true,
                  'at-tabs__header--scroll': scroll
                })
              }
            >
              {tabItems}
            </View>
        }
        <View
          className='at-tabs__body'
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
          style={this.mergeStyle(bodyStyle, heightStyle)}
        >
          <View className='at-tabs__underline' style={underlineStyle}></View>
          {this.props.children}
        </View>
      </View>
    )
  }
}
