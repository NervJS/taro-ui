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
            <View className='panel__title'>类型 type</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  primary
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  type='secondary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  secondary
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  type='tertiary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  tertiary
                </AtButton>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>禁用 disabled</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton
                  disabled
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  primary
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  disabled
                  type='secondary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  secondary
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  disabled
                  type='tertiary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  tertiary
                </AtButton>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>尺寸 size</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton
                  size='large'
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  large
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  size='medium'
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  medium
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  size='small'
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  small
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  size='mini'
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  mini
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  size='tiny'
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  tiny
                </AtButton>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>宽度 width</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton
                  size='full'
                  type='primary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  full 通栏
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  size='large'
                  type='secondary'
                  customStyle={{ width: Taro.pxTransform(200) }}
                  onClick={this.onButtonClick.bind(this)}
                >
                  {`setWidth: ${Taro.pxTransform(200)}`}
                </AtButton>
              </View>
              <View className='btn-item'>
                <AtButton
                  type='tertiary'
                  onClick={this.onButtonClick.bind(this)}
                >
                  autoWidth
                </AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
