import dayjs, { Dayjs } from 'dayjs'
import classnames from 'classnames'
import * as React from 'nervjs'
import { Text, View, Picker } from '@tarojs/components'
import { Props, State } from './interface'

export default class AtCalendarController extends React.Component<Props, State> {
  static options = { addGlobalClass: true }

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
