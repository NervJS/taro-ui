import bind from 'bind-decorator'
import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import * as React from 'nervjs'
import _pick from 'lodash/pick'
import _isObject from 'lodash/isObject'
import _isFunction from 'lodash/isFunction'

import { View } from '@tarojs/components'
import { BaseEvent } from '@tarojs/components/types/common'

import Calendar from './types'
import AtCalendarBody from './body/index'
import AtCalendarController from './controller/index'

import { DefaultProps, Props, State, PropsWithDefaults } from './interface'

const defaultProps: DefaultProps = {
  validDates: [],
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

export default class AtCalendar extends React.Component<Props, Readonly<State>> {
  static options = { addGlobalClass: true }
  static defaultProps: DefaultProps = defaultProps

  constructor (props: Props) {
    super(props)

    const { currentDate, isMultiSelect } = props as PropsWithDefaults

    this.state = this.getInitializeState(currentDate, isMultiSelect)
  }

  UNSAFE_componentWillReceiveProps (nextProps: Props) {
    this.receiveProps(nextProps)
  }

  componentWillReceiveProps (nextProps: Props) {
    this.receiveProps(nextProps)
  }

  private receiveProps (nextProps: Props) {
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

  private getSingleSelectdState = (value: Dayjs): Partial<State> => {
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

  private getMultiSelectedState = (value: Dayjs): Pick<State, 'selectedDate'> => {
    const { selectedDate } = this.state
    const { end, start } = selectedDate

    const valueUnix: number = value.valueOf()
    const state: Pick<State, 'selectedDate'> = {
      selectedDate
    }

    if (end) {
      state.selectedDate = this.getSelectedDate(valueUnix, 0)
    } else {
      state.selectedDate.end = Math.max(valueUnix, +start)
      state.selectedDate.start = Math.min(valueUnix, +start)
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

    if (!currentDate) {
      const dayjsStart = dayjs()
      start = dayjsStart.startOf('day').valueOf()
      generateDateValue = dayjsStart.startOf('month').valueOf()
      return {
        generateDate: generateDateValue,
        selectedDate: {
          start: ''
        }
      }
    }

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

  private triggerChangeDate = (value: Dayjs) => {
    const { format } = this.props

    if (!_isFunction(this.props.onMonthChange)) return

    this.props.onMonthChange(value.format(format))
  }

  setMonth = (vectorCount: number) => {
    const { format } = this.props
    const { generateDate } = this.state

    const _generateDate: Dayjs = dayjs(generateDate).add(vectorCount, 'month')
    this.setState({
      generateDate: _generateDate.valueOf()
    })

    if (vectorCount && _isFunction(this.props.onMonthChange)) {
      this.props.onMonthChange(_generateDate.format(format))
    }
  }

  handleClickPreMonth = (isMinMonth?: boolean): void => {
    if (isMinMonth === true) {
      return
    }

    this.setMonth(-1)

    if (_isFunction(this.props.onClickPreMonth)) {
      this.props.onClickPreMonth()
    }
  }

  handleClickNextMonth = (isMaxMonth?: boolean): void => {
    if (isMaxMonth === true) {
      return
    }

    this.setMonth(1)

    if (_isFunction(this.props.onClickNextMonth)) {
      this.props.onClickNextMonth()
    }
  }

  // picker 选择时间改变时触发
  handleSelectDate = (e: BaseEvent & { detail: { value: string } }) => {
    const { value } = e.detail

    const _generateDate: Dayjs = dayjs(value)
    const _generateDateValue: number = _generateDate.valueOf()

    if (this.state.generateDate === _generateDateValue) return

    this.triggerChangeDate(_generateDate)
    this.setState({
      generateDate: _generateDateValue
    })
  }

  handleDayClick = (item: Calendar.Item) => {
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

    this.setState(stateValue as State, () => {
      this.handleSelectedDate()
    })

    if (_isFunction(this.props.onDayClick)) {
      this.props.onDayClick({ value: item.value })
    }
  }

  handleSelectedDate () {
    const selectDate = this.state.selectedDate
    if (_isFunction(this.props.onSelectDate)) {
      const info: Calendar.SelectedDate = {
        start: dayjs(selectDate.start).format(this.props.format)
      }

      if (selectDate.end) {
        info.end = dayjs(selectDate.end).format(this.props.format)
      }

      this.props.onSelectDate({
        value: info
      })
    }
  }

  handleDayLongClick = (item: Calendar.Item) => {
    if (_isFunction(this.props.onDayLongClick)) {
      this.props.onDayLongClick({ value: item.value })
    }
  }

  render () {
    const { generateDate, selectedDate } = this.state
    const {
      validDates,
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
          validDates={validDates}
          marks={marks}
          format={format}
          minDate={minDate}s
          maxDate={maxDate}
          isSwiper={isSwiper}
          isVertical={isVertical}
          selectedDate={selectedDate}
          selectedDates={selectedDates}
          generateDate={generateDate}
          onDayClick={this.handleDayClick}
          onSwipeMonth={this.setMonth}
          onLongClick={this.handleDayLongClick}
        />
      </View>
    )
  }
}
