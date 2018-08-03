import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import Toast from '../../../components/toast/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

const INIT_STATE = {
  text: '一行文本',
  isOpen: false,
  iconSize: 100,
  iconColor: 'white',
  iconType: 'cancel',
  hiddenIcon: false
}

export default class ToastPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Toast Page'
  }

  constructor () {
    super(...arguments)
    this.state = INIT_STATE
  }

  handleClick = e => {
    const state = Object.assign(
      { ...INIT_STATE, isOpen: true },
      e.currentTarget.dataset
    )
    this.setState(state)
  }

  handleClickToast = () => {
    console.log('Click Toast', '默认行为被取消')
  }

  render () {
    const {
      isOpen,
      iconColor,
      iconSize,
      iconType,
      text,
      hiddenIcon
    } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Toast 轻提示'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基本案例 */}
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button size='mini' onClick={this.handleClick}>Open Toast</Button>
              </View>
            </View>
          </View>

          {/* 只展示文本 */}
          <View className='panel'>
            <View className='panel__title'>只展示文本</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button
                  size='mini'
                  onClick={this.handleClick}
                  data-text='只有文本'
                  data-hidden-icon
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          {/* 只显示 Icon */}
          <View className='panel'>
            <View className='panel__title'>只显示 Icon</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button data-text='' size='mini' onClick={this.handleClick}>Open Toast</Button>
              </View>
            </View>
          </View>

          {/* 更改 Icon */}
          <View className='panel'>
            <View className='panel__title'>更改 Icon</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button
                  data-icon-type='success'
                  data-icon-size='80'
                  size='mini'
                  onClick={this.handleClick}
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}

        <Toast
          text={text}
          isOpen={isOpen}
          iconSize={iconSize}
          iconType={iconType}
          iconColor={iconColor}
          hiddenIcon={hiddenIcon}
        />
      </View>
    )
  }
}
