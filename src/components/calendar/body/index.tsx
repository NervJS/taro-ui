import dayjs from 'dayjs'
import classnames from 'classnames'
import _chunk from 'lodash/chunk'
import _throttle from 'lodash/throttle'

import Taro from '@tarojs/taro'
import bind from 'bind-decorator'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { ITouchEvent, BaseEvent, ITouch } from '@tarojs/components/types/common'

import Calendar from '../types'
import AtCalendarDayList from '../ui/day-list/index'
import AtCalendarDateList from '../ui/date-list/index'
import generateCalendarGroup from '../common/helper'
import { Props, State, ListGroup } from './interface'

import { delayQuerySelector } from '../../../common/utils'

import './index.scss'

const ANIMTE_DURATION: number = 300

const defaultProps: Partial<Props> = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
}

export default class AtCalendarBody extends Taro.Component<
  Props,
  Readonly<State>
  > {
  static defaultProps: Partial<Props> = defaultProps

  private changeCount: number = 0
  private currentSwiperIndex: number = 1
  private startX: number = 0
  private swipeStartPoint: number = 0
  private isPreMonth: boolean = false
  private maxWidth: number = 0
  private isTouching: boolean = false

  private generateFunc: (
    generateDate: number,
    selectedDate: Calendar.SelectedDate,
    isShowStatus?: boolean
  ) => Calendar.ListInfo<Calendar.Item>

  constructor (props) {
    super(...arguments)
    const {
      marks,
      format,
      minDate,
      maxDate,
      generateDate,
      selectedDate,
      selectedDates
    } = props

    this.generateFunc = generateCalendarGroup({
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    })
    const listGroup = this.getGroups(generateDate, selectedDate)

    this.state = {
      listGroup,
      offsetSize: 0,
      isAnimate: false
    }
  }

  @bind
  private getGroups (
    generateDate: number,
    selectedDate: Calendar.SelectedDate
  ): ListGroup {
    const dayjsDate = dayjs(generateDate)
    const arr: ListGroup = []
    const preList: Calendar.ListInfo<Calendar.Item> = this.generateFunc(
      dayjsDate.subtract(1, 'month').valueOf(),
      selectedDate
    )

    const nowList: Calendar.ListInfo<Calendar.Item> = this.generateFunc(
      generateDate,
      selectedDate,
      true
    )

    const nextList: Calendar.ListInfo<Calendar.Item> = this.generateFunc(
      dayjsDate.add(1, 'month').valueOf(),
      selectedDate
    )

    const preListIndex =
      this.currentSwiperIndex === 0 ? 2 : this.currentSwiperIndex - 1
    const nextListIndex =
      this.currentSwiperIndex === 2 ? 0 : this.currentSwiperIndex + 1

    arr[preListIndex] = preList
    arr[nextListIndex] = nextList
    arr[this.currentSwiperIndex] = nowList

    return arr
  }

  componentWillReceiveProps (nextProps: Props) {
    const {
      marks,
      format,
      minDate,
      maxDate,
      generateDate,
      selectedDate,
      selectedDates
    } = nextProps

    this.generateFunc = generateCalendarGroup({
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    })
    const listGroup = this.getGroups(generateDate, selectedDate)

    this.setState({
      offsetSize: 0,
      listGroup
    })
  }

  componentDidMount () {
    delayQuerySelector(this.$scope, '.at-calendar-slider__main').then(res => {
      this.maxWidth = res[0].width
    })
  }

  @bind
  private handleTouchStart (e: ITouchEvent) {
    if (!this.props.isSwiper) {
      return
    }
    this.isTouching = true
    this.startX = e.touches[0].clientX
  }

  private handleTouchMove = (e: ITouchEvent) => {
    if (!this.props.isSwiper) {
      return
    }
    if (!this.isTouching) return

    const { clientX } = e.touches[0]
    const offsetSize = clientX - this.startX

    this.setState({
      offsetSize
    })
  }

  private animateMoveSlide (offset: number, callback?: Function) {
    this.setState(
      {
        isAnimate: true
      },
      () => {
        this.setState({
          offsetSize: offset
        })
        setTimeout(() => {
          this.setState(
            {
              isAnimate: false
            },
            () => {
              callback && callback()
            }
          )
        }, ANIMTE_DURATION)
      }
    )
  }

  @bind
  private handleTouchEnd () {
    if (!this.props.isSwiper) {
      return
    }

    const { offsetSize } = this.state

    this.isTouching = false
    const isRight = offsetSize > 0

    const breakpoint = this.maxWidth / 2
    const absOffsetSize = Math.abs(offsetSize)

    if (absOffsetSize > breakpoint) {
      const res = isRight ? this.maxWidth : -this.maxWidth
      return this.animateMoveSlide(res, () => {
        this.props.onSwipeMonth(isRight ? -1 : 1)
      })
    }
    this.animateMoveSlide(0)
  }

  @bind
  private handleChange (e: BaseEvent) {
    const { current, source } = e.detail

    if (source === 'touch') {
      this.currentSwiperIndex = current
      this.changeCount = this.changeCount + 1
    }
  }

  @bind
  private handleAnimateFinish () {
    if (this.changeCount > 0) {
      this.props.onSwipeMonth(
        this.isPreMonth ? -this.changeCount : this.changeCount
      )
      this.changeCount = 0
    }
  }

  @bind
  private handleSwipeTouchStart (
    e: ITouchEvent & { changedTouches: Array<ITouch> }
  ) {
    const { clientY, clientX } = e.changedTouches[0]
    this.swipeStartPoint = this.props.isVertical ? clientY : clientX
  }

  @bind
  private handleSwipeTouchEnd (
    e: ITouchEvent & { changedTouches: Array<ITouch> }
  ) {
    const { clientY, clientX } = e.changedTouches[0]
    this.isPreMonth = this.props.isVertical
      ? clientY - this.swipeStartPoint > 0
      : clientX - this.swipeStartPoint > 0
  }

  render () {
    const { isSwiper } = this.props
    const { isAnimate, offsetSize, listGroup } = this.state

    if (!isSwiper) {
      return (
        <View
          className={classnames(
            'main',
            'at-calendar-slider__main',
            `at-calendar-slider__main--${process.env.TARO_ENV}`
          )}
        >
          <AtCalendarDayList />
          <View className='main__body body'>
            <View className='body__slider body__slider--now'>
              <AtCalendarDateList
                list={listGroup[1].list}
                onClick={this.props.onDayClick}
                onLongClick={this.props.onLongClick}
              />
            </View>
          </View>
        </View>
      )
    }

    /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */
    if (process.env.TARO_ENV === 'h5') {
      return (
        <View
          className={classnames(
            'main',
            'at-calendar-slider__main',
            `at-calendar-slider__main--${process.env.TARO_ENV}`
          )}
          onTouchEnd={this.handleTouchEnd}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}
        >
          <AtCalendarDayList />
          <View
            className={classnames('main__body  body', {
              'main__body--slider': isSwiper,
              'main__body--animate': isAnimate
            })}
            style={{
              transform: isSwiper
                ? `translateX(-100%) translate3d(${offsetSize},0,0)`
                : '',
              WebkitTransform: isSwiper
                ? `translateX(-100%) translate3d(${offsetSize}px,0,0)`
                : ''
            }}
          >
            <View className='body__slider body__slider--pre'>
              <AtCalendarDateList list={listGroup[0].list} />
            </View>
            <View className='body__slider body__slider--now'>
              <AtCalendarDateList
                list={listGroup[1].list}
                onClick={this.props.onDayClick}
                onLongClick={this.props.onLongClick}
              />
            </View>
            <View className='body__slider body__slider--next'>
              <AtCalendarDateList list={listGroup[2].list} />
            </View>
          </View>
        </View>
      )
    }

    return (
      <View
        className={classnames(
          'main',
          'at-calendar-slider__main',
          `at-calendar-slider__main--${process.env.TARO_ENV}`
        )}
      >
        <AtCalendarDayList />
        <Swiper
          circular
          current={1}
          skipHiddenItemLayout
          className={classnames('main__body')}
          onChange={this.handleChange}
          vertical={this.props.isVertical}
          onAnimationFinish={this.handleAnimateFinish}
          onTouchEnd={this.handleSwipeTouchEnd}
          onTouchStart={this.handleSwipeTouchStart}
        >
          {listGroup.map((item, key) => (
            <SwiperItem key={item.value} itemId={key.toString()}>
              <AtCalendarDateList
                list={item.list}
                onClick={this.props.onDayClick}
                onLongClick={this.props.onLongClick}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
