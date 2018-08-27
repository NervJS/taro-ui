import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import './index.scss'

export default class AtList extends Component {
  render () {
    const rootClass = ['at-list']

    if (!this.props.hasBorder) {
      rootClass.push('at-list--no-border')
    }
    return <View className={rootClass}>{this.props.children}</View>
  }
}

AtList.defaultProps = {
  hasBorder: true
}

AtList.propTypes = {
  hasBorder: PropTypes.bool
}
