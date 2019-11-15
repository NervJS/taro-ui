import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class ThemePage extends Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public render (): JSX.Element {
    return (
      <View>Theme</View>
    )
  }
}
