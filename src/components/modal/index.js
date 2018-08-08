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

  render () {
    const { isOpened } = this.state

    const rootClass = ['at-modal']

    if (isOpened) {
      rootClass.push('at-modal--active')
    }

    return (
      <View className={rootClass}>
        <View className='at-modal__overlay' />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}
