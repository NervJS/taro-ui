import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, ScrollView } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { uuid, isTest } from '../../common/utils'
import AtComponent from '../../common/component'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default class AtTabs extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {
      _scrollLeft: '',
      _scrollTop: '',
      _scrollIntoView: ''
    }
    this._tabId = isTest() ? 'tabs-AOTU2018' : uuid()
    // 触摸时的原点
    this._touchDot = 0
    // 定时器
    this._timer = null
    // 滑动时间间隔
    this._interval = 0
    // 是否已经在滑动
    this._isMoving = false
  }

  updateState = idx => {
    if (this.props.scroll) {
      // 标签栏滚动
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          this.setState({
            _scrollIntoView: `tab${this._tabId}${index}`
          })
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const prevTabItem = this.tabHeaderRef.childNodes[index]
          prevTabItem && this.setState({
            _scrollTop: prevTabItem.offsetTop,
            _scrollLeft: prevTabItem.offsetLeft
          })
          break
        }

        default:
          console.warn('AtTab 组件在该环境还未适配')
          break
      }
    }
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  handleTouchStart (e) {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return
    // 获取触摸时的原点
    this._touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this._timer = setInterval(() => {
      this._interval++
    }, 100)
  }

  handleTouchMove (e) {
    const {
      swipeable,
      tabDirection,
      current,
      tabList
    } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this._touchDot
    const maxIndex = tabList.length

    if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current + 1)

      // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current - 1)
      }
    }
  }

  handleTouchEnd () {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    clearInterval(this._timer)
    this._interval = 0
    this._isMoving = false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef()
    }
    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current)
    }
  }

  getTabHeaderRef () {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId)
    }
  }

  componentDidMount () {
    this.getTabHeaderRef()
    this.updateState(this.props.current)
  }

  componentWillUnmount () {
    this.tabHeaderRef = null
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
      _scrollLeft,
      _scrollTop,
      _scrollIntoView
    } = this.state

    const heightStyle = { height }
    const underlineStyle = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX'
    }
    const bodyStyle = { }
    let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
    if (tabDirection === 'horizontal') {
      transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
    }
    Object.assign(bodyStyle, {
      'transform': transformStyle,
      '-webkit-transform': transformStyle
    })
    if (!animated) {
      bodyStyle.transition = 'unset'
    }

    const tabItems = tabList.map((item, idx) => {
      const itemCls = classNames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx
      })

      return <View
        className={itemCls}
        id={`tab${this._tabId}${idx}`}
        key={item.title}
        onClick={this.handleClick.bind(this, idx)}
      >
        {item.title}
        <View className='at-tabs__item-underline'></View>
      </View>
    })
    const rootCls = classNames({
      'at-tabs': true,
      'at-tabs--scroll': scroll,
      [`at-tabs--${tabDirection}`]: true,
      [`at-tabs--${ENV}`]: true
    }, className)
    const scrollX = tabDirection === 'horizontal'
    const scrollY = tabDirection === 'vertical'

    return (
      <View
        className={rootCls}
        style={this.mergeStyle(heightStyle, customStyle)}
      >
        {
          scroll
            ? <ScrollView
              id={this._tabId}
              className='at-tabs__header'
              style={heightStyle}
              scrollX={scrollX}
              scrollY={scrollY}
              scrollWithAnimation
              scrollLeft={_scrollLeft}
              scrollTop={_scrollTop}
              scrollIntoView={_scrollIntoView}
            >
              {tabItems}
            </ScrollView>
            : <View
              id={this._tabId}
              className='at-tabs__header'
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

AtTabs.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: () => {},
}

AtTabs.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  isTest: PropTypes.bool,
  height: PropTypes.string,
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  animated: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func,
}
