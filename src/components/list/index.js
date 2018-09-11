import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtComponent from '../../common/component'

import './index.scss'

export default class AtList extends AtComponent {
  render () {
    const rootClass = ['at-list']

    if (!this.props.hasBorder) {
      rootClass.push('at-list--no-border')
    }
    return <View className={this.getClassName(rootClass, this.props.className)}>{this.props.children}</View>
  }
}

AtList.defaultProps = {
  hasBorder: true
}

AtList.propTypes = {
  hasBorder: PropTypes.bool
}
