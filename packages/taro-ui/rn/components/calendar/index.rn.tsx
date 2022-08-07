import React from 'react'
import { View } from '@tarojs/components'
import {
  AtCalendarDefaultProps,
  AtCalendarProps,
  AtCalendarState
} from '../../../types/calendar'

const defaultProps: AtCalendarDefaultProps = {
  validDates: [],
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
}

export default class AtCalendar extends React.Component<
  AtCalendarProps,
  Readonly<AtCalendarState>
> {
  static defaultProps: AtCalendarDefaultProps = defaultProps

  public componentDidMount(): void {
    // eslint-disable-next-line no-console
    console.warn('Calendar 组件 RN 暂不支持')
  }

  public render(): JSX.Element {
    return <View />
  }
}
