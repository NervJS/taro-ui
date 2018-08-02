/* eslint-disable taro/function-naming */
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtModal extends Taro.Component {
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

  render () {
    const { isOpened } = this.state

    return isOpened ? (
      <View className='at-modal'>
        <View className='at-modal__overlay' onClick={this.close} />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    ) : null
  }
}
