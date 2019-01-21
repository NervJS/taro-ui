import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

declare const AtMessage: ComponentClass<AtComponent>

interface Options {
  message: string

  type?: 'info' | 'success' | 'error' | 'warning'

  duration?: number
}

declare function message({ }: Options ): void

export { AtMessage, message }
