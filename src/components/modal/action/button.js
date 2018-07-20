import Taro from '@tarojs/taro'
import { Button } from '@tarojs/components'

import _isFunction from 'lodash/isFunction'

import './index.scss'

export default class ModalButton extends Taro.Component {
  constructor() {
    super(...arguments)
  }

  handleClick = () => {
    const { onClick } = this.props
    _isFunction(onClick) && onClick()
  }

  render() {
    const { children } = this.props
    return (
      <Button className='at-modal-action__button' onClick={this.handleClick}>
        {children}
      </Button>
    )
  }
}
