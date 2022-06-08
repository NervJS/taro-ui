import { ReactNode, FC } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export type ListItemProps = {
  title?: ReactNode
  disabled?: boolean
  description?: ReactNode
  arrow?: boolean | ReactNode
  prefix?: ReactNode
  extra?: ReactNode
  clickable?: boolean
  ellipsis?: boolean
  descriptionLayout?: 'left' | 'right'
  children?: ReactNode
  onClick?: (event: CommonEvent) => void
} & AtComponent

export declare const AtListItem: FC<ListItemProps>
