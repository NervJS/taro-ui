import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtToast from '../../../components/toast/index'
import AtButton from '../../../components/button/index'

import './index.scss'

const INIT_STATE = {
  text: '一行文本',
  isOpened: false,
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
      { ...INIT_STATE, isOpened: true },
      e.currentTarget.dataset
    )
    this.setState(state)
  }

  handleClickToast = () => {
    console.log('Click Toast', '默认行为被取消')
  }

  render () {
    const {
      isOpened,
      iconColor,
      iconSize,
      iconType,
      text,
      hiddenIcon
    } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>头像</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基本案例 */}
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-button'>
                  <AtButton onClick={this.handleClick}>Open Toast</AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 只展示文本 */}
          <View className='panel'>
            <View className='panel__title'>只展示文本</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-button'>
                  <AtButton
                    onClick={this.handleClick}
                    data-text='只有文本'
                    data-hidden-icon
                  >
                    Open Toast
                  </AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 只显示 Icon */}
          <View className='panel'>
            <View className='panel__title'>只显示 Icon</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-button'>
                  <AtButton data-text='' onClick={this.handleClick}>
                    Open Toast
                  </AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 更改 Icon */}
          <View className='panel'>
            <View className='panel__title'>更改 Icon</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='example__body-button'>
                  <AtButton
                    data-icon-type='success'
                    data-icon-size='80'
                    onClick={this.handleClick}
                  >
                    Open Toast
                  </AtButton>
                </View>
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
          hiddenIcon={hiddenIcon}
        />
      </View>
    )
  }
}
