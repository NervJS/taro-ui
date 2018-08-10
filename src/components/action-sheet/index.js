/* eslint-disable taro/function-naming */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import AtActionSheetBody from './body/index'
import AtActionSheetHeader from './header/index'
import AtActionSheetFooter from './footer/index'

import './index.scss'

export default class AtActionSheet extends Component {
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

      !isOpened && this.handleClose()
    }
  }

  handleClose = () => {
    if (_isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  handleCancle = () => {
    if (_isFunction(this.props.onCancle)) {
      return this.props.onCancle()
    }
    this.close()
  }

  close = () => {
    this.setState({
      isOpened: false
    })

    this.handleClose()
  }

  render () {
    const { title, cancleText } = this.props
    const { isOpened } = this.state

    const rootClassNames = ['at-action-sheet']

    if (isOpened) {
      rootClassNames.push('at-action-sheet--active')
    }

    return (
      <View className={rootClassNames}>
        <View onClick={this.close} className='at-action-sheet__overlay' />
        <View className='at-action-sheet__container'>
          {title && <AtActionSheetHeader>{title}</AtActionSheetHeader>}
          <AtActionSheetBody>{this.props.children}</AtActionSheetBody>
          {cancleText && (
            <AtActionSheetFooter onClick={this.handleCancle}>
              {cancleText}
            </AtActionSheetFooter>
          )}
        </View>
      </View>
    )
  }
}

AtActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancle: PropTypes.func,
  cancleText: PropTypes.string
}
