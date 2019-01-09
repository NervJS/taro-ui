import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtAvatarProps extends AtComponent{
  size?: 'large' | 'normal' | 'small'

  circle?: boolean

  text?: string
  
  image?: string

  openData?: object

  className?: string | Array<string>

  customStyle?: object | string
}

declare const AtAvatar: ComponentClass<AtAvatarProps>

export default AtAvatar
