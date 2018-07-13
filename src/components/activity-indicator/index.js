import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class ActivityIndicator extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      views: new Array(12).fill()
    }
  }

  render() {
    const { views } = this.state
    const { color, size = 100, mode, text } = this.props
    const realSize = size / 2
    const scaleSize = size / 200

    const rootStyle = {
      width: +size,
      height: +size,
      transform: `translate(-${realSize}px, -${realSize}px) scale(${scaleSize}) translate(${realSize}px,${realSize}px)`
    }
    const style = {
      background: color
    }

    const rootClassName = ['at-activity-indicator__body', `at-activity-indicator__body--${mode}`]

    return (
      <View className='at-activity-indicator'>
        <View className={rootClassName} style={rootStyle}>
          {views.map((item, index) => {
            return (
              <View
                key={index}
                className='at-activity-indicator__body-item'
                style={style} />
            )
          })}
        </View>
        <View>{text}</View>
      </View>
    )
  }
}
