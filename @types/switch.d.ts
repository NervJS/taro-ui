import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtSwitchProps extends AtComponent{
  title?: string

  color?: string

  checked?: boolean

  border?: boolean

  disabled?: boolean

  onChange?: (value: boolean) => void
}

declare const AtSwitch: ComponentClass<AtSwitchProps>

export default AtSwitch
