/* eslint-disable taro/function-naming */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtActionSheetBody from './body/index'
import AtActionSheetHeader from './header/index'
import AtActionSheetFooter from './footer/index'

import './index.scss'

export default class AtActionSheet extends Component {
  constructor (props) {
    super(...arguments)
    const { isOpened } = props
    this.state = {
      isOpened
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    if (isOpened !== this.state.isOpened) {
      this.setState({
        isOpened
      })
    }
  }

  close = () => {
    this.setState({
      isOpened: false
    })
  }

  open = () => {
    this.setState({
      isOpened: true
    })
  }

  render () {
    const { title, cancleText } = this.props
    const { isOpened } = this.state

    return isOpened ? (
      <View className='at-action-sheet'>
        <View onClick={this.close} className='at-action-sheet__overlay' />
        <View className='at-action-sheet__container'>
          <AtActionSheetHeader>{title}</AtActionSheetHeader>
          <AtActionSheetBody>{this.props.children}</AtActionSheetBody>
          <AtActionSheetFooter onClick={this.close}>
            {cancleText}
          </AtActionSheetFooter>
        </View>
      </View>
    ) : null
  }
}
