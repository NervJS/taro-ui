import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtLoading from '../loading/index'
import AtComponent from '../../common/component'

import './index.scss'

export default class AtActivityIndicator extends AtComponent {
  render () {
    const { color, size, mode, content } = this.props

    const rootClassName = ['at-activity-indicator']

    if (mode === 'center') {
      rootClassName.push('at-activity-indicator--center')
    }

    return (
      <View className={this.getClassName(rootClassName, this.props.className)}>
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
  size: 24,
  color: '#6190E8'
}

AtActivityIndicator.propTypes = {
  size: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string
}
