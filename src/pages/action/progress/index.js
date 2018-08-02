import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import AtProgress from '../../../components/progress/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

const OFFSET = 15

export default class ProgressPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Progress Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      percent: 0
    }
  }

  reduce = () => {
    const { percent } = this.state
    if (percent === 0) {
      return
    }
    this.setState({
      percent: this.state.percent - OFFSET
    })
  }

  increase = () => {
    const { percent } = this.state
    if (percent === 100) {
      return
    }
    this.setState({
      percent: this.state.percent + OFFSET
    })
  }

  render () {
    const { percent } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='进度条'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础进度条 */}
          <View className='panel'>
            <View className='panel__title'>基础进度条</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-item'>
                  <AtProgress percent='25' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='50' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='75' />
                </View>
              </View>
            </View>
          </View>

          {/* 隐藏进度文案 */}
          <View className='panel'>
            <View className='panel__title'>隐藏进度文案</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-item'>
                  <AtProgress percent='25' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='75' hidePercent />
                </View>
              </View>
            </View>
          </View>

          {/* 不同的规格 */}
          <View className='panel'>
            <View className='panel__title'>不同的规格</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-item'>
                  <AtProgress percent='25' strokeWidth='5' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='50' strokeWidth='10' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='75' strokeWidth='15' />
                </View>
              </View>
            </View>
          </View>

          {/* 不同的颜色 */}
          <View className='panel'>
            <View className='panel__title'>不同的颜色</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-item'>
                  <AtProgress percent='25' color='#FF4949' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='50' color='#13CE66' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='75' color='#FFC82C' />
                </View>
              </View>
            </View>
          </View>

          {/* 不同的状态 */}
          <View className='panel'>
            <View className='panel__title'>不同的状态</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-item'>
                  <AtProgress percent='25' status='normal' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='50' status='active' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='75' status='success' />
                </View>
                <View className='example__body-item'>
                  <AtProgress percent='75' status='error' />
                </View>
              </View>
            </View>
          </View>

          {/* 实际案例 */}
          <View className='panel'>
            <View className='panel__title'>实际案例</View>
            <View className='panel__content'>
              <View className='example__body'>
                <Button size='mini' onClick={this.increase}>
                  +
                </Button>
                <Button size='mini' onClick={this.reduce}>
                  -
                </Button>
                <View className='example__body-item'>
                  <AtProgress percent={percent} />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
