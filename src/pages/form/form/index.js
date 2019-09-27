import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm, AtButton, AtToast } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class PageForm extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      value2: '',
      text: '',
      isOpened: false
    }
  }
  handleInput (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }
  formSubmit () {
    const { value1, value2 } = this.state
    if (!value1 || !value2) {
      this.setState({
        isOpened: true,
        text: `表单未填写完整`
      })
    } else {
      this.setState({
        isOpened: true,
        text: `文本：${this.state.value1}  密码：${this.state.value2}`
      })
    }
    this.closeToast()
  }

  closeToast () {
    setTimeout(() => {
      this.setState({
        isOpened: false,
      })
    }, 2000)
  }
  handleReset () {
    this.setState({
      isOpened: true,
      text: `表单已被重置`,
      value1: '',
      value2: ''
    })
    this.closeToast()
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='Form 表单'></DocsHeader>
        <View className='doc-body'>
          {/* 表单提交与重置 */}
          <View className='panel'>
            <View className='panel__title'>表单提交与重置</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm
                  onSubmit={this.formSubmit.bind(this)}
                  onReset={this.handleReset.bind(this)}
                >
                  <AtInput name='value1' title='文本' type='text' placeholder='单行文本' value={this.state.value1} onChange={this.handleInput.bind(this, 'value1')} />
                  <AtInput name='value2' title='密码' type='password' placeholder='请输入密码' value={this.state.value2} onChange={this.handleInput.bind(this, 'value2')} />
                  <View className='component-item__btn-group'>
                    <View className='component-item__btn-group__btn-item'>
                      <AtButton type='primary' formType='submit'>提交</AtButton>
                    </View>
                    <View className='component-item__btn-group__btn-item'>
                      <AtButton formType='reset'>重置</AtButton>
                    </View>
                  </View>
                </AtForm>
              </View>
            </View>
          </View>
        </View>
        <AtToast text={this.state.text} isOpened={this.state.isOpened}></AtToast>
      </View>
    )
  }
}
