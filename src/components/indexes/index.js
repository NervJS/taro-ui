import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import PropTypes from 'prop-types'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import _findIndex from 'lodash/findIndex'

import AtComponent from '../../common/component'

import AtList from '../../components/list/index'
import AtListItem from '../../components/list/item/index'
import AtToast from '../../components/toast/index'
import { delayQuerySelector, uuid, initTestEnv, isTest } from '../../common/utils'

initTestEnv()
const ENV = Taro.getEnv()

class AtIndexes extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
    }
    // 右侧导航高度
    this.menuHeight = 0
    // 右侧导航距离顶部高度
    this.startTop = 0
    // 右侧导航元素高度
    this.itemHeight = 0
    // 当前索引
    this.currentIndex = -1
    this.listId = isTest() ? 'indexes-list-AOTU2018' : `list-${uuid()}`
    this.timeoutTimer = null
  }

  handleClick = (...arg) => this.props.onClick(...arg)

  handleTouchMove = event => {
    event.stopPropagation()
    event.preventDefault()

    const { list } = this.props
    const pageY = event.touches[0].pageY
    const index = Math.floor((pageY - this.startTop) / this.itemHeight)

    if (index >= 0
      && index <= list.length
      && this.currentIndex !== index
    ) {
      this.currentIndex = index
      const key = index > 0 ? list[index - 1].key : 'top'
      const touchView = `at-indexes__list-${key}`
      this.jumpTarget(touchView, index)
    }
  }

  handleTouchEnd = () => {
    this.currentIndex = -1
  }

  jumpTarget (_scrollIntoView, idx) {
    const { topKey, list } = this.props
    const _tipText = idx === 0 ? topKey : list[idx - 1].key

    if (ENV === Taro.ENV_TYPE.WEB) {
      delayQuerySelector(this, '.at-indexes', 0)
        .then(rect => {
          const targetOffsetTop = this.listRef.childNodes[idx].offsetTop
          const _scrollTop = targetOffsetTop - rect[0].top
          this.updateState({
            _scrollTop,
            _scrollIntoView,
            _tipText,
          })
        })
      return
    }

    this.updateState({
      _scrollIntoView,
      _tipText
    })
  }

  __jumpTarget (key) {
    const { list } = this.props
    const index = _findIndex(list, ['key', key])
    const targetView = `at-indexes__list-${key}`
    this.jumpTarget(targetView, index + 1)
  }

  updateState (state) {
    const { isShowToast, isVibrate } = this.props
    const { _scrollIntoView, _tipText, _scrollTop } = state

    this.setState({
      _scrollIntoView,
      _tipText,
      _scrollTop,
      _isShowToast: isShowToast
    }, () => {
      clearTimeout(this.timeoutTimer)
      this.timeoutTimer = setTimeout(() => {
        this.setState({
          _tipText: '',
          _isShowToast: false
        })
      }, 3000)
    })

    if (isVibrate) {
      Taro.vibrateShort()
    }
  }

  initData () {
    delayQuerySelector(this, '.at-indexes__menu')
      .then(rect => {
        const len = this.props.list.length
        this.menuHeight = rect[0].height
        this.startTop = rect[0].top
        this.itemHeight = Math.floor((this.menuHeight) / (len + 1))
      })
  }

  handleScroll (e) {
    if (e && e.detail) {
      this.state._scrollTop = e.detail.scrollTop
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData()
    }
  }

  componentDidMount () {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId)
    }
    this.initData()
  }

  componentWillMount () {
    this.props.onScrollIntoView && this.props.onScrollIntoView(this.__jumpTarget.bind(this))
  }

  render () {
    const {
      className,
      customStyle,
      animation,
      topKey,
      list,
    } = this.props
    const {
      _scrollTop,
      _scrollIntoView,
      _tipText,
      _isShowToast,
      isWEB
    } = this.state

    const toastStyle = { minWidth: Taro.pxTransform(100) }
    const rootCls = classNames('at-indexes', className)

    const menuList = list.map((dataList, i) => {
      const { key } = dataList
      const targetView = `at-indexes__list-${key}`
      return <View className='at-indexes__menu-item' key={key}
        onClick={this.jumpTarget.bind(this, targetView, i + 1)}
      >
        {key}
      </View>
    })

    const indexesList = list.map(dataList => (
      <View
        id={`at-indexes__list-${dataList.key}`}
        className='at-indexes__list'
        key={dataList.key}
      >
        <View className='at-indexes__list-title'>
          {dataList.title}
        </View>
        <AtList>
          {dataList.items && dataList.items.map(item => (
            <AtListItem
              key={item.name}
              title={item.name}
              onClick={this.handleClick.bind(this, item)}
            />
          ))}
        </AtList>
      </View>
    ))


    return <View className={rootCls} style={customStyle}>
      <AtToast
        customStyle={toastStyle}
        isOpened={_isShowToast}
        text={_tipText}
        duration={2000}
      />
      <View
        className='at-indexes__menu'
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <View
          className='at-indexes__menu-item'
          onClick={this.jumpTarget.bind(this, 'at-indexes__top', 0)}
        >
          {topKey}
        </View>
        {menuList}
      </View>
      <ScrollView
        className='at-indexes__body'
        id={this.listId}
        scrollY
        scrollWithAnimation={animation}
        scrollTop={isWEB && _scrollTop}
        scrollIntoView={!isWEB ? _scrollIntoView : ''}
        onScroll={this.handleScroll.bind(this)}
      >
        <View className='at-indexes__content' id='at-indexes__top'>
          {this.props.children}
        </View>
        {indexesList}
      </ScrollView>
    </View>
  }
}

AtIndexes.propTypes = {
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
  onClick: PropTypes.func,
  onScrollIntoView: PropTypes.func
}

AtIndexes.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: [],
  onClick: () => { },
  onScrollIntoView: () => { },
}

export default AtIndexes
