import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { uuid } from '../../common/utils'
import AtComponent from '../../common/component'

const ENV = Taro.getEnv()

export default class AtTabs extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      scrollIntoView: ''
    }
    this.tabId = this.props.isTest ? 'tabs-AOTU2018' : uuid()
    // 触摸时的原点
    this.touchDot = 0
    // 定时器
    this.interval = null
    // 滑动时间间隔
    this.time = 0
    // 是否已经在滑动
    this.isMoving = false
  }

  updateState = idx => {
    if (this.props.scroll) {
      // 标签栏滚动
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
          this.setState({
            scrollIntoView: `tab${idx - 1}`
          })
          break

        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const prevTabItem = this.tabHeaderRef.childNodes[index]
          this.setState({
            scrollTop: prevTabItem.offsetTop,
            scrollLeft: prevTabItem.offsetLeft
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
    this.touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this.interval = setInterval(() => {
      this.time++
    }, 100)
  }

  handleTouchMove (e) {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    const { current } = this.state
    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this.touchDot
    const maxIndex = this.props.tabList.length

    if (!this.isMoving && this.time < 10) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -40) {
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
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    clearInterval(this.interval)
    this.time = 0
    this.isMoving = false
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
      this.tabHeaderRef = document.getElementById(this.tabId)
    }
  }

  componentDidMount () {
    this.getTabHeaderRef()
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
        id={`tab${idx}`}
        key={item.title}
        onClick={this.handleClick.bind(this, idx)}
      >
        {item.title}
      </View>
    })

    const rootCls = classNames({
      'at-tabs': true,
      'at-tabs--vertical': tabDirection === 'vertical',
    }, className)
    const headerCls = classNames({
      'at-tabs__header': true,
      'at-tabs__header--scroll': scroll
    })
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
              id={this.tabId}
              className={headerCls}
              style={heightStyle}
              scrollX={scrollX}
              scrollY={scrollY}
              scrollWithAnimation
              scrollLeft={scrollLeft}
              scrollTop={scrollTop}
              scrollIntoView={scrollIntoView}
            >
              {tabItems}
            </ScrollView>
            : <View
              id={this.tabId}
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
