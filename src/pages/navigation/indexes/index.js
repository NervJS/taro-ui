import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtIndexes, AtSearchBar } from 'taro-ui'
import mockData from './mock-data'
import './index.scss'

export default class Index extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  onClick () {
    // console.log(item)
  }

  componentDidMount () {
    console.log(this.scrollIntoView)
    // this.scrollIntoView && this.scrollIntoView('top', 0)
  }
  handleActionClick () {
    if (!this.state.value) {
      return
    }
    this.setState({
      value: ''
    })
    this.scrollIntoView && this.scrollIntoView(this.state.value.toUpperCase())
  }
  handleChange (value) {
    this.setState({
      value
    })
  }

  render () {
    return (
      <View className='page' style='height: 100vh;'>
        {/* 基础用法 */}
        <View style='height: 100%;'>
          <AtIndexes
            list={mockData}
            topKey='Top'
            onClick={this.onClick.bind(this)}
            onScrollIntoView={fn => { this.scrollIntoView = fn }}
          >
            <View className='custom-area'>
              用户自定义内容
              <AtSearchBar value={this.state.value} onChange={this.handleChange.bind(this)} placeholder='跳转到指定Key' onActionClick={this.handleActionClick.bind(this)} />
            </View>
          </AtIndexes>
        </View>
      </View>
    )
  }
}
