import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtTimelineProps } from 'types/timeline'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtTimeline extends AtComponent<AtTimelineProps> {
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
        [`at-icon-${icon}`]: icon
      })

      const itemRootClassName = ['at-timeline-item']
      if (color) itemRootClassName.push(`at-timeline-item--${color}`)

      const dotClass: string[] = []
      if (icon) {
        dotClass.push('at-timeline-item__icon')
      } else {
        dotClass.push('at-timeline-item__dot')
      }

      return (
        <View
          className={classNames(itemRootClassName)}
          key={`at-timeline-item-${index}`}
        >
          <View className='at-timeline-item__tail'></View>
          <View className={classNames(dotClass)}>
            {icon && <Text className={iconClass}></Text>}
          </View>
          <View className='at-timeline-item__content'>
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
