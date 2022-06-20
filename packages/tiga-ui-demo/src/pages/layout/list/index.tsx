import React from 'react'
import { AtButton, AtIcon, AtListItem } from 'tiga-ui'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class ListPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  private handleClick = (e: CommonEvent): void => {
    Taro.showToast({
      title: `点击 ListItem: ${e}`,
      icon: 'none'
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page list-page'>
        <DocsHeader title='ListItem 列表' />

        <View className='doc-body'>
          {/* 基本用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基本用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtListItem title='标题文字' onClick={this.handleClick} />
              </View>
            </View>
          </View>

          {/* 带描述信息 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>带描述信息</View>
            <View className='panel__content no-padding'>
              <AtListItem
                title='标题文字'
                extra='详细信息'
                description='描述信息'
              />
              <AtListItem
                arrow
                title='标题文字'
                extra='详细信息'
                description='描述信息右对齐'
                descriptionLayout='right'
              />
            </View>
          </View>

          {/* 包含箭头，Icon */}
          <View className='doc-body--panel'>
            <View className='panel__title'>包含箭头，Icon</View>
            <View className='panel__content no-padding'>
              <AtListItem
                title='标题文字'
                arrow={
                  <AtIcon
                    className='list-page-arrow'
                    value='comm_icon_right_line'
                    size={16}
                    color='#666'
                  />
                }
              />
              <AtListItem disabled title='禁用状态' extra='详细信息' />
              <AtListItem
                title='标题文字'
                extra='箭头单独点击事件'
                arrow={
                  <AtIcon
                    className='list-page-arrow'
                    value='comm_icon_right_line'
                    color='#666'
                    size={16}
                    onClick={e => {
                      if (Taro.getEnv() !== Taro.ENV_TYPE.RN) {
                        e.stopPropagation()
                      }
                      Taro.showToast({
                        title: '点击箭头'
                      })
                    }}
                  />
                }
                onClick={this.handleClick}
              />
            </View>
          </View>

          {/* 支持标题前和标题后 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>支持标题前和标题后</View>
            <View className='panel__content no-padding'>
              <AtListItem
                prefix={
                  <AtIcon
                    className='list-page-arrow'
                    value='comm_icon_more_line'
                    size={16}
                  />
                }
                title='前缀图标标题'
              />
              <AtListItem title='标题文字' extra='详细信息' />
              <AtListItem
                title='标题文字'
                extra={
                  <View className='list-page-item-button'>
                    <AtButton>通过调整extra子元素布局</AtButton>
                  </View>
                }
              />
            </View>
          </View>

          {/* 支持标题前和标题后 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>支持标题前和标题后</View>
            <View className='panel__content no-padding'>
              <AtListItem arrow title='标题超过六个字换行' extra='详细信息' />
              <AtListItem
                arrow
                title='标题一'
                extra='详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息'
              />
              <AtListItem
                arrow
                ellipsis
                title='标题文字'
                extra='超长省略详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息'
              />
            </View>
          </View>

          {/* 描述超长 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>描述超长</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtListItem arrow title='标题超过六个字换行' extra='详细信息' />
                <AtListItem
                  arrow
                  title='标题文字'
                  extra='详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息'
                />
                <AtListItem
                  arrow
                  ellipsis
                  title='标题文字'
                  extra='超长省略详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
