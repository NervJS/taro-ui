import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import loadash from 'lodash'
import './index.scss'


export default class AtBadge extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  formatValue (value, maxValue) {
    const numValue = +value
    if (loadash.isNaN(numValue)) {
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

    return (
      <View className={rootClassName}>
        {this.props.children}
        {dot ? <View className='at-badge__dot'></View> : <View className='at-badge__num'>{this.formatValue(value, maxValue)}</View>}
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
  value: PropTypes.string,
  maxValue: PropTypes.number,
}
