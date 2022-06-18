import React from 'react'
import { AtModalSheet, AtButton } from 'tiga-ui'
import { View, Input } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ModalSheetPageState {
  isOpened1: boolean
  isOpened2: boolean
  isOpened3: boolean
  [key: string]: boolean
}

export default class ModalSheetPage extends React.Component<
  any,
  ModalSheetPageState
> {
  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false
    }
  }

  private handleClick = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true
    })
  }

  private handleClose = (name: string): void => {
    this.setState({
      [`isOpened${name}`]: false
    })
  }

  public render(): JSX.Element {
    const { isOpened1, isOpened2, isOpened3 } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ModalSheet 动作面板' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 默认 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>默认</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton onClick={this.handleClick.bind(this, 1)}>
                  打开 ModalSheet
                </AtButton>
              </View>
            </View>
          </View>

          {/* 带操作按钮 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>带操作按钮</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton onClick={this.handleClick.bind(this, 2)}>
                  打开 ModalSheet
                </AtButton>
              </View>
            </View>
          </View>

          {/* 主体内容自定义 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>主体内容自定义</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton onClick={this.handleClick.bind(this, 3)}>
                  打开 ModalSheet
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        <AtModalSheet
          title='标题'
          isOpened={isOpened1}
          onClose={this.handleClose.bind(this, 1)}
        >
          <View>自定义内容</View>
        </AtModalSheet>

        <AtModalSheet
          title='标题'
          cancelText='取消'
          isOpened={isOpened2}
          onClose={this.handleClose.bind(this, 2)}
        >
          <View>自定义内容</View>
        </AtModalSheet>

        <AtModalSheet
          title='标题'
          isOpened={isOpened3}
          onClose={this.handleClose.bind(this, 3)}
        >
          <View>
            <Input placeholder='请输入' />
          </View>
        </AtModalSheet>
      </View>
    )
  }
}
