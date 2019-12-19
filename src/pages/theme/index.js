import * as React from 'nervjs'
import { View } from '@tarojs/components'
import './index.scss'

export default class PanelBasic extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View>Theme</View>
    )
  }
}
