import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtAvatarProps {
  size?: 'large' | 'normal' | 'small'

  circle?: boolean

  image?: string

  openData?: object
}

declare const AtAvatar: ComponentClass<AtAvatarProps>

export default AtAvatar
