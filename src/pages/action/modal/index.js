/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import AtButton from '../../../components/button/index'
import AtModal from '../../../components/modal/index'
import AtModalHeader from '../../../components/modal/header/index'
import AtModalContent from '../../../components/modal/content/index'
import AtModalAction from '../../../components/modal/action/index'

import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ModalPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false
    }
  }

  handleClick = e => {
    const state = Object.assign({ isOpened: true }, e.currentTarget.dataset)
    this.setState(state)
  }

  closeModal = () => {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='page'>
        <DocsHeader title='Modal 模态框'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick}>打开Modal</AtButton>
              </View>
            </View>
          </View>
        </View>

        <AtModal isOpened={isOpened}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal}>取消</Button>
            <Button className='serious-button' onClick={this.closeModal}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
