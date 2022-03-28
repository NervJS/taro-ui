import React from 'react'
import { AtButton, AtDialog } from 'tiga-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface DialogPageState {
  [key: string]: boolean
}

export default class DialogPage extends React.Component<any, DialogPageState> {
  public constructor(props) {
    super(props)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
      isOpened5: false
    }
  }

  private handleClick = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true
    })
  }

  private closeDialog = (type: string, msg?: string): void => {
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

  public render(): JSX.Element {
    const { isOpened1, isOpened2, isOpened3, isOpened4, isOpened5 } = this.state

    return (
      <View className='page'>
        <DocsHeader title='Dialog 模态框' />

        <View className='doc-body'>
          {/* 基础模态框 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础模态框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 1)}>
                  打开基础模态框
                </AtButton>
              </View>
            </View>
          </View>
          {/* 单个按钮模态框 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>单个按钮模态框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 2)}>
                  打开单个按钮模态框
                </AtButton>
              </View>
            </View>
          </View>
          {/* 三个按钮模态框 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>三个按钮模态框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 3)}>
                  打开三个按钮模态框
                </AtButton>
              </View>
            </View>
          </View>
          {/* 无标题 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>无标题</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 4)}>
                  打开无标题模态框
                </AtButton>
              </View>
            </View>
          </View>
          {/* 自定义 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 5)}>
                  打开自定义模态框
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        {/* 基础模态框 */}
        <AtDialog
          isOpened={isOpened1}
          title='基础模态框'
          content='模块框内容'
          primaryText='主要操作'
          secondaryText='次要操作'
          onPrimary={this.closeDialog.bind(this, 1, 'Dialog被关闭了')}
          onSecondary={this.closeDialog.bind(this, 1, 'Dialog被关闭了')}
          onClose={this.closeDialog.bind(this, 1)}
        />
        {/* 单个按钮模态框 */}
        <AtDialog
          isOpened={isOpened2}
          title='单个按钮模态框'
          content='模块框内容'
          onPrimary={this.closeDialog.bind(this, 2, 'Dialog被关闭了')}
          onClose={this.closeDialog.bind(this, 2)}
        />
        {/* 三个按钮模态框 */}
        <AtDialog
          isOpened={isOpened3}
          title='三个按钮模态框'
          content='模块框内容'
          primaryText='主要操作'
          secondaryText='次要操作'
          tertiaryText='辅助操作'
          onPrimary={this.closeDialog.bind(this, 3, 'Dialog被关闭了')}
          onSecondary={this.closeDialog.bind(this, 3, 'Dialog被关闭了')}
          onTertiary={this.closeDialog.bind(this, 3, 'Dialog被关闭了')}
          onClose={this.closeDialog.bind(this, 3)}
        />
        {/* 无标题模态框 */}
        <AtDialog
          isOpened={isOpened4}
          content='无标题模态框'
          onPrimary={this.closeDialog.bind(this, 4, 'Dialog被关闭了')}
          onClose={this.closeDialog.bind(this, 4)}
        />
        {/* 自定义模态框 */}
        <AtDialog
          isOpened={isOpened5}
          title='自定义模态框'
          onPrimary={this.closeDialog.bind(this, 5, 'Dialog被关闭了')}
          onClose={this.closeDialog.bind(this, 5)}
        >
          这里是正文内容，欢迎加入58安居客。。
          这里是正文内容，欢迎加入58安居客。。
          这里是正文内容，欢迎加入58安居客。。
        </AtDialog>
      </View>
    )
  }
}
