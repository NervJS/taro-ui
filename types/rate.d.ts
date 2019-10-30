import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtRateProps extends AtComponent{
  size?: number

  value?: number

  max?: number

  margin?: number

  onChange?: CommonEventFunction
}

declare const AtRate: ComponentClass<AtRateProps>

export default AtRate
