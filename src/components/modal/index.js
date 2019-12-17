import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Button, Text } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import _isFunction from 'lodash/isFunction'

import AtModalHeader from './header/index'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtComponent from '../../common/component'
import { handleTouchScroll } from '../../common/utils'

export default class AtModal extends AtComponent {
  constructor (props) {
    super(...arguments)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  handleClickOverlay = () => {
    if (this.props.closeOnClickOverlay) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose
      )
    }
  }

  handleClose = () => {
    if (_isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  handleCancel = () => {
    if (_isFunction(this.props.onCancel)) {
      this.props.onCancel()
    }
  }

  handleConfirm = () => {
    if (_isFunction(this.props.onConfirm)) {
      this.props.onConfirm()
    }
  }

  handleTouchMove = e => {
    e.stopPropagation()
  }

  render () {
    const { _isOpened, isWEB } = this.state
    const { title, content, cancelText, confirmText } = this.props
    const rootClass = classNames(
      'at-modal',
      {
        'at-modal--active': _isOpened
      },
      this.props.className
    )

    if (title || content) {
      const isRenderAction = cancelText || confirmText
      return (
        <View className={rootClass}>
          <View
            onClick={this.handleClickOverlay}
            className='at-modal__overlay'
          />
          <View className='at-modal__container'>
            {title && (
              <AtModalHeader>
                <Text>{title}</Text>
              </AtModalHeader>
            )}
            {content && (
              <AtModalContent>
                <View className='content-simple'>
                  { isWEB ? <Text dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}></Text> : <Text>{content}</Text> }
                </View>
              </AtModalContent>
            )}
            {isRenderAction && (
              <AtModalAction isSimple>
                {cancelText && (
                  <Button onClick={this.handleCancel}>{cancelText}</Button>
                )}
                {confirmText && (
                  <Button onClick={this.handleConfirm}>{confirmText}</Button>
                )}
              </AtModalAction>
            )}
          </View>
        </View>
      )
    }

    return (
      <View onTouchMove={this.handleTouchMove} className={rootClass}>
        <View className='at-modal__overlay' onClick={this.handleClickOverlay} />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}

AtModal.defaultProps = {
  closeOnClickOverlay: true
}

AtModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  content: PropTypes.string,
  closeOnClickOverlay: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
}
