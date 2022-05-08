import React from 'react'
import Taro from '@tarojs/taro'
import { AtNoticeBar } from 'tiga-ui'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

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
  }

  private onAction(): void {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert('您点击操作区!')
      return
    }

    Taro.showModal({
      content: '点击操作区!',
      cancelText: '取消'
    })
  }

  private onClose(): void {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert('您点击关闭图标!')
      return
    }

    Taro.showModal({
      content: '点击关闭图标!',
      cancelText: '取消'
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='NoticeBar 通知栏'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基本 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基本</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtNoticeBar
                  showClose
                  type='info'
                  content='默认提示信息'
                  actionText='操作'
                />
              </View>
            </View>
          </View>
          {/* 不同类型 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>不同类型</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtNoticeBar
                  showClose
                  type='warning'
                  content='警示或活动提示信息'
                  actionText='操作'
                />
                <AtNoticeBar
                  showClose
                  type='success'
                  content='成功提示信息'
                  actionText='操作'
                />
                <AtNoticeBar
                  showClose
                  type='error'
                  content='错误提示信息'
                  actionText='操作'
                />
                <AtNoticeBar
                  showClose
                  type='invalidation'
                  content='失效提示信息'
                  actionText='操作'
                />
              </View>
            </View>
          </View>
          {/* 单行 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>单行</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtNoticeBar
                  single
                  showClose
                  type='info'
                  content='默认提示信息 超出省略单行单行单行单行单行单行'
                  actionText='操作'
                />
              </View>
            </View>
          </View>
          {/* 默认多行 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>默认多行</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtNoticeBar
                  showClose
                  type='info'
                  content='默认提示信息 超出省略单行单行单行单行单行单行'
                  actionText='操作'
                />
              </View>
            </View>
          </View>
          {/* 操作反馈 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>操作反馈</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtNoticeBar
                  showClose
                  type='info'
                  content='默认提示信息'
                  actionText='点击操作区'
                  onAction={this.onAction}
                />
              </View>
            </View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtNoticeBar
                  showClose
                  type='info'
                  content='默认提示信息'
                  onClose={this.onClose}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
