import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface FormatObject {
  day?: string

  hours: string

  minutes: string

  seconds: string
}

export interface AtCountDownProps extends AtComponent{
  isCard?: boolean

  isShowDay?: boolean

  isShowHour?: boolean

  format?: FormatObject

  day?: number

  hours?: number

  minutes?: number

  seconds?: number

  onTimeUp?: Function
}

declare const AtCountDown: ComponentClass<AtCountDownProps>

export default AtCountDown
