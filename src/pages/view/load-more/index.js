import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtLoadMore } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class LoadMorePage extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      status: 'more'
    }
  }

  handleClick () {
    this.setState({
      status: 'loading'
    })
    setTimeout(() => {
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='LoadMore 页面提示'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content no-padding'>
              <AtLoadMore onClick={this.handleClick.bind(this)} status={this.state.status} />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
