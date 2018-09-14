import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtModalAction extends AtComponent {
  render () {
    const rootClass = classNames(
      'at-modal-footer',
      {
        'at-modal-footer--simple': this.props.isSimple
      },
      this.props.className
    )

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
