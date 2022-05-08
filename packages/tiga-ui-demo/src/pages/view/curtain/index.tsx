import React from 'react'
import { AtButton, AtCurtain } from 'tiga-ui'
import { Image, View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const curtainPng =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic01.1sucai.com%2F180115%2F330814-1P11516240997.jpg&refer=http%3A%2F%2Fpic01.1sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654484635&t=d71142ee3e4d43739bf3769056778a25'

interface TagPageState {
  isOpened: boolean
  closeBtnPosition:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
  [key: string]: string | boolean
}

export default class TagPage extends React.Component<any, TagPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened: false,
      closeBtnPosition: 'bottom'
    }
  }

  private handleChange(stateName: string, value: string): void {
    this.setState({
      isOpened: true,
      [stateName]: value
    })
  }

  private onClose(): void {
    this.setState({
      isOpened: false
    })
  }

  public render(): JSX.Element {
    const { isOpened, closeBtnPosition } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Curtain 幕帘'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <Image style={{ display: 'none' }} mode='widthFix' src={curtainPng} />
          <AtCurtain
            isOpened={isOpened}
            closeBtnPosition={closeBtnPosition}
            onClose={this.onClose.bind(this)}
          >
            <Image style={{ width: '100%' }} mode='widthFix' src={curtainPng} />
          </AtCurtain>

          {/* 顶部关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>顶部关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'top'
                  )}
                >
                  顶部关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 底部关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>底部关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'bottom'
                  )}
                >
                  底部关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 左上关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>左上关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'top-left'
                  )}
                >
                  左上关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 右上关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>右上关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'top-right'
                  )}
                >
                  右上关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 左下关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>左下关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'bottom-left'
                  )}
                >
                  左下关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 右下关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>右下关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'bottom-right'
                  )}
                >
                  右下关闭幕帘
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
