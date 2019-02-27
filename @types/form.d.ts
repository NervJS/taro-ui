import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

declare type FormFunction = (event: CommonEvent) => void

import AtComponent from './base'

export interface AtFormProps extends AtComponent{
  reportSubmit?: boolean

  onSubmit?: FormFunction

  onReset?: FormFunction
}

declare const AtForm: ComponentClass<AtFormProps>

export default AtForm
