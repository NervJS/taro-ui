import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import AtActionSheetBody from './body/index'
import AtActionSheetHeader from './header/index'
import AtActionSheetFooter from './footer/index'

import AtComponent from '../../common/component'

import './index.scss'

export default class AtActionSheet extends AtComponent {
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

      !isOpened && this.handleClose()
    }
  }

  handleClose = () => {
    if (_isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  handleCancel = () => {
    if (_isFunction(this.props.onCancel)) {
      return this.props.onCancel()
    }
    this.close()
  }

  close = () => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }

  handleTouchMove = e => {
    e.stopPropagation()
  }

  render () {
    const { title, cancelText } = this.props
    const { _isOpened } = this.state

    const rootClassNames = ['at-action-sheet']

    if (_isOpened) {
      rootClassNames.push('at-action-sheet--active')
    }

    return (
      <View
        onTouchMove={this.handleTouchMove}
        className={this.getClassName(rootClassNames, this.props.className)}
      >
        <View onClick={this.close} className='at-action-sheet__overlay' />
        <View className='at-action-sheet__container'>
          {title && <AtActionSheetHeader>{title}</AtActionSheetHeader>}
          <AtActionSheetBody>{this.props.children}</AtActionSheetBody>
          {cancelText && (
            <AtActionSheetFooter onClick={this.handleCancel}>
              {cancelText}
            </AtActionSheetFooter>
          )}
        </View>
      </View>
    )
  }
}

AtActionSheet.defaultProps = {
  isOpened: false,
  onClose: () => {},
  onCancel: () => {}
}

AtActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  isOpened: PropTypes.bool,
  cancelText: PropTypes.string
}
