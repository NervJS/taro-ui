import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import './index.scss'

export default class AtActionSheetFooter extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      isIPhoneX: false
    }
  }

  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  componentDidMount () {
    const { model = '' } = Taro.getSystemInfoSync()
    const curEnv = Taro.getEnv()

    if (curEnv === Taro.ENV_TYPE.WEAPP && model.indexOf('iPhone X') >= 0) {
      this.setState({ isIPhoneX: true })
    }
  }

  render () {
    const { isIPhoneX } = this.state
    const footerClassName = isIPhoneX ? 'at-action-sheet-footer at-action-sheet-footer--ipx' : 'at-action-sheet-footer'

    return (
      <View className={footerClassName} onClick={this.handleClick}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
