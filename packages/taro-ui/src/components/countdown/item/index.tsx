import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtCountdownItemProps } from '../../../../types/countdown'

export default class AtCountdownItem extends React.Component<AtCountdownItemProps> {
  public static defaultProps: AtCountdownItemProps
  public static propTypes: InferProps<AtCountdownItemProps>

  private formatNum(num: number): string {
    return num <= 9 ? `0${num}` : `${num}`
  }

  public render(): JSX.Element {
    const { num, separator } = this.props

    return (
      <View className='at-countdown__item'>
        <View className='at-countdown__time-box'>
          <Text className='at-countdown__time'>{this.formatNum(num)}</Text>
        </View>
        <Text className='at-countdown__separator'>{separator}</Text>
      </View>
    )
  }
}

AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
}

AtCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
}
