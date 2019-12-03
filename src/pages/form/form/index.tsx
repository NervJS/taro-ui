import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtCheckbox, AtForm, AtButton, AtToast } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import { CheckboxOption } from 'types/checkbox'
import './index.scss'

interface PageFormState {
  value1: string
  value2: string
  value3: CheckboxOption<string>[]
  text: string
  isOpened: boolean
  [key: string]: string | boolean | CheckboxOption<string>[]
}

export default class PageForm extends Taro.Component<{}, PageFormState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      value2: '',
      value3: [],
      text: '',
      isOpened: false
    }
  }

  private handleChange (stateName: string, value: any): void {
    this.setState({
      [stateName]: value
    })
  }

  private handleSubmit (): void {
    const { value1, value2, value3 } = this.state
    if (!value1 || !value2 || value3.length < 1) {
      this.setState({
        isOpened: true,
        text: `表单未填写完整`
      })
    } else {
      this.setState({
        isOpened: true,
        text: `${value1} / ${value2} / ${value3.join(',')}`
      })
    }
    this.closeToast()
  }

  private closeToast (): void {
    setTimeout(() => {
      this.setState({
        isOpened: false,
      })
    }, 2000)
  }

  private handleReset (): void {
    this.setState({
      isOpened: true,
      text: `表单已被重置`,
      value1: '',
      value2: '',
      value3: []
    })
    this.closeToast()
  }

  public render (): JSX.Element {
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
                  onSubmit={this.handleSubmit.bind(this)}
                  onReset={this.handleReset.bind(this)}
                >
                  <AtInput name='value1' title='文本' type='text' placeholder='单行文本' value={this.state.value1} onChange={this.handleChange.bind(this, 'value1')} />
                  <AtInput name='value2' title='密码' type='password' placeholder='请输入密码' value={this.state.value2} onChange={this.handleChange.bind(this, 'value2')} />
                  <AtCheckbox
                    options={[
                      { label: 'iPhone X', value: 'iPhone X' },
                      { label: 'HUAWEI P20', value: 'HUAWEI P20' }
                    ]}
                    selectedList={this.state.value3}
                    onChange={this.handleChange.bind(this, 'value3')}
                  />
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
