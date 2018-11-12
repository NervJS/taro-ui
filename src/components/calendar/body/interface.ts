import { DefaultProps as _DefaultProps } from '../interface'

import Calendar from '../types'

export type ListGroup = Array<Calendar.List<Calendar.Item>>

export interface Props {
  format: string

  marks: Array<Calendar.Mark>

  isSwiper: boolean

  minDate?: Calendar.DateArg

  maxDate?: Calendar.DateArg

  isVertical: boolean

  generateDate: number

  selectedDate: number

  onClick: (item: Calendar.Item) => void

  onSwipeMonth: (vectorCount: number) => void

  onLongClick: (item: Calendar.Item) => void
}

export interface State {
  isAnimate: boolean

  offsetSize: number

  listGroup: ListGroup
}

export interface Cache {
  [key: number]: Calendar.List<Calendar.Item>
}
