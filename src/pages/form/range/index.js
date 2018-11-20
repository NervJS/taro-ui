import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtRange from '../../../components/range/index'
import AtToast from '../../../components/toast/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      text: '',
    }
  }

  handleChange (value) {
    this.setState({
      isOpened: true,
      text: `${value[0]}~${value[1]}`
    })
  }

  handleClose () {
    this.setState({
      isOpened: false
    })
  }
  render () {
    return (
      <View className='page'>
        <AtToast
          text={this.state.text}
          isOpened={this.state.isOpened}
          onClose={this.handleClose.bind(this)}
        />
        {/* S Header */}
        <DocsHeader title='Range 范围选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <AtRange
                value={[20, 60]}
                onAfterChange={this.handleChange.bind(this)}
                onChange={this.handleChange.bind(this)}
              />
            </View>
          </View>
          {/* 自定义样式 */}
          <View className='panel'>
            <View className='panel__title'>自定义样式</View>
            <View className='panel__content'>
              <AtRange
                sliderStyle={{ backgroundColor: '#6190E8' }}
                value={[20, 40]}
              />
            </View>
          </View>
          {/* 禁止状态 */}
          <View className='panel'>
            <View className='panel__title'>禁止状态</View>
            <View className='panel__content'>
              <AtRange
                value={[20, 40]}
                disabled
              />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
