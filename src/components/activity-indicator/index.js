import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class ActivityIndicator extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      views: new Array(12).fill()
    }
  }

  render () {
    const { views } = this.state
    const { color, size, mode, content } = this.props
    const realSize = size / 2
    const scaleSize = size / 200

    const indicatorStyle = {
      width: size ? `${+size}px` : undefined,
      height: size ? `${+size}px` : undefined,
      transform: realSize ? `translate(-${realSize}px, -${realSize}px) scale(${scaleSize}) translate(${realSize}px,${realSize}px)` : undefined
    }

    const style = {
      background: color
    }

    const rootClassName = ['at-activity-indicator']

    if (mode === 'center') {
      rootClassName.push('at-activity-indicator--center')
    }

    return (
      <View className={rootClassName}>
        <View className='at-activity-indicator-container'>
          <View className='at-activity-indicator-container__body'>
            <View
              className='at-activity-indicator-container__body-views'
              style={indicatorStyle}
            >
              {views.map((item, index) => (
                <View
                  key={index}
                  className='at-activity-indicator-container__body-views-item'
                  style={style}
                />
              ))}
            </View>
          </View>

          {content && (
            <Text className='at-activity-indicator-container__content'>
              {content}
            </Text>
          )}
        </View>
      </View>
    )
  }
}
