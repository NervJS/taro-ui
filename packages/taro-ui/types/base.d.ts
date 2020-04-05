import { CSSProperties } from 'react'

export interface AtComponent {
  className?: string

  customStyle?: string | CSSProperties
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
