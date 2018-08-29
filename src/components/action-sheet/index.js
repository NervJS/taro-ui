import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtActionSheetBody from './body/index'
import AtActionSheetHeader from './header/index'
import AtActionSheetFooter from './footer/index'

import AtComponent from '../../common/component'

import './index.scss'

export default class AtActionSheet extends AtComponent {
  static options = {
    externalClasses: ['my-class']
  }

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
    if (this.isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  handleCancle = () => {
    if (this.isFunction(this.props.onCancle)) {
      return this.props.onCancle()
    }
    this.close()
  }

  close = () => {
    this.setState(
      {
        isOpened: false
      },
      this.handleClose
    )
  }

  handleTouchMove = e => {
    e.stopPropagation()
  }

  render () {
    const { title, cancleText } = this.props
    const { isOpened } = this.state

    const rootClassNames = ['at-action-sheet']

    if (isOpened) {
      rootClassNames.push('at-action-sheet--active')
    }

    return (
      <View className={rootClassNames} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='at-action-sheet__overlay my-class' />
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

AtActionSheet.defaultProps = {
  isOpened: false
}

AtActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancle: PropTypes.func,
  isOpened: PropTypes.bool,
  cancleText: PropTypes.string
}
