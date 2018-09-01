import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtTagProps {
  size?: string

  type?: string

  name?: string

  active?: boolean

  disabled?: boolean

  onClick?: (event: BaseEventFunction) => void
}

declare const AtTag: ComponentClass<AtTagProps>

export default AtTag
