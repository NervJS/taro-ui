import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import './index.scss'

export default class AtProgress extends Taro.Component {
  render () {
    let { percent } = this.props
    const { strokeWidth, color, status, isHidePercent } = this.props

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = ['at-progress']

    if (status) {
      rootClass.push(`at-progress--${status}`)
    }

    const progressStyle = {
      width: `${+percent}%`,
      height: `${+strokeWidth}px`,
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
          <View className='at-progress__content'>{percent}%</View>
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
  isHidePercent: PropTypes.bool,
}
