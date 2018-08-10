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
      isOpenedMulti: false,
      isOpenedSingle: false
    }
  }

  handleClick = name => {
    this.setState({
      [`isOpened${name}`]: true
    })
  }

  closeModal = name => {
    this.setState({
      [`isOpened${name}`]: false
    })
  }

  render () {
    const { isOpenedMulti, isOpenedSingle } = this.state
    return (
      <View className='page'>
        <DocsHeader title='Modal 模态框' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>单个按钮</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 'Single')}>
                  打开单按钮Modal
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>多个按钮</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 'Multi')}>
                  打开多按钮Modal
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        <AtModal isOpened={isOpenedMulti}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 'Multi')}>取消</Button>
            <Button
              className='serious-button'
              onClick={this.closeModal.bind(this, 'Multi')}
            >
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        <AtModal isOpened={isOpenedSingle}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 'Single')}>取消</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
