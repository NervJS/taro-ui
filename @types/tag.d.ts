import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtTagProps extends AtComponent{
  size?: string

  type?: string

  name?: string

  circle?: boolean

  active?: boolean

  disabled?: boolean

  className?: string | Array<string>

  customStyle?: object | string

  onClick?: CommonEventFunction
}

declare const AtTag: ComponentClass<AtTagProps>

export default AtTag
