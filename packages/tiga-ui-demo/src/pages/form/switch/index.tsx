import React from 'react'
import { AtButton, AtForm, AtFormItem, AtSwitch } from 'tiga-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useForm } from 'rc-field-form'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const Index: React.FC = () => {
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
    <View className='page switch-page'>
      {/* S Header */}
      <DocsHeader title='Switch 开关'></DocsHeader>
      {/* E Header */}

      {/* S Body */}
      <View className='doc-body'>
        <View className='doc-body--panel'>
          <View className='panel__title'>基础</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtSwitch />
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>默认选中</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtSwitch checked />
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>自定义样式</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtSwitch color='#04be02' />
            </View>
            {Taro.getEnv() === 'RN' && (
              <View className='example-item'>
                <AtSwitch
                  duration={350}
                  switchWidth={80}
                  switchPadding={1}
                  buttonWidth={35}
                  buttonColor='yellow'
                  backgroundColor='#e9e9e9'
                />
              </View>
            )}
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>禁用</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtSwitch checked disabled />
            </View>
            <View className='example-item'>
              <AtSwitch disabled />
            </View>
          </View>
        </View>
        <View className='doc-body--panel'>
          <View className='panel__title'>与表单结合</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm>
                <AtFormItem name='activity1' label='活动1开启'>
                  <AtSwitch />
                </AtFormItem>
              </AtForm>
            </View>
            <View className='example-item'>
              <AtForm
                layout='horizontal'
                form={form}
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
                  name='activity2'
                  label={<View className='switch-page__active'>活动2开启</View>}
                >
                  <AtSwitch />
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
