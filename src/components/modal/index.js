import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import ModalHeader from './header/index'
import ModalAction from './action/index'
import ModalContent from './content/index'

import './index.scss'

export default class Modal extends Taro.Component {
  constructor (props) {
    super(...arguments)
    const { open } = props
    this.state = {
      open
    }
  }

  static Content = ModalContent
  static Header = ModalHeader
  static Action = ModalAction

  componentWillReceiveProps (nextProps) {
    const { open } = nextProps
    if (open !== this.state.open) {
      this.setState({
        open
      })
    }
  }

  _close () {
    this.setState({
      open: false
    })
  }

  _open () {
    this.setState({
      open: true
    })
  }

  handleClickOverlay = () => {
    this._close()
  }

  render () {
    const { open } = this.state
    const { children } = this.props
    return open ? (
      <View className='at-modal'>
        <View className='at-modal__overlay' onClick={this.handleClickOverlay} />
        <View className='at-modal__container'>{children}</View>
      </View>
    ) : null
  }
}

Modal.defaultProps = {
  buttons: [
    {
      name: '取消'
    },
    {
      name: '确认'
    }
  ]
}
