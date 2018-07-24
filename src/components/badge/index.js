
import PropTypes from 'prop-types';
import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components"

import './index.scss'


export default class AtBadge extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  formatValue(value, maxValue) {
    if (isNaN(value)) {
      return value
    } else {
      let numValue = +value
      return numValue > maxValue? `${maxValue}+`: numValue
    }
  }

  render(){
    let {
      dot,
      value,
      maxValue,
    } = this.props
    let rootClassName = ['at-badge']

    return (
      <View className={rootClassName}>
        {this.props.children}
        {dot ? <View className="at-badge__dot"></View>: <View className="at-badge__num">{this.formatValue(value, maxValue)}</View>}
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
  maxValue: PropTypes.number,
};