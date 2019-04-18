import Calendar from '../types'

export type ListGroup = Array<Calendar.ListInfo<Calendar.Item>>

export interface Props {
  format: string

  validDates: Array<Calendar.ValidDate>

  marks: Array<Calendar.Mark>

  isSwiper: boolean

  minDate?: Calendar.DateArg

  maxDate?: Calendar.DateArg

  isVertical: boolean

  generateDate: number

  selectedDate: Calendar.SelectedDate

  selectedDates: Array<Calendar.SelectedDate> | []

  onDayClick: (item: Calendar.Item) => void

  onSwipeMonth: (vectorCount: number) => void

  onLongClick: (item: Calendar.Item) => void
}

export interface State {
  isAnimate: boolean

  offsetSize: number

  listGroup: ListGroup
}
