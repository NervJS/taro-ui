import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { Text } from '@tarojs/components'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtIcon extends AtComponent {
  static defaultProps = {
    prefixClass: 'at-icon',
    value: '',
    color: '',
    size: 24,
    onClick: () => { },
  }

  static propTypes = {
    prefixClass: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onClick: PropTypes.func,
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const {
      prefixClass,
      value,
      size,
      color
    } = this.props

    const rootStyle = {
      fontSize: `${size}px`,
      color
    }
    const rootClassName = [prefixClass, `${prefixClass}-${value}`]

    return (
      <Text
        className={this.getClassName(rootClassName)}
        style={rootStyle}
        onClick={this.handleClick.bind(this)}
      >
      </Text>
    )
  }
}
