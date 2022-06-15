import React from 'react'
import {
  AtInput,
  AtForm,
  AtFormItem,
  AtIcon,
  AtButton,
  AtInputGroup
} from 'tiga-ui'
import { View } from '@tarojs/components'
import { useForm } from 'rc-field-form'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const Index: React.FC = () => {
  const [form] = useForm()
  const groupConfig = [
    { value: '', label: '室' },
    { value: '', label: '厅' },
    { value: '', label: '卫' }
  ]
  const handleInput2 = e => {}
  const handleInput = e => {}
  const keybord = () => {}
  const onSubmit = () => {
    form
      .validateFields()
      .then(values => {
        // eslint-disable-next-line
        console.log(values)
      }) // Do nothing about submit catch
      .catch(e => e)
  }
  const testClick = () => {
    // alert('testClick')
  }
  return (
    <View className='page'>
      {/* S Header */}
      <DocsHeader title='Input 输入框'></DocsHeader>
      {/* E Header */}

      {/* S Body */}
      <View className='doc-body'>
        <View className='doc-body--panel'>
          <View className='panel__title'>基础</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm
                // form={form}
                hasFeedback
                layout='horizontal'
                requiredMarkStyle='asterisk'
              >
                <AtFormItem name='base' label='标'>
                  <AtInput
                    placeholder='请输入'
                    onChange={handleInput}
                    onKeyboardHeightChange={keybord}
                  />
                </AtFormItem>
                <AtFormItem name='base2' label='标题' help>
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
                <AtFormItem name='clear' label='带清除'>
                  <AtInput
                    placeholder='请输入'
                    onChange={handleInput}
                    clearable
                  />
                </AtFormItem>
                <AtFormItem name='disable' label='禁用' disabled>
                  <AtInput
                    placeholder='请输入'
                    onChange={handleInput}
                    disabled
                  />
                </AtFormItem>
                <AtFormItem
                  name='check'
                  label='校验'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>文本输入+自定义</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm
                // form={form}
                hasFeedback
                layout='horizontal'
                requiredMarkStyle='asterisk'
              >
                <AtFormItem
                  name='icon1'
                  label='校验'
                  rules={[{ required: true, message: '输入不能为空' }]}
                  extra={
                    <AtIcon
                      className='at-input-icon'
                      value='comm_icon_question_circle_line'
                      size={16}
                    />
                  }
                >
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
                <AtFormItem
                  name='icon2'
                  label='标题'
                  rules={[{ required: true, message: '输入不能为空' }]}
                  extra={
                    <AtIcon
                      className='at-input-icon'
                      value='comm_icon_question_circle_line'
                      size={24}
                    />
                  }
                >
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
                <AtFormItem
                  name='button'
                  label='标题'
                  rules={[{ required: true, message: '输入不能为空' }]}
                  extra={
                    <View className='form_item_extra_button'>
                      <AtButton
                        size='small'
                        type='secondary'
                        onClick={testClick}
                      >
                        功能按钮
                      </AtButton>
                    </View>
                  }
                >
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
                <AtFormItem
                  name='unit1'
                  label='标题'
                  rules={[{ required: true, message: '输入不能为空' }]}
                  extra={<View className=''>万元</View>}
                >
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
                <AtFormItem
                  name='unit2'
                  label='标题'
                  rules={[{ required: true, message: '输入不能为空' }]}
                  help={<View className='form_item_prefix_unit'>¥</View>}
                >
                  <AtInput placeholder='请输入' onChange={handleInput} />
                </AtFormItem>
              </AtForm>
              {/* <AtInput
                title='单独'
                placeholder='请输入'
                onChange={handleInput}
                iconName='comm_icon_question_circle_line'
              />
              <AtInputGroup                 title='单独用' config={groupConfig} onChange={handleInput2} /> */}
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>组合</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm
                form={form}
                hasFeedback
                layout='horizontal'
                requiredMarkStyle='asterisk'
                footer={
                  <AtButton
                    formType='submit'
                    type='primary'
                    size='full'
                    onClick={onSubmit}
                  >
                    提交
                  </AtButton>
                }
              >
                <AtFormItem name='address' label='标题'>
                  <AtInputGroup config={groupConfig} onChange={handleInput2} />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
      </View>

      {/* E Body */}
    </View>
  )
}

export default Index
