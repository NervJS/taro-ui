import React from 'react'
import { AtTextarea, AtForm, AtFormItem } from 'tiga-ui'
import { View } from '@tarojs/components'
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
    <View className='page'>
      {/* S Header */}
      <DocsHeader title='Textarea 多行文本框'></DocsHeader>
      {/* E Header */}

      {/* S Body */}
      <View className='doc-body'>
        <View className='doc-body--panel'>
          <View className='panel__title'>基础</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem name='remark' label='备注'>
                  <AtTextarea placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>无标题</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem name='remark'>
                  <AtTextarea placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>输入校验</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem
                  name='address'
                  label='地址'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <AtTextarea
                    textOverflowForbidden
                    maxLength={60}
                    placeholder='请输入'
                  />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>图标和标题操作区</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem help name='remark' label='备注' tail='案例'>
                  <AtTextarea placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>不展示字数统计</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem name='remark' label='备注'>
                  <AtTextarea count={false} placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>文字超出不可输入</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem name='remark' label='备注'>
                  <AtTextarea
                    textOverflowForbidden
                    maxLength={60}
                    placeholder='请输入'
                  />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>自定义高度</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem name='address' label='地址'>
                  <AtTextarea
                    height='300'
                    maxLength={200}
                    placeholder='请输入'
                  />
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
