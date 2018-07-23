import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtProgress extends Taro.Component {
  render () {
    let { percent } = this.props
    const { strokeWidth, color, status, hidePercent } = this.props

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = ['at-progress', `at-progress--${status}`]

    const progressStyle = {
      width: `${+percent}%`,
      height: +strokeWidth,
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
        {!hidePercent && (
          <View className='at-progress__content'>{percent}%</View>
        )}
      </View>
    )
  }
}
