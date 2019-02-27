import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtIconProps extends AtComponent, AtIconBaseProps {
  onClick?: CommonEventFunction
}

declare const AtIcon: ComponentClass<AtIconProps>

export default AtIcon
