import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtActionSheetFooter extends AtComponent {
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
    const curEnv = Taro.getEnv()

    if (
      curEnv === Taro.ENV_TYPE.WEAPP &&
      Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
    ) {
      this.setState({ isIPhoneX: true })
    }
  }

  render () {
    const { isIPhoneX } = this.state

    const rootClass = classNames(
      'at-action-sheet-footer',
      {
        'at-action-sheet-footer--ipx': isIPhoneX
      },
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
