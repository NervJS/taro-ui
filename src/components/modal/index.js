import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtModalHeader from './header/index'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtComponent from '../../common/component'

import './index.scss'

export default class AtModal extends AtComponent {
  constructor (props) {
    super(...arguments)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  handleTouchMove = e => {
    e.stopPropagation()
  }

  render () {
    const { _isOpened } = this.state
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
        <View className={rootClass} onTouchMove={this.handleTouchMove}>
          <View className='at-modal__overlay' />
          <View className='at-modal__container'>
            {title && (
              <AtModalHeader>
                <Text>{title}</Text>
              </AtModalHeader>
            )}
            {content && (
              <AtModalContent>
                <View className='content-simple'>
                  <Text>{content}</Text>
                </View>
              </AtModalContent>
            )}
            {isRenderAction && (
              <AtModalAction isSimple>
                {cancelText && (
                  <Button onClick={this.props.onCancel}>{cancelText}</Button>
                )}
                {confirmText && (
                  <Button onClick={this.props.onConfirm}>{confirmText}</Button>
                )}
              </AtModalAction>
            )}
          </View>
        </View>
      )
    }

    return (
      <View
        onTouchMove={this.handleTouchMove}
        className={this.getClassName(rootClass, this.props.className)}
      >
        <View className='at-modal__overlay' />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}

AtModal.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  content: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
}
