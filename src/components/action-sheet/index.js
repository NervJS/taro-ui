import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtActionSheetBody from './body'
import AtActionSheetHeader from './header'
import AtActionSheetFooter from './footer'

import './index.scss'

export default class AtActionSheet extends Taro.Component {
  static Body = AtActionSheetBody
  static Header = AtActionSheetHeader
  static Footer = AtActionSheetFooter

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

  _open () {
    this.setState({
      isOpened: true
    })
  }

  handleClickOverlay = () => {
    this._close()
  }

  render () {
    const { children } = this.props
    const { isOpened } = this.state

    if (children) {
      const index = children.findIndex(
        item => item.name === 'AtActionSheetFooter'
      )

      if (index === -1) return

      children[index].props = Object.assign(
        {
          $$close: this._close.bind(this),
          $$open: this._open.bind(this)
        },
        children[index].props
      )
    }

    return isOpened ? (
      <View className='at-action-sheet'>
        <View
          onClick={this.handleClickOverlay}
          className='at-action-sheet__overlay'
        />
        <View className='at-action-sheet__container'>{children}</View>
      </View>
    ) : null
  }
}
