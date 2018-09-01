import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import isNaN from 'lodash/isNaN'

import AtComponent from '../../common/component'
import './index.scss'


export default class AtBadge extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  formatValue (value, maxValue) {
    if (value === '' || value === null) return ''
    const numValue = +value
    if (isNaN(numValue)) {
      return value
    }
    return numValue > maxValue ? `${maxValue}+` : numValue
  }

  render () {
    const {
      dot,
      value,
      maxValue,
    } = this.props
    const rootClassName = ['at-badge']

    const val = this.formatValue(value, maxValue)

    return (
      <View className={rootClassName}>
        {this.props.children}
        {dot ? <View className='at-badge__dot'></View> : val !== '' && <View className='at-badge__num'>{val}</View>}
      </View>
    )
  }
}

AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
}

AtBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxValue: PropTypes.number,
}
