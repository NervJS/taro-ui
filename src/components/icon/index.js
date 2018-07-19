import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtIcon extends Taro.Component {
  constructor() {
    super(...arguments)
  }

  render() {
    let { value, size = 24, color = '#000'} = this.props
    
    const rootStyle = {
      // width: `${+size}px`,
      // height: `${+size}px`,
      fontSize: `${size}px`,
      color,
    }

    let rootClassName = ['at-icon', `at-icon-${value}`]
      
    return (
      <View className={rootClassName} style={rootStyle}></View>
    )
  }
}
