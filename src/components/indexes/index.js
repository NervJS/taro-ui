import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import AtList from '../../components/list/index'
import AtListItem from '../../components/list/item/index'

import './index.scss'

export default class AtIndexes extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    animation: false,
    topKey: 'Top',
    isVibrate: true,
    isShowToast: true,
    list: [],
    onClick: () => {}
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
    animation: PropTypes.bool,
    isVibrate: PropTypes.bool,
    isShowToast: PropTypes.bool,
    topKey: PropTypes.string,
    list: PropTypes.array,
    onClick: PropTypes.func
  }

  constructor () {
    super(...arguments)
    this.state = {
      targetView: '',
      scrollTop: 0
    }
    // 右侧导航高度
    this.menuHeight = 0
    // 右侧导航距离顶部高度
    this.startTop = 0
    this.itemHeight = 0
    this.currentIndex = -1
    this._scrollTop = 0
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  handleTouchMove (e) {
    e.stopPropagation()
    e.preventDefault()
    const { list } = this.props
    let pageY = e.touches[0].pageY
    const env = Taro.getEnv()
    if (env === Taro.ENV_TYPE.WEB) {
      pageY = e.touches[0].clientY
    }
    const index = Math.floor((pageY - this.startTop) / this.itemHeight)
    if (index >= 0 && index <= list.length && this.currentIndex !== index) {
      this.currentIndex = index
      let touchView = 'at-indexes__top'
      if (index > 0) {
        touchView = `at-indexes__list-${list[index - 1].key}`
      }
      this.jumpTarget(touchView, index)
    }
  }

  handleTouchEnd () {
    this.currentIndex = -1
  }

  jumpTarget (targetView, i) {
    const { topKey, list } = this.props
    const env = Taro.getEnv()
    if (env === Taro.ENV_TYPE.WEAPP) {
      // 小程序环境
      this.setState({
        targetView
      })
    } else if (env === Taro.ENV_TYPE.WEB) {
      // web环境
      const bodyOffsetTop = this.indexesRef.vnode.dom.getBoundingClientRect().top
      const targetOffsetTop = this.listRef.vnode.dom.childNodes[i].getBoundingClientRect().top
      const targetScrollTop = this._scrollTop + targetOffsetTop - bodyOffsetTop

      this.setState({
        scrollTop: targetScrollTop
      })
    }
    if (this.props.isShowToast) {
      Taro.showToast({
        title: i === 0 ? topKey : list[i - 1].key,
        icon: 'none',
        duration: 2000
      })
    }
    if (this.props.isVibrate) {
      Taro.vibrateShort()
    }
  }

  initData () {
    const env = Taro.getEnv()
    setTimeout(() => {
      if (env === Taro.ENV_TYPE.WEAPP) {
        this.menuRef.boundingClientRect(rect => {
          this.menuHeight = rect.height
          this.startTop = rect.top
          this.itemHeight = Math.floor((this.menuHeight) / (this.props.list.length + 1))
        }).exec()
      } else if (env === Taro.ENV_TYPE.WEB) {
        this.menuHeight = this.menuRef.vnode.dom.getBoundingClientRect().height
        this.startTop = this.menuRef.vnode.dom.getBoundingClientRect().top
        this.itemHeight = Math.floor((this.menuHeight) / (this.props.list.length + 1))
      }
    }, 1000)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData()
    }
  }

  componentDidMount () {
    this.initData()
  }

  getListRef = node => (this.listRef = node)

  getIndexesRef = node => (this.indexesRef = node)

  getMenuRef = node => (this.menuRef = node)

  handleScroll (ev) {
    const { scrollTop } = ev.detail
    this._scrollTop = scrollTop
  }

  render () {
    const {
      className,
      customStyle,
      animation,
      topKey,
      list
    } = this.props
    return (
      <View
        className={
          classNames({
            'at-indexes': true,
          }, className)}
        style={customStyle}
        ref={this.getIndexesRef}
      >
        <View
          className='at-indexes__menu'
          onTouchMove={this.handleTouchMove.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          ref={this.getMenuRef}
        >
          <View
            className='at-indexes__menu-item'
            onClick={this.jumpTarget.bind(this, 'at-indexes__top', 0)}
          >
            {topKey}
          </View>
          {
            list.map((item, i) => (
              <View
                key={item.key}
                className='at-indexes__menu-item'
                onClick={this.jumpTarget.bind(this, `at-indexes__list-${item.key}`, i + 1)}
              >
                {item.key}
              </View>
            ))
          }
        </View>
        <ScrollView
          className='at-indexes__body'
          scrollY
          scrollWithAnimation={animation}
          scrollTop={this.state.scrollTop}
          scrollIntoView={this.state.targetView}
          onScroll={this.handleScroll.bind(this)}
          ref={this.getListRef}
        >
          <View
            className='at-indexes__content'
            id='at-indexes__top'
          >
            {this.props.children}
          </View>
          {
            list.map(listItem => (
              <View
                key={listItem.key}
                className='at-indexes__list'
              >
                <View
                  id={`at-indexes__list-${listItem.key}`}
                  className='at-indexes__list-title'
                >
                  {listItem.title}
                </View>
                <AtList>
                  {listItem.items && listItem.items.map(item => (
                    <AtListItem
                      key={item.name}
                      title={item.name}
                      onClick={this.handleClick.bind(this, item)}
                    />
                  ))}
                </AtList>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}
