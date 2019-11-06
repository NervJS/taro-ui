import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtMessageProps extends AtComponent {}

export interface AtMessageState {
  _isOpened: boolean
  _message: string
  _type: 'info' | 'success' | 'error' | 'warning'
  _duration: number
}

declare const AtMessage: ComponentClass<AtComponent>

interface Options {
  /**
   * 文本消息内容
   */
  message: string
  /**
   * 消息类型
   * @default 'info'
   */
  type?: 'info' | 'success' | 'error' | 'warning'
  /**
   * 消息持续时间,单位 ms
   * @default 3000
   */
  duration?: number
}

declare function message({ }: Options ): void

export { AtMessage, message }
