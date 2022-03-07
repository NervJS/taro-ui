import React from 'react'
import { AtButton, AtToast, AtDialog } from 'tiga-ui'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { CommonEventFunction } from '@tarojs/components/types/common'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const INIT_STATE: ToastPageState = {
  text: '',
  duration: 'auto',
  maskHide: false,
  isOpened: false,
  isOpened1: false,
  isOpened2: false,
  isOpened3: false
}

interface ToastPageState {
  text: string
  duration: string
  maskHide: boolean
  isOpened: boolean
  isOpened1: boolean
  isOpened2: boolean
  isOpened3: boolean
}

interface ToastRef {
  show?: CommonEventFunction
  hide?: CommonEventFunction
}
export default class ToastPage extends React.Component<any, ToastPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Tiga UI'
  }
  public constructor(props: any) {
    super(props)
    this.state = { ...INIT_STATE, isOpened1: false }
  }

  private handleClick = (params: ToastPageState): void => {
    if (this.state.isOpened) {
      return this.setState(INIT_STATE)
    }
    const state = Object.assign({ ...INIT_STATE, isOpened: true }, params)
    this.setState(state)
  }
  private handleClick1 = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true
    })
  }
  private handleClose = (): void => {
    this.setState({
      isOpened: false
    })
  }
  private closeModal = (type: string, msg?: string): void => {
    this.setState({
      [`isOpened${type}`]: false
    })
    if (msg) {
      Taro.showToast({
        icon: 'none',
        title: msg
      })
    }
  }
  private showToast = (params: ToastPageState): void => {
    const state = Object.assign({ ...INIT_STATE, isOpened: true }, params)
    this.setState(state)
  }
  private handleClickModal = (): void => {
    this.setState({ isOpened2: true })
    // AtToast.show()
  }
  private handleClickModal1 = (): void => {
    // const toast = new AtToast(INIT_STATE)
    AtToast.show()
    // AtToast.show({text: 'test'})
  }
  public render(): JSX.Element {
    const {
      text,
      isOpened,
      duration,
      maskHide,
      isOpened1,
      isOpened2,
      isOpened3
    } = this.state
    return (
      <View className='page toast-page'>
        {/* S Header */}
        <DocsHeader title='Toast 轻提示' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '单行文字提示'
                  })}
                >
                  文本 Toast
                </AtButton>
              </View>
              <View className='example-item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '多行文字提示，主用于后端返回特殊报错，如果使用请尽量控制文本字数。'
                  })}
                >
                  多行文本 Toast
                </AtButton>
              </View>
            </View>
          </View>

          {/* <View className='panel'>
            <View className='panel__title'>自定义图片</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '凹凸实验室',
                    image:
                      'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'
                  })}
                >
                  自定义图片 Toast
                </AtButton>
              </View>
            </View>
          </View> */}

          <View className='panel'>
            <View className='panel__title'>添加遮罩层</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '透明遮罩层的作用在于不可点击下面的元素',
                    maskHide: true
                  })}
                >
                  添加遮罩层 Toast
                </AtButton>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>弹窗上面 toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton onClick={this.handleClick1.bind(this, 1)}>
                  弹窗上面 Toast
                </AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* S end */}
        {/* 基础组件 */}
        <AtToast
          text={text}
          maskHide={maskHide}
          isOpened={isOpened}
          duration={duration}
          onClose={this.handleClose}
        />
        {/* 带弹窗webtoast */}
        <AtDialog
          isOpened={isOpened1}
          title='基础模态框'
          // content='模块框内容'
          primaryText='showtoast'
          secondaryText='取消'
          // onPrimary={this.showToast.bind(this, { text: '弹窗上面的toast' })}
          onPrimary={this.handleClickModal.bind(this)}
          onSecondary={this.closeModal.bind(this, 1, 'Modal被关闭了')}
          onClose={this.closeModal.bind(this, 1)}
        >
          <View>
            <AtToast
              maskHide={maskHide}
              isOpened={isOpened2}
              duration={duration}
              onClose={this.handleClose}
            >
              <Image
                className='imagebox'
                src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
              ></Image>
              <View style={{ color: 'white' }}>12313</View>
            </AtToast>
          </View>
        </AtDialog>
        <AtDialog
          isOpened={isOpened3}
          title='基础模态框'
          // content='模块框内容'
          primaryText='showtoast'
          secondaryText='取消'
          // onPrimary={this.showToast.bind(this, { text: '弹窗上面的toast' })}
          onPrimary={this.handleClickModal1.bind(this)}
          onSecondary={this.closeModal.bind(this, 1, 'Modal被关闭了')}
          onClose={this.closeModal.bind(this, 1)}
        />
        <AtToast
          maskHide={maskHide}
          isOpened={false}
          duration={duration}
          onClose={this.handleClose}
        >
          <Image
            className='imagebox'
            src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
          ></Image>
          <View style={{ color: 'white' }}>12313</View>
          {/* <View className='red'>13313</View> */}
        </AtToast>
      </View>
    )
  }
}
