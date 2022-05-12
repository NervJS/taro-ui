import React from 'react'
import { AtTextarea, AtForm, AtFormItem, AtButton } from 'tiga-ui'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useForm } from 'rc-field-form'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const Index = () => {
  const [form] = useForm()
  const onSubmit = () => {
    form
      .validateFields()
      .then(values => {
        // console.log(values)
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
                  label='详细居住地址（精确到门牌号）'
                  rules={[{ required: true, message: '输入不能为空' }]}
                >
                  <AtTextarea placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View>
        {/* <View className='doc-body--panel'>
          <View className='panel__title'>FormItem</View>
          <View className='panel__content'>
            <View className='example-item'>
              <AtForm
                layout='vertical'
                hasFeedback
                requiredMarkStyle='asterisk'
              >
                <AtFormItem
                  name='address'
                  label='详细地址'
                  rules={[{ required: true, message: '输入不能为空' }]}
                  // extra={<View>发送验证码</View>}
                >
                  <AtTextarea placeholder='请输入' />
                </AtFormItem>
              </AtForm>
            </View>
          </View>
        </View> */}
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
                  onHelpClick={() => Taro.showToast({ title: '点击帮助icon' })}
                  onTailClick={() => Taro.showToast({ title: '点击操作区' })}
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

// const FormPage = () => {
//   return (
//     <>
//       <DemoBlock title='配合列表使用（上下布局）' padding='0' border='none'>
//         <Form layout='vertical'>
//           <Form.Item label='用户名' name='username'>
//             <Input placeholder='请输入用户名' clearable />
//           </Form.Item>
//           <Form.Item label='密码' name='password'>
//             <Input placeholder='请输入密码' clearable type='password' />
//           </Form.Item>
//         </Form>
//       </DemoBlock>

//       <DemoBlock title='配合列表使用（左右布局）' padding='0' border='none'>
//         <Form layout='horizontal'>
//           <Form.Item label='用户名' name='username'>
//             <Input placeholder='请输入用户名' clearable />
//           </Form.Item>
//           <Form.Item label='密码' name='password'>
//             <Input placeholder='请输入密码' clearable type='password' />
//           </Form.Item>
//         </Form>
//       </DemoBlock>

//       <DemoBlock title='额外的操作按钮' padding='0' border='none'>
//         <Form layout='horizontal'>
//           <Form.Item
//             label='短信验证码'
//             extra={
//               <div className={styles.extraPart}>
//                 <a>发送验证码</a>
//               </div>
//             }
//           >
//             <Input placeholder='请输入验证码' clearable />
//           </Form.Item>
//         </Form>
//       </DemoBlock>
//     </>
//   )
// }
