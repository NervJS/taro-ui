import { ComponentClass } from 'react'

import AtComponent from './base'

export type AtMessageProps = AtComponent

export interface AtMessageState {
  _isOpened: boolean
  _message: string
  _type: 'info' | 'success' | 'error' | 'warning'
  _duration: number
  _height?: number
  translateY?: any
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

declare function message(options: Options): void

declare module '@tarojs/taro' {
  interface TaroStatic {
    atMessage: (options: Options) => void
  }
}

export { AtMessage, message }
