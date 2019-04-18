import dayjs from 'dayjs'

export default Calendar

declare namespace Calendar {
  export type DateArg = string | number | Date

  export type classNameType =
    | string
    | Array<string>
    | { [key: string]: boolean }

  export interface Mark {
    value: DateArg
  }

  export interface ValidDate {
    value: DateArg
  }

  export interface Item {
    value: string

    _value: dayjs.Dayjs

    text: number

    type: number

    marks: Array<Mark>

    isActive?: boolean

    isToday?: boolean

    isBeforeMin?: boolean

    isAfterMax?: boolean

    isDisabled?: boolean

    isSelected?: boolean

    isSelectedHead?: boolean

    isSelectedTail?: boolean
  }

  export interface GroupOptions {
    validDates: Array<ValidDate>

    marks: Array<Mark>

    format: string

    selectedDates: Array<SelectedDate>

    minDate?: DateArg

    maxDate?: DateArg
  }

  export type List < T > = Array<T>

  export type ListInfo < T > = {
    value: number

    list: List<T>
  }

  export interface SelectedDate {
    end?: Calendar.DateArg

    start: Calendar.DateArg
  }
}
