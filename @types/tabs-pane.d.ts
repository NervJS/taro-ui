import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtTabsPaneProps {
  current?: number

  index?: number
}

declare const AtTabsPane: ComponentClass<AtTabsPaneProps>

export default AtTabsPane
