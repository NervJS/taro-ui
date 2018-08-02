import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTextarea from '../../../components/textarea/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'textarea 使用范例'
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
        <View className='doc-header'>
          <View className='doc-header__title'>多行文本框</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础</View>
            <View className='panel__content'>
              <View className='example__body'>
                <View className='item'>
                  <AtTextarea
                    value={this.state.textareaValue}
                    onChange={this.handleChange.bind(this)}
                    autoFocus
                    maxlength='200'
                    placeholder='你的问题是...'
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
