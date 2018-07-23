import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtModalHeader from './header'
import AtModalAction from './action'
import AtModalContent from './content'

import './index.scss'

export default class AtModal extends Taro.Component {
  static Content = AtModalContent
  static Header = AtModalHeader
  static Action = AtModalAction

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

  _close () {
    this.setState({
      isOpened: false
    })
  }

  _isOpened () {
    this.setState({
      isOpened: true
    })
  }

  handleClickOverlay = () => {
    this._close()
  }

  render () {
    const { isOpened } = this.state
    const { children } = this.props

    if (children) {
      const index = children.findIndex(item => item.name === 'AtModalFooter')

      if (index === -1) return

      children[index].props = Object.assign(
        {
          $$close: this._close.bind(this)
        },
        children[index].props
      )
    }

    return isOpened ? (
      <View className='at-modal'>
        <View className='at-modal__overlay' onClick={this.handleClickOverlay} />
        <View className='at-modal__container'>{children}</View>
      </View>
    ) : null
  }
}
