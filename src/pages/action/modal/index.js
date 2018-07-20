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
    const state = Object.assign({}, e.currentTarget.dataset)
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
            <Button data-open onClick={this.handleClick}>
              打开Modal
            </Button>
          </View>
        </View>
        <Modal open={open}>
          <Modal.Header>
            <Text>这是标题知道吧</Text>
          </Modal.Header>
          <Modal.Body>
            <View>这是内容知道吧</View>
          </Modal.Body>
        </Modal>
      </View>
    )
  }
}
