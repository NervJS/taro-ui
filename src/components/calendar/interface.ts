import Calendar from './types'

export interface Props {
  format?: string

  minDate?: Calendar.DateArg

  maxDate?: Calendar.DateArg

  isSwiper?: boolean

  marks?: Array<Calendar.Mark>

  monthFormat?: string

  hideArrow?: boolean

  isVertical?: boolean

  currentDate?: Calendar.DateArg

  className?: Calendar.classNameType

  onClickPreMonth?: () => void

  onClickNextMonth?: () => void

  onDayClick?: (item: Calendar.Item) => void

  onDayLongClick?: (item: Calendar.Item) => void

  onMonthChange?: (value: string) => void
}

export interface DefaultProps {
  format: string

  isSwiper: boolean

  marks: Array<Calendar.Mark>

  currentDate: Calendar.DateArg

  monthFormat: string

  hideArrow: boolean

  isVertical: boolean
}

export interface State {
  generateDate: number

  selectedDate: number
}

export type PropsWithDefaults = Props & DefaultProps
