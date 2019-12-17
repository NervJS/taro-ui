import * as React from 'nervjs'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtProgress extends AtComponent {
  render () {
    const { color } = this.props
    let { percent } = this.props
    const { strokeWidth, status, isHidePercent } = this.props

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = classNames(
      'at-progress',
      {
        [`at-progress--${status}`]: !!status
      },
      this.props.className
    )
    const iconClass = classNames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success',
    })

    const progressStyle = {
      width: percent && `${+percent}%`,
      height: strokeWidth && `${+strokeWidth}px`,
      backgroundColor: color
    }

    return (
      <View className={rootClass}>
        <View className='at-progress__outer'>
          <View className='at-progress__outer-inner'>
            <View
              className='at-progress__outer-inner-background'
              style={progressStyle}
            />
          </View>
        </View>

        {!isHidePercent && (
          <View className='at-progress__content'>
            {!status || status === 'progress' ? `${percent}%` : <Text className={iconClass}></Text>}
          </View>
        )}
      </View>
    )
  }
}

AtProgress.propTypes = {
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
}
