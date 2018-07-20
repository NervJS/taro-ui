import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import ModalBody from './body/index'
import ModalHeader from './header/index'

import './index.scss'

export default class Modal extends Taro.Component {
  constructor (props) {
    super(...arguments)
    const { open } = props
    this.state = {
      open
    }
  }

  static Body = ModalBody
  static Header = ModalHeader

  componentWillReceiveProps (nextProps) {
    const { open } = nextProps
    if (open != this.state.open) {
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
    const { children, buttons } = this.props
    return open ? (
      <View className='at-modal'>
        <View className='at-modal__overlay' onClick={this.handleClickOverlay} />
        <View className='at-modal__container'>
          {children}
          <View className='at-modal__container-footer at-footer' />
          <View className='at-footer__actions'>
            {buttons.map((item, key) => (
              <Button key={key} className='at-button'>
                {item.name}
              </Button>
            ))}
          </View>
        </View>
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
