import { CSSProperties, ReactNode } from 'react'

export interface AtComponent {
  className?: string
  style?: CSSProperties
  customStyle?: string | CSSProperties
  children?: ReactNode
}

export interface AtIconBaseProps2 extends AtComponent {
  value: string

  color?: string
}

export interface AtIconBaseProps extends AtComponent {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default AtComponent
