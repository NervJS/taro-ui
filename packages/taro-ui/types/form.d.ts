import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

declare type FormFunction = (event: CommonEvent) => void

import AtComponent from './base'

export interface AtFormProps extends AtComponent {
  /**
   * 是否返回 formId 用于发送模板消息
   * @default false
   */
  reportSubmit?: boolean
  /**
   * 携带 form 中的数据触发 submit 事件，由于小程序组件化的限制，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取
   */
  onSubmit?: FormFunction
  /**
   * 表单重置时会触发 reset 事件
   */
  onReset?: FormFunction
}

declare const AtForm: ComponentClass<AtFormProps>

export default AtForm
