import { ComponentClass } from 'react'
import AtComponent from './base'

export interface AtEllipsisProps extends AtComponent {
  text: string
  btnText?: string
  expand?: boolean
  lines?: number
  expandText?: string
  textStyle?: { fontSize?: number | string; color?: string }
  btnTextStyle?: { fontSize?: number | string; color?: string }

  onWillExpand?: (text?: string) => boolean | void
  onWillCollapse?: () => void
  onExpand?: () => void
  onCollapse?: () => void
}

export interface AtEllipsisState {
  texts: Array<string>
  isExpand: boolean
  isMore: boolean
}

declare const AtEllipsis: ComponentClass<AtEllipsisProps>

export default AtEllipsis
