import Taro from '@tarojs/taro'
import { Button } from '@tarojs/components'

import _isFunction from 'lodash/isFunction'

import './index.scss'

export default class AtModalButton extends Taro.Component {
  handleClick = () => {
    const { onClick, $$close } = this.props
    if (_isFunction(onClick)) {
      return onClick()
    }
    $$close()
  }

  render () {
    const { children } = this.props
    return (
      <Button className='at-modal-action-button' onClick={this.handleClick}>
        {children}
      </Button>
    )
  }
}
