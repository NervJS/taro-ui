import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtButtonProps {
  size: 'normal' | 'small'

  type: 'primary' | 'secondary'

  circle: number

  loading: boolean

  disabled: boolean
}

declare const AtButton: ComponentClass<AtButtonProps>

export default AtButton
