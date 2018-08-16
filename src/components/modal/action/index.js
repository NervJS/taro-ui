import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import './index.scss'

export default class AtModalAction extends Component {
  render () {
    const rootClass = ['at-modal-footer']

    if (this.props.isSimple) {
      rootClass.push('at-modal-footer--simple')
    }

    return (
      <View className={rootClass}>
        <View className='at-modal-footer__action at-modal-action'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtModalAction.propTypes = {
  isSimple: PropTypes.bool
}
