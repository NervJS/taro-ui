import bind from 'bind-decorator'
import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import {
  AtCalendarDefaultProps,
  AtCalendarProps,
  AtCalendarPropsWithDefaults,
  AtCalendarState,
  Calendar
} from 'types/calendar'
import { View } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtCalendarBody from './body/index'
import AtCalendarController from './controller/index'

const defaultProps: AtCalendarDefaultProps = {
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

export default class AtCalendar extends Taro.Component<
  AtCalendarProps,
  Readonly<AtCalendarState>
> {
  static defaultProps: AtCalendarDefaultProps = defaultProps

  constructor(props: AtCalendarProps) {
    super(props)

    const { currentDate, isMultiSelect } = props as AtCalendarPropsWithDefaults

    this.state = this.getInitializeState(currentDate, isMultiSelect)
  }

  componentWillReceiveProps(nextProps: AtCalendarProps) {
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

    const stateValue: AtCalendarState = this.getInitializeState(
      currentDate,
      isMultiSelect
    )

    this.setState(stateValue)
  }

  static options = { addGlobalClass: true }

  @bind
  private getSingleSelectdState(value: Dayjs): Partial<AtCalendarState> {
    const { generateDate } = this.state

    const stateValue: Partial<AtCalendarState> = {
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
  private getMultiSelectedState(
    value: Dayjs
  ): Pick<AtCalendarState, 'selectedDate'> {
    const { selectedDate } = this.state
    const { end, start } = selectedDate

    const valueUnix: number = value.valueOf()
    const state: Pick<AtCalendarState, 'selectedDate'> = {
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

  private getSelectedDate(start: number, end?: number): Calendar.SelectedDate {
    const stateValue: Calendar.SelectedDate = {
      start,
      end: start
    }

    if (typeof end !== 'undefined') {
      stateValue.end = end
    }

    return stateValue
  }

  private getInitializeState(
    currentDate: Calendar.DateArg | Calendar.SelectedDate,
    isMultiSelect?: boolean
  ): AtCalendarState {
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

  @bind
  private triggerChangeDate(value: Dayjs) {
    const { format } = this.props

    if (typeof this.props.onMonthChange !== 'function') return

    this.props.onMonthChange(value.format(format))
  }

  @bind
  setMonth(vectorCount: number) {
    const { format } = this.props
    const { generateDate } = this.state

    const _generateDate: Dayjs = dayjs(generateDate).add(vectorCount, 'month')
    this.setState({
      generateDate: _generateDate.valueOf()
    })

    if (vectorCount && typeof this.props.onMonthChange === 'function') {
      this.props.onMonthChange(_generateDate.format(format))
    }
  }

  @bind
  handleClickPreMonth(isMinMonth?: boolean): void {
    if (isMinMonth === true) {
      return
    }

    this.setMonth(-1)

    if (typeof this.props.onClickPreMonth === 'function') {
      this.props.onClickPreMonth()
    }
  }

  @bind
  handleClickNextMonth(isMaxMonth?: boolean): void {
    if (isMaxMonth === true) {
      return
    }

    this.setMonth(1)

    if (typeof this.props.onClickNextMonth === 'function') {
      this.props.onClickNextMonth()
    }
  }

  // picker 选择时间改变时触发
  @bind
  handleSelectDate(e: BaseEventOrig<{ value: string }>) {
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
  handleDayClick(item: Calendar.Item) {
    const { isMultiSelect } = this.props
    const { isDisabled, value } = item

    if (isDisabled) return

    const dayjsDate: Dayjs = dayjs(value)

    let stateValue: Partial<AtCalendarState> = {}

    if (isMultiSelect) {
      stateValue = this.getMultiSelectedState(dayjsDate)
    } else {
      stateValue = this.getSingleSelectdState(dayjsDate)
    }

    this.setState(stateValue as AtCalendarState, () => {
      this.handleSelectedDate()
    })

    if (typeof this.props.onDayClick === 'function') {
      this.props.onDayClick({ value: item.value })
    }
  }

  handleSelectedDate() {
    const selectDate = this.state.selectedDate
    if (typeof this.props.onSelectDate === 'function') {
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

  @bind
  handleDayLongClick(item: Calendar.Item) {
    if (typeof this.props.onDayLongClick === 'function') {
      this.props.onDayLongClick({ value: item.value })
    }
  }

  render() {
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
    } = this.props as AtCalendarPropsWithDefaults

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
          minDate={minDate}
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
