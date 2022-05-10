import { ReactNode, FC } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export type ListItemProps = {
  title?: ReactNode
  children?: ReactNode
  description?: ReactNode
  prefix?: ReactNode
  extra?: ReactNode
  clickable?: boolean
  arrow?: boolean | ReactNode
  disabled?: boolean
  ellipsis?: boolean
  descriptionLayout?: 'left' | 'right'
  onClick?: (event: CommonEvent) => void
} & AtComponent

export declare const AtListItem: FC<ListItemProps>
