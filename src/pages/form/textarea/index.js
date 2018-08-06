import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTextarea from '../../../components/textarea/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      textareaValue: ''
    }
  }
  handleChange (e) {
    this.setState({
      textareaValue: e.target.value
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
                  value={this.state.textareaValue}
                  onChange={this.handleChange.bind(this)}
                  maxlength='200'
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
                  value={this.state.textareaValue}
                  onChange={this.handleChange.bind(this)}
                  maxlength='200'
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
