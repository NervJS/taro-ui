import Taro from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import {
  AtButton,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtIndexes
} from 'taro-ui'

import DocsHeader from '../../components/doc-header'

import mockData from '../../navigation/indexes/mock-data'

import './index.scss'

export default class ModalPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
      isOpened5: false,
      isOpened6: false
    }
  }

  handleClick = type => {
    this.setState({
      [`isOpened${type}`]: true
    })
  }

  closeModal = (type, msg) => {
    console.log(msg)
    this.setState({
      [`isOpened${type}`]: false
    })

    Taro.showToast({
      icon: 'none',
      title: msg
    })
  }

  closeModalConfirm = (type, msg) => {
    this.setState({
      [`isOpened${type}`]: false
    })

    Taro.showToast({
      icon: 'none',
      title: msg
    })
  }

  render () {
    const { isOpened1, isOpened2, isOpened3, isOpened4, isOpened5, isOpened6 } = this.state

    return (
      <View className='page'>
        <DocsHeader title='Modal 模态框' />

        <View className='doc-body'>
          {/* 基础模态框 */}
          <View className='panel'>
            <View className='panel__title'>基础模态框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 1)}>
                  打开基础模态框
                </AtButton>
              </View>
            </View>
          </View>

          {/* 单个按钮 */}
          <View className='panel'>
            <View className='panel__title'>单个按钮</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 2)}>
                  打开单个按钮模态框
                </AtButton>
              </View>
            </View>
          </View>

          {/* 无标题 */}
          <View className='panel'>
            <View className='panel__title'>无标题</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 3)}>
                  打开无标题模态框
                </AtButton>
              </View>
            </View>
          </View>

          {/* 简化使用 */}
          <View className='panel'>
            <View className='panel__title'>简化使用</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 4)}>
                  打开简化使用模态框
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>打开popup</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 6)}>
                  打开popup
                </AtButton>
              </View>
            </View>
          </View>

          {/* 城市索引 */}
          <View className='panel'>
            <View className='panel__title'>城市索引</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 5)}>
                  打开城市索引
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        {/* 基础模态框 */}
        <AtModal
          isOpened={isOpened1}
          onClose={this.closeModal.bind(this, 1, 'Modal被关闭了')}
        >
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 1, '点击了取消')}>
              取消
            </Button>
            <Button onClick={this.closeModal.bind(this, 1, '点击了确定')}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        {/* 单个按钮 */}
        <AtModal
          isOpened={isOpened2}
          onClose={this.closeModal.bind(this, 2, 'Modal被关闭了')}
        >
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 2, '点击了确定')}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        {/* 无标题 */}
        <AtModal
          isOpened={isOpened3}
          onClose={this.closeModal.bind(this, 3, 'Modal被关闭了')}
        >
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 3, '点击了取消')}>
              取消
            </Button>
            <Button onClick={this.closeModal.bind(this, 3, '点击了确定')}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        {/* 简化使用 */}
        <AtModal
          isOpened={isOpened4}
          title='标题'
          cancelText='取消'
          confirmText='确认'
          content='欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室'
          onClose={this.closeModal.bind(this, 4, 'Modal被关闭了')}
          onCancel={this.closeModal.bind(this, 4, '点击了取消')}
          onConfirm={this.closeModalConfirm.bind(this, 4, '点击了确认')}
        />

        {/* Popup */}
        <AtModal
          popup
          animationType='slide-up'
          isOpened={isOpened6}
          cancelText='取消'
          confirmText='确认'
          onClose={this.closeModal.bind(this, 6, 'Modal被关闭了')}
          onCancel={this.closeModal.bind(this, 6, '点击了取消')}
          onConfirm={this.closeModalConfirm.bind(this, 6, '点击了确认')}
        >
          <AtModalHeader>完善信息</AtModalHeader>
          <AtModalContent>
            <View className='modal-content' style='display:flex; margin:5px;'>
              <Text style='height:30px; line-height:30px; width:50px; '>姓名:</Text>
              <Input style='height:30px; line-height:30px; border:1px solid #ddd; margin-left:20px;' />
            </View>
            <View className='modal-content' style='display:flex; margin:5px;'>
              <Text style='height:30px; line-height:30px; width:50px;'>呢称:</Text>
              <Input style='height:30px; line-height:30px; border:1px solid #ddd; margin-left:20px;' />
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 6, '点击了确定')}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>


        <AtModal isOpened={isOpened5}>
          <AtModalContent>
            <AtIndexes list={mockData} topKey='Top'>
              <View className='custom-area'>用户自定义内容</View>
            </AtIndexes>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}
