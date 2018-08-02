import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import AtFloatLayout from '../../../components/float-layout/index'

import './index.scss'

export default class FloatLayoutPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'FloatLayout Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: true
    }
  }

  handleClick = e => {
    const state = Object.assign({ isOpened: true }, e.currentTarget.dataset)
    this.setState(state)
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>浮动布局</View>
        </View>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example__body'>
                <Button onClick={this.handleClick}>打开Float Layout</Button>
              </View>
            </View>
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
