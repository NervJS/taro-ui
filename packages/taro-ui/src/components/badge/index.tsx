import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtBadgeProps } from '../../../types/badge'

export default class AtBadge extends React.Component<AtBadgeProps> {
  public static defaultProps: AtBadgeProps
  public static propTypes: InferProps<AtBadgeProps>

  public constructor(props: AtBadgeProps) {
    super(props)
    this.state = {}
  }

  private formatValue(
    value: string | number | undefined,
    maxValue: number
  ): string | number {
    if (value === '' || value === null || typeof value === 'undefined')
      return ''
    const numValue = +value
    if (Number.isNaN(numValue)) {
      return value
    }
    return numValue > maxValue ? `${maxValue}+` : numValue
  }

  public render(): JSX.Element {
    const { dot, value, maxValue = 99, customStyle } = this.props
    const rootClassName = ['at-badge']

    const val = this.formatValue(value, maxValue)

    return (
      <View
        className={classNames(rootClassName, this.props.className)}
        style={customStyle}
      >
        {this.props.children}
        {dot ? (
          <View className='at-badge__dot'></View>
        ) : (
          val !== '' && <View className='at-badge__num'>{val}</View>
        )}
      </View>
    )
  }
}

AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
}

AtBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
