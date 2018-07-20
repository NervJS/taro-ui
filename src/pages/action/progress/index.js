import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import Progress from '../../../components/progress/index'

import './index.scss'

const OFFSET = 15

export default class ProgressPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      percent: 0
    }
  }

  reduce = () => {
    const { percent } = this.state
    if (percent == 0) {
      return
    }
    this.setState({
      percent: this.state.percent - OFFSET
    })
  }

  increase = () => {
    const { percent } = this.state
    if (percent == 100) {
      return
    }
    this.setState({
      percent: this.state.percent + OFFSET
    })
  }

  render () {
    const { percent } = this.state
    return (
      <View className='progress__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>不同的进度 percent</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-item'>
              <Progress percent='25' />
            </View>
            <View className='example__body-item'>
              <Progress percent='50' />
            </View>
            <View className='example__body-item'>
              <Progress percent='75' />
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>
              是否隐藏进度条 hidePercent
            </Text>
          </View>
          <View className='example__body'>
            <View className='example__body-item'>
              <Progress percent='25' />
            </View>
            <View className='example__body-item'>
              <Progress percent='75' hidePercent />
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>
              不同的规格 strokeWidth
            </Text>
          </View>
          <View className='example__body'>
            <View className='example__body-item'>
              <Progress percent='25' strokeWidth='5' />
            </View>
            <View className='example__body-item'>
              <Progress percent='50' strokeWidth='10' />
            </View>
            <View className='example__body-item'>
              <Progress percent='75' strokeWidth='15' />
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>不同的颜色 color</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-item'>
              <Progress percent='25' color='#FF4949' />
            </View>
            <View className='example__body-item'>
              <Progress percent='50' color='#13CE66' />
            </View>
            <View className='example__body-item'>
              <Progress percent='75' color='#FFC82C' />
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>不同的状态 status</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-item'>
              <Progress percent='25' status='normal' />
            </View>
            <View className='example__body-item'>
              <Progress percent='50' status='active' />
            </View>
            <View className='example__body-item'>
              <Progress percent='75' status='success' />
            </View>
            <View className='example__body-item'>
              <Progress percent='75' status='error' />
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>实际案例</Text>
          </View>
          <View className='example__body'>
            <Button onClick={this.increase}>+</Button>
            <Button onClick={this.reduce}>-</Button>
            <View className='example__body-item'>
              <Progress percent={percent} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
