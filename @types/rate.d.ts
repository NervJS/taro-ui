import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtRateProps {
  size: number

  value: number

  max: number

  margin: number
  
  onChange: BaseEventFunction
}

declare const AtRate: ComponentClass<AtRateProps>

export default AtRate
