import bind from 'bind-decorator'
import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'

import _pick from 'lodash/pick'
import _isObject from 'lodash/isObject'
import _isFunction from 'lodash/isFunction'

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { BaseEvent } from '@tarojs/components/types/common'

import Calendar from './types'
import AtCalendarBody from './body/index'
import AtCalendarController from './controller/index'

import { DefaultProps, Props, State, PropsWithDefaults } from './interface'

import './index.scss'

const defaultProps: DefaultProps = {
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
}

export default class AtCalendar extends Taro.Component<Props, Readonly<State>> {
  static defaultProps: DefaultProps = defaultProps

  constructor (props: Props) {
    super(...arguments)

    const { currentDate, isMultiSelect } = props as PropsWithDefaults

    this.state = this.getInitializeState(currentDate, isMultiSelect)
  }

  componentWillReceiveProps (nextProps: Props) {
    const { currentDate, isMultiSelect } = nextProps
    if (!currentDate || currentDate === this.props.currentDate) return

    if (isMultiSelect && this.props.isMultiSelect) {
      const { start, end } = currentDate as Calendar.SelectedDate
      const { start: preStart, end: preEnd } = this.props
        .currentDate as Calendar.SelectedDate

      if (start === preStart && preEnd === end) {
        return
      }
    }

    const stateValue: State = this.getInitializeState(
      currentDate,
      isMultiSelect
    )

    this.setState(stateValue)
  }

  @bind
  private getSingleSelectdState (value: Dayjs): Partial<State> {
    const { generateDate } = this.state

    const stateValue: Partial<State> = {
      selectedDate: this.getSelectedDate(value.valueOf())
    }

    const dayjsGenerateDate: Dayjs = value.startOf('month')
    const generateDateValue: number = dayjsGenerateDate.valueOf()

    if (generateDateValue !== generateDate) {
      this.triggerChangeDate(dayjsGenerateDate)
      stateValue.generateDate = generateDateValue
    }

    return stateValue
  }

  @bind
  private getMultiSelectedState (value: Dayjs): Partial<State> {
    const { selectedDate } = this.state
    const { end } = selectedDate

    const valueUnix: number = value.valueOf()
    const state: Partial<State> = {}

    if (end) {
      state.selectedDate = this.getSelectedDate(valueUnix, 0)
    } else {
      selectedDate.end = valueUnix
      state.selectedDate = selectedDate
    }

    return state
  }

  private getSelectedDate (start: number, end?: number): Calendar.SelectedDate {
    const stateValue: Calendar.SelectedDate = {
      start,
      end: start
    }

    if (typeof end !== 'undefined') {
      stateValue.end = end
    }

    return stateValue
  }

  private getInitializeState (
    currentDate: Calendar.DateArg | Calendar.SelectedDate,
    isMultiSelect?: boolean
  ): State {
    let end: number
    let start: number
    let generateDateValue: number

    if (isMultiSelect) {
      const { start: cStart, end: cEnd } = currentDate as Calendar.SelectedDate

      const dayjsStart = dayjs(cStart)

      start = dayjsStart.startOf('day').valueOf()
      generateDateValue = dayjsStart.startOf('month').valueOf()

      end = cEnd
        ? dayjs(cEnd)
          .startOf('day')
          .valueOf()
        : start
    } else {
      const dayjsStart = dayjs(currentDate as Calendar.DateArg)

      start = dayjsStart.startOf('day').valueOf()
      generateDateValue = dayjsStart.startOf('month').valueOf()

      end = start
    }

    return {
      generateDate: generateDateValue,
      selectedDate: this.getSelectedDate(start, end)
    }
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
  handleDayClick (item: Calendar.Item) {
    const { isMultiSelect } = this.props
    const { isDisabled, value } = item

    if (isDisabled) return

    const dayjsDate: Dayjs = dayjs(value)

    let stateValue: Partial<State> = {}

    if (isMultiSelect) {
      stateValue = this.getMultiSelectedState(dayjsDate)
    } else {
      stateValue = this.getSingleSelectdState(dayjsDate)
    }

    this.setState(stateValue as State)

    if (_isFunction(this.props.onDayClick)) {
      this.props.onDayClick({ value: item.value })
    }
  }

  @bind
  handleDayLongClick (item: Calendar.Item) {
    if (_isFunction(this.props.onDayLongClick)) {
      this.props.onDayLongClick({ value: item.value })
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
      monthFormat,
      selectedDates
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
        <AtCalendarBody
          marks={marks}
          format={format}
          minDate={minDate}
          maxDate={maxDate}
          isSwiper={isSwiper}
          isVertical={isVertical}
          selectedDate={selectedDate}
          selectedDates={selectedDates}
          generateDate={generateDate}
          onDayClick={this.handleDayClick}
          onSwipeMonth={this.setGenerateDate}
          onLongClick={this.handleDayLongClick}
        />
      </View>
    )
  }
}
