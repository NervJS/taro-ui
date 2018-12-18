import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../icon/index'
import AtComponent from '../../common/component'

import './index.scss'

export default class AtProgress extends AtComponent {
  render () {
    let { percent } = this.props
    let { color } = this.props
    const { strokeWidth, status, isHidePercent } = this.props

    let iconInfo = {}

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

    if (status === 'error') {
      iconInfo = {
        color: '#FF4949',
        value: 'close-circle'
      }
      color = '#FF4949'
    } else if (status === 'success') {
      iconInfo = {
        color: '#13CE66',
        value: 'check-circle'
      }
      color = '#13CE66'
    }

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
            {!status || status === 'progress' ? (
              percent + '%' /* eslint-disable-line prefer-template */
            ) : (
              <AtIcon customStyle={{ fontSize: '18px' }} value={iconInfo.value} color={iconInfo.color} />
            )}
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
