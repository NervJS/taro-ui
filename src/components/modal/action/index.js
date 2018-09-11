import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtModalAction extends AtComponent {
  render () {
    const rootClass = ['at-modal-footer']

    if (this.props.isSimple) {
      rootClass.push('at-modal-footer--simple')
    }

    return (
      <View className={this.getClassName(rootClass, this.props.className)}>
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
