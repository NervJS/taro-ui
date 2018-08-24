import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtSegmentedControlProps {
  current: number

  color: string

  fontSize: number

  disabled: boolean

  values: Array<string>

  onClick: (index: number, BaseEvent) => void
}

declare const AtSegmentedControl: ComponentClass<AtSegmentedControlProps>

export default AtSegmentedControl
