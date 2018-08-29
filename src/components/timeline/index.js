import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtIcon from '../icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtTimeline extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
  }

  render () {
    const {
      pending,
      items,
    } = this.props
    let rootClassName = ['at-timeline']
    const pendingClass = pending ? 'at-timeline--pending' : ''
    rootClassName.push(pendingClass)
    rootClassName = rootClassName.filter(str => str !== '')

    const itemElems = items.map((item, index) => {
      const {
        title = '',
        color,
        icon,
        content = [],
      } = item
      let itemRootClassName = ['at-timelineitem']
      const colorClass = color ? `at-timelineitem--${color}` : ''
      itemRootClassName.push(colorClass)
      itemRootClassName = itemRootClassName.filter(str => str !== '')
      const dotClass = ['at-timelineitem__dot']
      if (icon) dotClass.push('at-timelineitem__icon')
      return (
        <View className={itemRootClassName} key={index}>
          <View className='at-timelineitem__tail'></View>
          <View className={dotClass}>
            {icon && <AtIcon value={icon} size='16'></AtIcon>}
          </View>
          <View className='at-timelineitem__content'>
            <View className='at-timelineitem__content-item'>{title}</View>
            {content.map((sub, subIndex) => (<View className='at-timelineitem__content-item at-timelineitem__content--sub' key={subIndex}>{sub}</View>)
            )}
          </View>
        </View>
      )
    })
    return (
      <View className={rootClassName}>
        {itemElems}
      </View>
    )
  }
}

AtTimeline.defaultProps = {
  pending: false,
  items: [],
}

AtTimeline.propTypes = {
  pending: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
}
