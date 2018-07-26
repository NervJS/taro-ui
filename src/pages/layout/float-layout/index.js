import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import AtFloatLayout from '../../../components/float-layout/index'

import './index.scss'

export default class GridPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Grid Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false
    }
  }

  handleClick = e => {
    const state = Object.assign({ isOpened: true }, e.currentTarget.dataset)
    this.setState(state)
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='grid__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <Button onClick={this.handleClick}>打开Float Layout</Button>
          </View>
        </View>
        <AtFloatLayout title='这是个标题' isOpened={isOpened}>
          <View className='content-wrapper'>
            这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}
