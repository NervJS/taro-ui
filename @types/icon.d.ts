import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtIconProps extends AtComponent,AtIconBaseProps {
  onClick?: (event: BaseEventFunction) => void
}

declare const AtIcon: ComponentClass<AtIconProps>

export default AtIcon
