import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import {
  AtCalendarControllerProps,
  AtCalendarControllerState
} from 'types/calendar'
import { Picker, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class AtCalendarController extends Taro.Component<
  AtCalendarControllerProps,
  AtCalendarControllerState
> {
  static options = { addGlobalClass: true }

  render() {
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
          mode='date'
          fields='month'
          end={maxDateValue}
          start={minDateValue}
          onChange={this.props.onSelectDate}
          value={dayjsDate.format('YYYY-MM')}
        >
          <Text className='controller__info'>
            {dayjsDate.format(monthFormat)}
          </Text>
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
