import Calendar from './types'

export interface PropsBase {
  format?: string

  validDates?: Array<Calendar.ValidDate>

  minDate?: Calendar.DateArg

  maxDate?: Calendar.DateArg

  isSwiper?: boolean

  marks?: Array<Calendar.Mark>

  monthFormat?: string

  hideArrow?: boolean

  isVertical?: boolean

  className?: Calendar.classNameType

  onClickPreMonth?: () => void

  onClickNextMonth?: () => void

  onSelectDate?: (item: { value: Calendar.SelectedDate }) => void

  onDayClick?: (item: { value: string }) => void

  onDayLongClick?: (item: { value: string }) => void

  onMonthChange?: (value: string) => void
}

export interface SingleSelectedProps extends PropsBase {
  isMultiSelect?: false

  currentDate?: Calendar.DateArg
}

export interface MutilSelectedProps extends PropsBase {
  isMultiSelect?: true

  currentDate?: Calendar.SelectedDate
}

export type Props = SingleSelectedProps | MutilSelectedProps

export interface DefaultProps {
  format: string

  isSwiper: boolean

  validDates: Array<Calendar.ValidDate>

  marks: Array<Calendar.Mark>

  currentDate: Calendar.DateArg | Calendar.SelectedDate

  monthFormat: string

  hideArrow: boolean

  isVertical: boolean

  isMultiSelect: boolean

  selectedDates: Array<Calendar.SelectedDate>
}

export interface State {
  generateDate: number

  selectedDate: Calendar.SelectedDate
}

export type PropsWithDefaults = Props & DefaultProps
