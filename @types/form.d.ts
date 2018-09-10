import { MouseEvent, ComponentClass } from 'react'
import { BaseEvent } from '@tarojs/components/types/common'

declare type FormFunction = (event: BaseEvent) => void

export interface AtFormProps {
  style?: string

  reportSubmit?: boolean

  onSubmit?: FormFunction

  onReset?: FormFunction
}

declare const AtForm: ComponentClass<AtFormProps>

export default AtForm
