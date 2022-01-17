import React from 'react'
import { AtButton } from 'tiga-ui'
import { View } from '@tarojs/components'
import Taro, { ShareAppMessageReturn } from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ButtonPageState {
  isWEAPP?: boolean
  isALIPAY?: boolean
}

export default class ButtonPage extends React.Component<any, ButtonPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      // isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      // isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
    }
  }

  private onButtonClick(): void {
    const content = [...arguments].find(item => typeof item === 'string')
    const ENV = Taro.getEnv()
    if (ENV === 'WEAPP') {
      Taro.showModal({
        content: content || '您点击了按钮！',
        showCancel: false
      })
    }
    if (ENV === 'WEB') {
      alert(content || '您点击了按钮！')
    }
  }

  public onShareAppMessage(): ShareAppMessageReturn {
    return {
      title: 'Tiga UI',
      path: '/pages/index/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    }
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Button 按钮'></DocsHeader>
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body'>
          {/* 主操作 */}
          <View className='panel'>
            <View className='panel__title'>主操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  主操作按钮
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  type='primary'
                  loading
                  onClick={this.onButtonClick.bind(this)}
                >
                  Loading
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' disabled>
                  不可操作
                </AtButton>
              </View>
            </View>
          </View>
          <View className='test red'></View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
