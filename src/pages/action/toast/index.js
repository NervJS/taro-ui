import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import DocsHeader from '../../components/doc-header'
import AtToast from '../../../components/toast/index'

import './index.scss'

const INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  hasMask: false,
  isOpened: false
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
      text,
      icon,
      status,
      isOpened,
      duration,
      image,
      hasMask
    } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Toast 轻提示' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button
                  onClick={this.handleClick}
                  data-text='基本案例'
                  data-icon='close-circle'
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>显示图片</View>
            <View className='panel__content'>
              <View className='example__item'>
                <Button
                  data-image='https://aotu.io/img/qrcode.jpg'
                  data-text='欢迎关注'
                  onClick={this.handleClick}
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>添加遮罩层</View>
            <View className='panel__content'>
              <View className='example__item'>
                <Button
                  data-has-mask
                  data-text='透明遮罩层的作用在于不可点击下面的元素'
                  onClick={this.handleClick}
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>状态为Error的Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <Button
                  data-status='error'
                  data-text='错误提示'
                  onClick={this.handleClick}
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>状态为Success的Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <Button
                  data-status='success'
                  data-text='正确提示'
                  onClick={this.handleClick}
                >
                  Open Toast
                </Button>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>状态为Loading的Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <Button
                  data-status='loading'
                  data-text='正在加载…'
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
          icon={icon}
          text={text}
          image={image}
          status={status}
          hasMask={hasMask}
          isOpened={isOpened}
          duration={duration}
        />
      </View>
    )
  }
}
