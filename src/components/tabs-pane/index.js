import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtTabsPane extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    index: 0,
    current: 0
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
    index: PropTypes.number,
    current: PropTypes.number
  }

  render () {
    const {
      customStyle,
      className,
      tabDirection,
      index,
      current
    } = this.props

    return (
      <View
        className={
          classNames({
            'at-tabs-pane': true,
            'at-tabs-pane--vertical': tabDirection === 'vertical',
            'at-tabs-pane--active': index === current,
            'at-tabs-pane--inactive': index !== current
          }, className)
        }
        style={customStyle}
      >
        {this.props.children}
      </View>
    )
  }
}
