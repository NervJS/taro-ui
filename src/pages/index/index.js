import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components"

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: "首页"
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text className='page-head'>Hello world!</Text>
      </View>
    )
  }
}
