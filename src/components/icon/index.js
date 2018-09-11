import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { Text } from '@tarojs/components'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtIcon extends AtComponent {
  handleClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const { value = '', size, color } = this.props

    const rootStyle = {
      fontSize: `${size}px`,
      color,
    }

    const rootClassName = ['at-icon', `at-icon-${value}`]
    // console.log('value====', value)
    return (
      <Text
        className={this.getClassName(rootClassName, this.props.className)}
        style={rootStyle}
        onClick={this.handleClick.bind(this)}
      ></Text>
    )
  }
}
AtIcon.defaultProps = {
  value: '',
  color: '',
  size: 24,
  onClick: () => {},
}
AtIcon.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
}

