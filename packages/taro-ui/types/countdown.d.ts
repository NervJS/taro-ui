import { ComponentClass } from 'react'

import AtComponent from './base'

export interface FormatObject {
  /**
   * 格式化分割符号：天
   * @default '天'
   */
  day?: string
  /**
   * 格式化分割符号：小时
   * @default '时'
   */
  hours: string
  /**
   * 格式化分割符号：分钟
   * @default '分'
   */
  minutes: string
  /**
   * 格式化分割符号：秒
   * @default '秒'
   */
  seconds: string
}

type isTrue = string | boolean;

export interface AtCountDownProps extends AtComponent {
  /**
   * 是否显示卡片式样式
   * @default false
   */
  isCard?: boolean
  /**
   * 自定义显示天，时，分，秒
   * @default {isShowDay:false,isShowHour:true,isShowMinute:true,isShowSecond:true}
   */
  showFieldNames?: {isShowDay?: isTrue, isShowHour?: isTrue, isShowMinute?: isTrue, isShowSecond?: isTrue}
  /**
   * 格式化分割符号
   * @default { day: '天', hours: '时', minutes: '分', seconds: '秒' }
   */
  format?: FormatObject
  /**
   * 天数
   * @default 0
   */
  day?: number
  /**
   * 小时
   * @default 0
   */
  hours?: number
  /**
   * 分钟
   * @default 0
   */
  minutes?: number
  /**
   * 秒
   * @default 0
   */
  seconds?: number
  /**
   * 倒计时时间到，执行的回调函数
   */
  onTimeUp?: Function
}

export interface AtCountdownState {
  _day: number
  _hours: number
  _minutes: number
  _seconds: number
}

export interface AtCountdownItemProps extends AtComponent {
  num: number
  separator: string
  isCard?: boolean
}

declare const AtCountDown: ComponentClass<AtCountDownProps>

export default AtCountDown
