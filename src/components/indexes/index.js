import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import AtList from '../../components/list/index'
import AtListItem from '../../components/list/item/index'
import { delayQuerySelector, uuid } from '../../common/utils'

const ENV = Taro.getEnv()

class AtIndexes extends AtComponent {
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
    this.indexesId = this.props.isTest ? 'indexes-AOTU2018' : `indexes-${uuid()}`
    this.listId = this.props.isTest ? 'indexes-list-AOTU2018' : `list-${uuid()}`
    this.menuId = this.props.isTest ? 'indexes-menu-AOTU2018' : `menu-${uuid()}`
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  handleTouchMove (e) {
    e.stopPropagation()
    e.preventDefault()
    const { list } = this.props
    const pageY = e.touches[0].pageY
    const index = Math.floor((pageY - this.startTop) / this.itemHeight)
    if (
      index >= 0
      && index <= list.length
      && this.currentIndex !== index
    ) {
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
    const {
      topKey,
      list,
      isShowToast,
      isVibrate
    } = this.props

    switch (ENV) {
      case Taro.ENV_TYPE.WEAPP:
      case Taro.ENV_TYPE.ALIPAY:
        this.setState({
          targetView
        })
        break

      case Taro.ENV_TYPE.WEB: {
        const bodyOffsetTop = this.indexesRef.getBoundingClientRect().top
        const targetOffsetTop = this.listRef.childNodes[i].getBoundingClientRect().top
        const targetScrollTop = this._scrollTop + targetOffsetTop - bodyOffsetTop

        this.setState({
          scrollTop: targetScrollTop
        })
        break
      }
      default:
        console.warn('AtIndexes 暂未适配该环境')
        break
    }

    if (isShowToast) {
      Taro.showToast({
        title: i === 0 ? topKey : list[i - 1].key,
        icon: 'none',
        duration: 2000
      })
    }

    if (isVibrate) {
      Taro.vibrateShort()
    }
  }

  initData () {
    switch (ENV) {
      case Taro.ENV_TYPE.WEAPP:
      case Taro.ENV_TYPE.ALIPAY:
        delayQuerySelector(this, `#${this.menuId}`)
          .then(rect => {
            this.menuHeight = rect[0].height
            this.startTop = rect[0].top
            this.itemHeight = Math.floor((this.menuHeight) / (this.props.list.length + 1))
          })
        break

      case Taro.ENV_TYPE.WEB: {
        setTimeout(() => {
          const menuRect = this.menuRef.getBoundingClientRect()
          this.menuHeight = menuRect.height
          this.startTop = menuRect.top
          this.itemHeight = Math.floor((this.menuHeight) / (this.props.list.length + 1))
        }, 500)
        break
      }
      default:
        console.warn('AtIndexes 暂未适配该环境')
        break
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData()
    }
  }

  componentDidMount () {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.menuRef = document.getElementById(this.menuId)
      this.indexesRef = document.getElementById(this.indexesId)
      this.listRef = document.getElementById(this.listId)
    }
    this.initData()
  }

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
        id={this.indexesId}
        className={
          classNames({
            'at-indexes': true,
          }, className)}
        style={customStyle}
      >
        <View
          id={this.menuId}
          className='at-indexes__menu'
          onTouchMove={this.handleTouchMove.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
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
          id={this.listId}
          className='at-indexes__body'
          scrollY
          scrollWithAnimation={animation}
          scrollTop={this.state.scrollTop}
          scrollIntoView={this.state.targetView}
          onScroll={this.handleScroll.bind(this)}
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

AtIndexes.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  isTest: PropTypes.bool,
  animation: PropTypes.bool,
  isVibrate: PropTypes.bool,
  isShowToast: PropTypes.bool,
  topKey: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func
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
  onClick: () => { }
}

export default AtIndexes
