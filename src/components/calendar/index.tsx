import bind from 'bind-decorator'
import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import _isFunction from 'lodash/isFunction'
import { BaseEvent } from '@tarojs/components/types/common'

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import Calendar from './types'
import AtCalendarBody from './body/index'
import { getGenerateDate } from './common/helper'
import AtCalendarController from './controller/index'
import { DefaultProps, Props, State, PropsWithDefaults } from './interface'

import './index.scss'

const defaultProps: DefaultProps = {
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
}

export default class AtCalendar extends Taro.Component<Props, State> {
  static defaultProps: DefaultProps = defaultProps

  readonly state: Readonly<State> = {
    selectedDate: dayjs(this.props.currentDate)
      .startOf('day')
      .valueOf(),
    generateDate: getGenerateDate(this.props.currentDate).valueOf()
  }

  componentWillReceiveProps (nextProps) {
    const { currentDate } = nextProps
    if (currentDate === this.props.currentDate) return
    this.setState({
      selectedDate: dayjs(currentDate)
        .startOf('day')
        .valueOf(),
      generateDate: getGenerateDate(currentDate).valueOf()
    })
  }

  @bind
  private triggerChangeDate (value: Dayjs) {
    const { format } = this.props

    if (!_isFunction(this.props.onMonthChange)) return

    this.props.onMonthChange(value.format(format))
  }

  @bind
  setGenerateDate (vectorCount: number) {
    const { generateDate } = this.state

    const _generateDate: number = dayjs(generateDate)
      .add(vectorCount, 'month')
      .valueOf()
    this.setState({
      generateDate: _generateDate
    })
  }

  @bind
  handleClickPreMonth (isMinMonth?: boolean): void {
    if (isMinMonth === true) {
      return
    }

    this.setGenerateDate(-1)

    if (_isFunction(this.props.onClickPreMonth)) {
      this.props.onClickPreMonth()
    }
  }

  @bind
  handleClickNextMonth (isMaxMonth?: boolean): void {
    if (isMaxMonth === true) {
      return
    }

    this.setGenerateDate(1)

    if (_isFunction(this.props.onClickNextMonth)) {
      this.props.onClickNextMonth()
    }
  }

  @bind
  handleSelectDate (e: BaseEvent & { detail: { value: string } }) {
    const { value } = e.detail

    const _generateDate: Dayjs = dayjs(value)
    const _generateDateValue: number = _generateDate.valueOf()

    if (this.state.generateDate === _generateDateValue) return

    this.triggerChangeDate(_generateDate)
    this.setState({
      generateDate: _generateDateValue
    })
  }

  @bind
  handleClick (item: Calendar.Item) {
    const { generateDate } = this.state
    const { isDisabled, value } = item

    if (isDisabled) return

    const dayjsValue = dayjs(value)

    const _state: Partial<State> = {
      selectedDate: dayjsValue.valueOf()
    }

    const _generateDate: Dayjs = dayjsValue.startOf('month')
    const _generateDateValue: number = _generateDate.valueOf()

    if (_generateDateValue !== generateDate) {
      this.triggerChangeDate(_generateDate)
      _state.generateDate = _generateDateValue
    }

    this.setState(_state as State)

    if (_isFunction(this.props.onDayClick)) {
      this.props.onDayClick(item)
    }
  }

  @bind
  handleDayLongClick (item: Calendar.Item) {
    if (_isFunction(this.props.onDayLongClick)) {
      this.props.onDayLongClick(item)
    }
  }

  render () {
    const { generateDate, selectedDate } = this.state
    const {
      marks,
      format,
      minDate,
      maxDate,
      isSwiper,
      className,
      hideArrow,
      isVertical,
      monthFormat
    } = this.props as PropsWithDefaults

    return (
      <View className={classnames('at-calendar', className)}>
        <AtCalendarController
          minDate={minDate}
          maxDate={maxDate}
          hideArrow={hideArrow}
          monthFormat={monthFormat}
          generateDate={generateDate}
          onPreMonth={this.handleClickPreMonth}
          onNextMonth={this.handleClickNextMonth}
          onSelectDate={this.handleSelectDate}
        />
        <View className='at-calendar__body'>
          <AtCalendarBody
            marks={marks}
            format={format}
            minDate={minDate}
            maxDate={maxDate}
            isSwiper={isSwiper}
            isVertical={isVertical}
            onClick={this.handleClick}
            selectedDate={selectedDate}
            generateDate={generateDate}
            onLongClick={this.handleDayLongClick}
            onSwipeMonth={this.setGenerateDate}
          />
        </View>
      </View>
    )
  }
}
