import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

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
    const { color, size, mode, content } = this.props
    const realSize = size / 2
    const scaleSize = size / 200

    const indicatorStyle = {
      width: +size,
      height: +size,
      transform: `translate(-${realSize}px, -${realSize}px) scale(${scaleSize}) translate(${realSize}px,${realSize}px)`
    }

    const style = {
      background: color
    }

    const rootClassName = {
      'at-activity-indicator': true,
      'at-activity-indicator--center': mode == 'center'
    }

    return (
      <View className={rootClassName}>
        <View className='at-activity-indicator__body' style={indicatorStyle}>
          {views.map((item, index) => {
            return (
              <View
                key={index}
                className='at-activity-indicator__body-item'
                style={style} />
            )
          })}
        </View>
        {content && (
          <View className='at-activity-indicator__content'>{content}</View>
        )}
      </View>
    )
  }
}
