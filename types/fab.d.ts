import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'


import AtComponent from './base'

export interface AtFabProps extends AtComponent {
  size?: 'normal' | 'small'

  onClick?: CommonEventFunction
}

declare const AtFab: ComponentClass<AtFabProps>

export default AtFab
