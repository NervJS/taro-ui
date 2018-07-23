/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Modal from '../../../components/modal/index'

import './index.scss'

export default class ModalPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Modal Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      open: true
    }
  }

  handleClick = e => {
    const state = Object.assign({ isOpen: true }, e.currentTarget.dataset)
    this.setState(state)
  }

  render () {
    const { open } = this.state
    return (
      <View className='action-sheet__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <Button onClick={this.handleClick}>打开Modal</Button>
          </View>
        </View>
        <Modal open={open}>
          <Modal.Header>
            <Text>这是标题知道吧</Text>
          </Modal.Header>
          <Modal.Content>
            <View>这是内容知道吧</View>
          </Modal.Content>
          <Modal.Action>
            <Modal.Action.Button onClick={console.log.bind(this, 1)}>
              取消
            </Modal.Action.Button>
            <Modal.Action.Button>确认</Modal.Action.Button>
          </Modal.Action>
        </Modal>
      </View>
    )
  }
}
