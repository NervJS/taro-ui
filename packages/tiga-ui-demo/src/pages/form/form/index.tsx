import React from 'react'
import { AtTextarea, AtForm, AtFormItem, AtButton, AtInput } from 'tiga-ui'
import { View, Input } from '@tarojs/components'
import { useForm } from 'rc-field-form'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const Index = () => {
  const [form] = useForm()
  const onSubmit = () => {
    form
      .validateFields()
      .then(values => {
        // eslint-disable-next-line
        console.log(values)
      }) // Do nothing about submit catch
      .catch(e => e)
  }

  return (
    <View className='page page-form'>
      {/* S Header */}
      <DocsHeader title='Form 表单'></DocsHeader>
      {/* E Header */}

      {/* S Body */}
      <View className='doc-body'>
        <View className='doc-body--panel'>
          <View className='panel__title'>基础</View>
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
                <AtFormItem
                  help
                  name='name'
                  label='姓名'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <Input placeholder='请输入' />
                </AtFormItem>
                <AtFormItem
                  help
                  name='idcard'
                  label='身份证号'
                  extra='[ - ]'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <Input placeholder='请输入' />
                </AtFormItem>
                <AtFormItem name='disabled' label='禁用' disabled>
                  <Input placeholder='请输入' />
                </AtFormItem>
                <AtFormItem
                  name='address'
                  label='详细地址'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <AtTextarea placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>垂直布局</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm
                hasFeedback
                layout='vertical'
                requiredMarkStyle='asterisk'
                // footer={
                //   <AtButton formType='submit' type='primary' size='full'>
                //     提交
                //   </AtButton>
                // }
              >
                <AtFormItem
                  help
                  name='subname'
                  label='昵称'
                  tail='操作'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <Input placeholder='请输入' />
                </AtFormItem>
              </AtForm>
              <AtForm
                hasFeedback
                layout='vertical'
                requiredMarkStyle='asterisk'
              >
                <AtFormItem
                  help
                  name='remark'
                  label='备注'
                  tail='案列'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <AtTextarea placeholder='请输入' />
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
