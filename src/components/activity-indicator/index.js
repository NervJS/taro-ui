import * as React from 'nervjs'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtLoading from '../loading/index'
import AtComponent from '../../common/component'

export default class AtActivityIndicator extends AtComponent {
  render () {
    const { color, size, mode, content, isOpened } = this.props

    const rootClass = classNames(
      'at-activity-indicator',
      {
        'at-activity-indicator--center': mode === 'center',
        'at-activity-indicator--isopened': isOpened
      },
      this.props.className
    )

    return (
      <View className={rootClass}>
        <View className='at-activity-indicator__body'>
          <AtLoading size={size} color={color} />
        </View>
        {content && (
          <Text className='at-activity-indicator__content'>{content}</Text>
        )}
      </View>
    )
  }
}

AtActivityIndicator.defaultProps = {
  size: 0,
  mode: '',
  color: '',
  content: '',
  className: '',
  isOpened: true,
}

AtActivityIndicator.propTypes = {
  size: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool
}
