import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtTextarea } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }

  handleChange (stateName, e) {
    this.setState({
      [stateName]: e.target.value
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Textarea 多行文本框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTextarea
                  value={this.state.value1}
                  onChange={this.handleChange.bind(this, 'value1')}
                  maxLength={200}
                  placeholder='你的问题是...'
                />
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>不显示字数</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTextarea
                  count={false}
                  value={this.state.value2}
                  onChange={this.handleChange.bind(this, 'value2')}
                  maxLength={200}
                  placeholder='你的问题是...'
                />
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>文字超出仍可输入</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTextarea
                  textOverflowForbidden={false}
                  value={this.state.value3}
                  onChange={this.handleChange.bind(this, 'value3')}
                  maxLength={200}
                  placeholder='你的问题是...'
                />
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>自定义高度</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTextarea
                  height='300'
                  value={this.state.value4}
                  onChange={this.handleChange.bind(this, 'value4')}
                  maxLength={200}
                  placeholder='你的问题是...'
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
