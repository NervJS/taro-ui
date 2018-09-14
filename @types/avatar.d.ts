import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtAvatarProps extends AtComponent{
  size?: 'large' | 'normal' | 'small'

  circle?: boolean

  image?: string
}

declare const AtAvatar: ComponentClass<AtAvatarProps>

export default AtAvatar
