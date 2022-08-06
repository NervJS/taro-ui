import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTimelineProps } from '../../../types/timeline'
import AtIcon from '../icon'

export default class AtTimeline extends React.Component<AtTimelineProps> {
  public static defaultProps: AtTimelineProps
  public static propTypes: InferProps<AtTimelineProps>

  public render(): JSX.Element {
    const { pending, items, customStyle } = this.props

    const rootClassName = ['at-timeline']
    if (pending) rootClassName.push('at-timeline--pending')

    const rootClassObject = {
      'at-timeline--pending': pending
    }

    const itemElems = items.map((item, index) => {
      const { title = '', color, icon, content = [] } = item

      const iconClass = classNames({
        'at-icon': true,
        'at-timeline-item__at-icon': true
        // [`at-icon-${icon}`]: icon
      })

      const itemRootClassName = ['at-timeline-item']

      const dotClass: string[] = ['at-timeline-item__dot']

      if (icon) dotClass.push(`at-timeline-item__dot--has-icon`)

      if (color) dotClass.push(`at-timeline-item__dot--${color}`)

      const isLast = index === items.length - 1

      const isSecondLast = index === items.length - 2

      // rn对于dotted的支持不全面，这里用透明度代替
      const isDotted = isSecondLast ? { opacity: 0.75 } : {}

      const contentMinHeight = isSecondLast
        ? { minHeight: Taro.pxTransform(80) }
        : {}

      const hideStyle = isLast ? { display: 'none' } : {}

      return (
        <View
          className={classNames(itemRootClassName)}
          key={`at-timeline-item-${index}`}
        >
          <View
            className='at-timeline-item__tail'
            style={{ ...hideStyle, ...isDotted }}
          />
          <View className={classNames(dotClass)}>
            {icon && <AtIcon className={iconClass} value={icon} />}
          </View>
          <View className='at-timeline-item__content' style={contentMinHeight}>
            <View className='at-timeline-item__content-item'>{title}</View>
            {content.map((sub, subIndex) => (
              <View
                className='at-timeline-item__content-item at-timeline-item__content--sub'
                key={subIndex}
              >
                {sub}
              </View>
            ))}
          </View>
        </View>
      )
    })
    return (
      <View
        className={classNames(
          rootClassName,
          rootClassObject,
          this.props.className
        )}
        style={customStyle}
      >
        {itemElems}
      </View>
    )
  }
}

AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
}

AtTimeline.propTypes = {
  pending: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}
