import dayjs, { Dayjs } from 'dayjs'
import classnames from 'classnames'

import Taro from '@tarojs/taro'
import { Text, View, Picker } from '@tarojs/components'

import { Props, State } from './interface'

import './index.scss'

export default class AtCalendarController extends Taro.Component<Props, State> {
  render () {
    const {
      generateDate,
      minDate,
      maxDate,
      monthFormat,
      hideArrow
    } = this.props

    const dayjsDate: Dayjs = dayjs(generateDate)
    const dayjsMinDate: Dayjs | boolean = !!minDate && dayjs(minDate)
    const dayjsMaxDate: Dayjs | boolean = !!maxDate && dayjs(maxDate)

    const isMinMonth: boolean =
      dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate)

    const isMaxMonth: boolean =
      dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate)

    const minDateValue: string = dayjsMinDate
      ? dayjsMinDate.format('YYYY-MM')
      : ''
    const maxDateValue: string = dayjsMaxDate
      ? dayjsMaxDate.format('YYYY-MM')
      : ''

    return (
      <View className='at-calendar__controller controller'>
        {hideArrow ? null : (
          <View
            className={classnames('controller__arrow controller__arrow--left', {
              'controller__arrow--disabled': isMinMonth
            })}
            onClick={this.props.onPreMonth.bind(this, isMinMonth)}
          />
        )}
        <Picker
          className='controller__info'
          mode='date'
          fields='month'
          end={maxDateValue}
          start={minDateValue}
          onChange={this.props.onSelectDate}
          value={dayjsDate.format('YYYY-MM')}
        >
          <Text>{dayjsDate.format(monthFormat)}</Text>
        </Picker>
        {hideArrow ? null : (
          <View
            className={classnames(
              'controller__arrow controller__arrow--right',
              {
                'controller__arrow--disabled': isMaxMonth
              }
            )}
            onClick={this.props.onNextMonth.bind(this, isMaxMonth)}
          />
        )}
      </View>
    )
  }
}
