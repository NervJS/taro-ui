import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtTabsProps, AtTabsState } from 'types/tabs'
import { ScrollView, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import { isTest, uuid } from '../../common/utils'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default class AtTabs extends AtComponent<AtTabsProps, AtTabsState> {
  public static defaultProps: AtTabsProps
  public static propTypes: InferProps<AtTabsProps>

  private _tabId: string
  private _touchDot: number
  private _timer: NodeJS.Timeout | null
  private _interval: number
  private _isMoving: boolean
  private tabHeaderRef: any

  public constructor(props: AtTabsProps) {
    super(props)
    this.state = {
      _scrollLeft: 0,
      _scrollTop: 0,
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

  private updateState = (idx: number): void => {
    if (this.props.scroll) {
      // 标签栏滚动
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          this.setState({
            _scrollIntoView: `tab${index}`
          })
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const prevTabItem = this.tabHeaderRef.childNodes[index]
          prevTabItem &&
            this.setState({
              _scrollTop: prevTabItem.offsetTop,
              _scrollLeft: prevTabItem.offsetLeft
            })
          break
        }
        default: {
          console.warn('AtTab 组件在该环境还未适配')
          break
        }
      }
    }
  }

  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  private handleTouchStart(e: ITouchEvent): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return
    // 获取触摸时的原点
    this._touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this._timer = setInterval(() => {
      this._interval++
    }, 100)
  }

  private handleTouchMove(e: ITouchEvent): void {
    const { swipeable, tabDirection, current, tabList } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this._touchDot
    const maxIndex = tabList.length

    if (
      !this._isMoving &&
      this._interval < MAX_INTERVAL &&
      this._touchDot > 20
    ) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current + 1, e)

        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current - 1, e)
      }
    }
  }

  private handleTouchEnd(): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    clearInterval(this._timer as NodeJS.Timeout)
    this._interval = 0
    this._isMoving = false
  }

  private getTabHeaderRef(): void {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId)
    }
  }

  public componentWillReceiveProps(nextProps: AtTabsProps): void {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef()
    }
    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current)
    }
  }

  public componentDidMount(): void {
    this.getTabHeaderRef()
    this.updateState(this.props.current)
  }

  public componentWillUnmount(): void {
    this.tabHeaderRef = null
  }

  public render(): JSX.Element {
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
    const { _scrollLeft, _scrollTop, _scrollIntoView } = this.state

    const heightStyle = { height }
    const underlineStyle = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX'
    }
    const bodyStyle: React.CSSProperties = {}
    let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
    if (tabDirection === 'horizontal') {
      transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
    }
    Object.assign(bodyStyle, {
      transform: transformStyle,
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

      return (
        <View
          className={itemCls}
          id={`tab${idx}`}
          key={item.title}
          onClick={this.handleClick.bind(this, idx)}
        >
          {item.title}
          <View className='at-tabs__item-underline'></View>
        </View>
      )
    })
    const rootCls = classNames(
      {
        'at-tabs': true,
        'at-tabs--scroll': scroll,
        [`at-tabs--${tabDirection}`]: true,
        [`at-tabs--${ENV}`]: true
      },
      className
    )
    const scrollX = tabDirection === 'horizontal'
    const scrollY = tabDirection === 'vertical'

    return (
      <View
        className={rootCls}
        style={this.mergeStyle(heightStyle, customStyle!)}
      >
        {scroll ? (
          <ScrollView
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
        ) : (
          <View id={this._tabId} className='at-tabs__header'>
            {tabItems}
          </View>
        )}
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
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: () => {}
}

AtTabs.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  height: PropTypes.string,
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  animated: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
