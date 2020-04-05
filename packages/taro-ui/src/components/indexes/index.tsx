import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtIndexesProps, AtIndexesState, Item } from '../../../types/indexes'
import {
  delayQuerySelector,
  isTest,
  pxTransform,
  uuid
} from '../../common/utils'
import AtList from '../list/index'
import AtListItem from '../list/item/index'
import AtToast from '../toast/index'

const ENV = Taro.getEnv()

export default class AtIndexes extends React.Component<
  AtIndexesProps,
  AtIndexesState
> {
  public static defaultProps: AtIndexesProps
  public static propTypes: InferProps<AtIndexesProps>

  private menuHeight: number
  private startTop: number
  private itemHeight: number
  private currentIndex: number
  private listId: string
  private timeoutTimer: NodeJS.Timeout | number | undefined
  private listRef: any

  public constructor(props: AtIndexesProps) {
    super(props)
    this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
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
  }

  private handleClick = (item: Item): void => {
    this.props.onClick && this.props.onClick(item)
  }

  private handleTouchMove = (event: ITouchEvent): void => {
    event.stopPropagation()
    event.preventDefault()

    const { list } = this.props
    const pageY = event.touches[0].pageY
    const index = Math.floor((pageY - this.startTop) / this.itemHeight)

    if (index >= 0 && index <= list.length && this.currentIndex !== index) {
      this.currentIndex = index
      const key = index > 0 ? list[index - 1].key : 'top'
      const touchView = `at-indexes__list-${key}`
      this.jumpTarget(touchView, index)
    }
  }

  private handleTouchEnd = (): void => {
    this.currentIndex = -1
  }

  private jumpTarget(_scrollIntoView: string, idx: number): void {
    const { topKey = 'Top', list } = this.props
    const _tipText = idx === 0 ? topKey : list[idx - 1].key

    if (ENV === Taro.ENV_TYPE.WEB) {
      delayQuerySelector('.at-indexes', 0).then(rect => {
        const targetOffsetTop = this.listRef.childNodes[idx].offsetTop
        const _scrollTop = targetOffsetTop - rect[0].top
        this.updateState({
          _scrollTop,
          _scrollIntoView,
          _tipText
        })
      })
      return
    }

    this.updateState({
      _scrollIntoView,
      _tipText
    })
  }

  private __jumpTarget(key: string): void {
    const { list } = this.props
    // const index = _findIndex(list, ['key', key])
    const index = list.findIndex(item => item.key === key)
    const targetView = `at-indexes__list-${key}`
    this.jumpTarget(targetView, index + 1)
  }

  private updateState(state: Partial<AtIndexesState>): void {
    const { isShowToast, isVibrate } = this.props
    const { _scrollIntoView, _tipText, _scrollTop } = state
    // TODO: Fix dirty hack
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    this.setState(
      {
        _scrollIntoView: _scrollIntoView!,
        _tipText: _tipText!,
        _scrollTop: _scrollTop!,
        _isShowToast: isShowToast!
      },
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
      () => {
        clearTimeout(this.timeoutTimer as number)
        this.timeoutTimer = setTimeout(() => {
          this.setState({
            _tipText: '',
            _isShowToast: false
          })
        }, 3000)
      }
    )

    if (isVibrate) {
      Taro.vibrateShort()
    }
  }

  private initData(): void {
    delayQuerySelector('.at-indexes__menu').then(rect => {
      const len = this.props.list.length
      this.menuHeight = rect[0].height
      this.startTop = rect[0].top
      this.itemHeight = Math.floor(this.menuHeight / (len + 1))
    })
  }

  private handleScroll(e: CommonEvent): void {
    if (e && e.detail) {
      this.setState({
        _scrollTop: e.detail.scrollTop
      })
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtIndexesProps): void {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData()
    }
  }

  public componentDidMount(): void {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId)
    }
    this.initData()
  }

  public UNSAFE_componentWillMount(): void {
    this.props.onScrollIntoView &&
      this.props.onScrollIntoView(this.__jumpTarget.bind(this))
  }

  public render(): JSX.Element {
    const { className, customStyle, animation, topKey, list } = this.props
    const {
      _scrollTop,
      _scrollIntoView,
      _tipText,
      _isShowToast,
      isWEB
    } = this.state

    const toastStyle = { minWidth: pxTransform(100) }
    const rootCls = classNames('at-indexes', className)

    const menuList = list.map((dataList, i) => {
      const { key } = dataList
      const targetView = `at-indexes__list-${key}`
      return (
        <View
          className='at-indexes__menu-item'
          key={key}
          onClick={this.jumpTarget.bind(this, targetView, i + 1)}
        >
          {key}
        </View>
      )
    })

    const indexesList = list.map(dataList => (
      <View
        id={`at-indexes__list-${dataList.key}`}
        className='at-indexes__list'
        key={dataList.key}
      >
        <View className='at-indexes__list-title'>{dataList.title}</View>
        <AtList>
          {dataList.items &&
            dataList.items.map(item => (
              <AtListItem
                key={item.name}
                title={item.name}
                onClick={this.handleClick.bind(this, item)}
              />
            ))}
        </AtList>
      </View>
    ))

    return (
      <View className={rootCls} style={customStyle}>
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
          // eslint-disable-next-line no-undefined
          scrollTop={isWEB ? _scrollTop : undefined}
          scrollIntoView={!isWEB ? _scrollIntoView : ''}
          onScroll={this.handleScroll.bind(this)}
        >
          <View className='at-indexes__content' id='at-indexes__top'>
            {this.props.children}
          </View>
          {indexesList}
        </ScrollView>
      </View>
    )
  }
}

AtIndexes.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  animation: PropTypes.bool,
  isVibrate: PropTypes.bool,
  isShowToast: PropTypes.bool,
  topKey: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  onScrollIntoView: PropTypes.func
}

AtIndexes.defaultProps = {
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: []
}
