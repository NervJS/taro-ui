import React, { ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

declare type FormFunction = (event: CommonEvent) => void

import AtComponent from './base'

export interface AtFormProps extends AtComponent {
  /**
   * 是否返回 formId 用于发送模板消息
   * @default false
   */
  // reportSubmit?: boolean
  /**
   * 布局模式
   * @default 'horizontal'
   */
  layout: 'vertical' | 'horizontal'
  /**
   * 是否展示错误反馈
   * @default true
   */
  hasFeedback: boolean
  /**
   * 必填选填的标记样式
   * @default 'asterisk'
   */
  requiredMarkStyle: 'asterisk' | 'text-required' | 'text-optional'
  /**
   * 表单名称
   */
  name?: string
  /**
   * 表单底部
   */
  footer?: React.ReactNode
  /**
   * 携带 form 中的数据触发 submit 事件，由于小程序组件化的限制，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取
   */
  // onSubmit?: FormFunction
  /**
   * 表单重置时会触发 reset 事件
   */
  // onReset?: FormFunction
}

declare const AtForm: ComponentClass<AtFormProps & any>

export interface AtFormItemProps extends AtComponent {
  /**
   * 字段名
   */
  name: string
  /**
   * 标签名
   */
  label: string | React.ReactNode
  /**
   * 解释说明
   */
  description?: string | React.ReactNode
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 提示区
   */
  help?: boolean | React.ReactNode
  /**
   * 是否展示错误反馈，配置则表单项单独控制
   */
  hasFeedback?: boolean
  /**
   * 右侧操作区，只用于垂直布局模式
   */
  tail?: React.ReactNode
  /**
   * 额外内容
   */
  extra?: React.ReactNode
  /**
   * 箭头
   */
  arrow?: boolean | ReactNode
  /**
   * 是否必选，默认 `false`（如有设置 `rules`，则会根据 `rules` 判断）
   */
  required?: boolean
  /**
   * 校验规则，设置字段的校验逻辑
   */
  rules?: Array<Record<string, any>>
}

export declare const AtFormItem: ComponentClass<AtFormItemProps>

export default AtForm
