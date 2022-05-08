import React from 'react'
import { AtTag, AtTagGroup } from 'tiga-ui'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type ListItem = {
  name: string
  active: boolean
}

interface TagPageState {
  tagList: ListItem[]
  longTagList: ListItem[]
}

export default class TagPage extends React.Component<any, TagPageState> {
  public constructor(props: any) {
    super(props)

    this.state = {
      tagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: true },
        { name: '标签3', active: false },
        { name: '标签4', active: true }
      ],
      longTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: true },
        { name: '标签3', active: false },
        { name: '标签4', active: true },
        { name: '标签5', active: false },
        { name: '标签6', active: true },
        { name: '标签7', active: false },
        { name: '标签8', active: true }
      ]
    }
  }

  private handleClick(data: ListItem): void {
    const { tagList } = this.state
    const findIndex = tagList.findIndex(item => item.name === data.name)

    tagList[findIndex].active = !tagList[findIndex].active
    this.setState({ tagList })
  }

  private handleLongTagClick(data: ListItem): void {
    const { longTagList } = this.state
    const findIndex = longTagList.findIndex(item => item.name === data.name)

    longTagList[findIndex].active = !longTagList[findIndex].active
    this.setState({ longTagList })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Tag 标签'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 常规标签 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>常规标签</View>
            <View className='panel__content'>
              <View
                className='panel__content--example-item'
                style={{ flexDirection: 'row', flexWrap: 'wrap' }}
              >
                {this.state.tagList.map((item, index) => (
                  <AtTag
                    key={`at-tag-${index}`}
                    name={item.name}
                    active={item.active}
                    onClick={this.handleClick.bind(this)}
                  >
                    标签
                  </AtTag>
                ))}
              </View>
            </View>
          </View>
          {/* 小标签 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>小标签</View>
            <View className='panel__content'>
              <View
                className='panel__content--example-item'
                style={{ flexDirection: 'row', flexWrap: 'wrap' }}
              >
                {this.state.tagList.map((item, index) => (
                  <AtTag
                    key={`at-tag-${index}`}
                    name={item.name}
                    size='small'
                    active={item.active}
                    onClick={this.handleClick.bind(this)}
                  >
                    标签
                  </AtTag>
                ))}
              </View>
            </View>
          </View>
          {/* 禁用标签 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>禁用标签</View>
            <View className='panel__content'>
              <View
                className='panel__content--example-item'
                style={{ flexDirection: 'row', flexWrap: 'wrap' }}
              >
                <AtTag
                  disabled
                  name='禁用'
                  onClick={this.handleClick.bind(this)}
                >
                  禁用
                </AtTag>
                <AtTag
                  disabled
                  active
                  name='禁用选中'
                  onClick={this.handleClick.bind(this)}
                >
                  禁用选中
                </AtTag>
              </View>
              <View
                className='panel__content--example-item'
                style={{ flexDirection: 'row', flexWrap: 'wrap' }}
              >
                <AtTag
                  disabled
                  name='禁用'
                  size='small'
                  onClick={this.handleClick.bind(this)}
                >
                  禁用
                </AtTag>
                <AtTag
                  disabled
                  active
                  name='禁用选中'
                  size='small'
                  onClick={this.handleClick.bind(this)}
                >
                  禁用选中
                </AtTag>
              </View>
            </View>
          </View>
          {/* 标签组头部标签 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>标签组头部标签</View>
            <View className='panel__content'>
              <View className='tag-group--bg'>
                <AtTagGroup
                  type='header'
                  data={this.state.tagList}
                  onClick={this.handleClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 标签组头部小标签 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>标签组头部小标签</View>
            <View className='panel__content'>
              <View className='tag-group--bg'>
                <AtTagGroup
                  isWrap
                  size='small'
                  type='header'
                  data={this.state.tagList}
                  onClick={this.handleClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 标签组换行 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>标签组换行</View>
            <View className='panel__content'>
              <View className='tag-group--bg'>
                <AtTagGroup
                  isWrap
                  type='header'
                  data={this.state.longTagList}
                  onClick={this.handleLongTagClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 标签组超出不换行，滚动 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>标签组超出不换行，滚动</View>
            <View className='panel__content'>
              <View className='tag-group--bg'>
                <AtTagGroup
                  scrollX
                  type='header'
                  data={this.state.longTagList}
                  onClick={this.handleLongTagClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 标签组表单 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>标签组表单</View>
            <View className='panel__content'>
              <View className='tag-group--bg'>
                <AtTagGroup
                  isWrap
                  data={this.state.longTagList}
                  onClick={this.handleLongTagClick.bind(this)}
                />
                <View className='red'>标签组下面的内容</View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
