import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../../common/component'

export default class AtModalAction extends AtComponent {
  render () {
    const rootClass = classNames(
      'at-modal__footer',
      {
        'at-modal__footer--simple': this.props.isSimple
      },
      this.props.className
    )

    return (
      <View className={rootClass}>
        <View className='at-modal__action'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtModalAction.defaultProps = {
  isSimple: false,
}

AtModalAction.propTypes = {
  isSimple: PropTypes.bool,
}
