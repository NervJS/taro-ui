/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Modal from '../../../components/modal'

import './index.scss'

export default class ModalPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Modal Page'
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

  render () {
    const { isOpened } = this.state
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
        <Modal isOpened={isOpened}>
          <Modal.Header>
            <Text>这是标题知道吧</Text>
          </Modal.Header>
          <Modal.Content>
            <View>这是内容知道吧</View>
          </Modal.Content>
          <Modal.Action>
            <Modal.Action.Button>取消</Modal.Action.Button>
            <Modal.Action.Button>确认</Modal.Action.Button>
          </Modal.Action>
        </Modal>
      </View>
    )
  }
}
