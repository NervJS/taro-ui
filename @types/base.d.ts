import { CSSProperties } from 'react'

export interface AtComponent {
  className?: string | string[]
  customStyle?: string | CSSProperties
}

export interface AtIconBaseProps extends AtComponent {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default AtComponent
