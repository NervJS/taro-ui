import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../icon/index'

import './index.scss'

export default class AtTimelineItem extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
  }

  render () {
    const {
      color,
      icon,
    } = this.props
    let rootClassName = ['at-timelineitem']
    const colorClass = color ? `at-timelineitem--${color}` : ''
    rootClassName.push(colorClass)
    rootClassName = rootClassName.filter(str => str !== '')
    const dotClass = ['at-timelineitem__dot']
    if (icon) dotClass.push('at-timelineitem__icon')

    return (
      <View className={rootClassName}>
        <View className='at-timelineitem__tail'></View>
        <View className={dotClass}>
          {icon && <AtIcon value={icon} size='16'></AtIcon>}
        </View>
        <View className='at-timelineitem__content'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtTimelineItem.defaultProps = {
  color: 'blue',
  icon: '',
}

AtTimelineItem.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
}
