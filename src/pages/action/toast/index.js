import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import DocsHeader from '../../components/doc-header'
import AtToast from '../../../components/toast/index'

import './index.scss'

const INIT_STATE = {
  text: '一行文本',
  isOpened: false,
  iconSize: 100,
  iconColor: 'white',
  iconType: 'cancel',
  isHiddenIcon: false
}

export default class ToastPage extends Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = INIT_STATE
  }

  handleClick = e => {
    const state = Object.assign(
      { ...INIT_STATE, isOpened: true },
      e.currentTarget.dataset
    )
    this.setState(state)
  }

  render () {
    const {
      isOpened,
      iconColor,
      iconSize,
      iconType,
      text,
      isHiddenIcon
    } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Toast 轻提示' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基本案例 */}
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button onClick={this.handleClick}>Open Toast</Button>
              </View>
            </View>
          </View>

          {/* 只展示文本 */}
          <View className='panel'>
            <View className='panel__title'>只展示文本</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button
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
              <View className='example__item'>
                <Button data-text='' onClick={this.handleClick}>
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          {/* 更改 Icon */}
          <View className='panel'>
            <View className='panel__title'>更改 Icon</View>
            <View className='panel__content'>
              <View className='example__item'>
                <Button
                  data-icon-type='success'
                  data-icon-size='80'
                  onClick={this.handleClick}
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}

        <AtToast
          text={text}
          isOpened={isOpened}
          iconSize={iconSize}
          iconType={iconType}
          iconColor={iconColor}
          isHiddenIcon={isHiddenIcon}
        />
      </View>
    )
  }
}
