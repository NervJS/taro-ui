import dayjs from 'dayjs'
import _forEach from 'lodash/forEach'

import Calendar from '../types'

interface PluginArg {
  item: Calendar.Item

  options: Calendar.GroupOptions

  selectedDate: Calendar.SelectedDate

  selectedDates: Array<Calendar.SelectedDate>
}

export function handleActive (args: PluginArg): PluginArg {
  const { item, selectedDate } = args
  const { _value } = item

  const selectedDateValue = Object.values(selectedDate)

  const end = Math.max(...selectedDateValue)
  const start = Math.min(...selectedDateValue)

  const dayjsEnd = dayjs(end)
  const dayjsStart = start ? dayjs(start) : dayjsEnd

  item.isSelected =
    _value.isSame(dayjsEnd) ||
    _value.isSame(dayjsStart) ||
    (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))

  item.isSelectedHead = _value.isSame(dayjsStart)
  item.isSelectedTail = _value.isSame(dayjsEnd)

  item.isToday = _value.diff(dayjs(Date.now()).startOf('day'), 'day') === 0

  return args
}

export function handleMarks (args: PluginArg): PluginArg {
  const { item, options } = args
  const { _value } = item
  const { marks } = options

  const markList = marks.filter(mark =>
    dayjs(mark.value)
      .startOf('day')
      .isSame(_value)
  )

  item.marks = markList.slice(0, 1)

  return args
}

export function handleSelectedDates (args: PluginArg): PluginArg {
  // const { item, options } = args
  // const { _value } = item
  // const { selectedDates } = options

  // if (selectedDates.length === 0) return args

  // _forEach(selectedDates, date => {
  //   const { isSelected, isHead, isTail } = item

  //   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
  //   if (isSelected) {
  //     return false
  //   }

  //   const { start, end } = date

  //   const dayjsEnd = dayjs(end).startOf('day')
  //   const dayjsStart = dayjs(start).startOf('day')

  //   item.isSelected =
  //     item.isSelected ||
  //     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))

  //   item.isHead = item.isHead || _value.isSame(dayjsStart)

  //   item.isTail = item.isTail || _value.isSame(dayjsEnd)
  // })

  return args
}

export function handleDisabled (args: PluginArg): Calendar.Item {
  const { item, options } = args
  const { _value } = item
  const { minDate, maxDate } = options

  const dayjsMinDate = dayjs(minDate)
  const dayjsMaxDate = dayjs(maxDate)

  item.isDisabled =
    !!(minDate && _value.isBefore(dayjsMinDate)) ||
    !!(maxDate && _value.isAfter(dayjsMaxDate))

  delete item._value
  return item
}

export default [handleActive, handleMarks, handleSelectedDates, handleDisabled]
