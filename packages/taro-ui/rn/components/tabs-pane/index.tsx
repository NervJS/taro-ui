import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtTabsPaneProps } from '../../../types/tabs-pane'

export default class AtTabsPane extends React.Component<AtTabsPaneProps> {
  public static defaultProps: AtTabsPaneProps
  public static propTypes: InferProps<AtTabsPaneProps>

  public render(): JSX.Element {
    const { customStyle, className, tabDirection, index, current } = this.props

    return (
      <View
        className={classNames(
          {
            'at-tabs-pane': true,
            'at-tabs-pane--vertical': tabDirection === 'vertical',
            'at-tabs-pane--active': index === current,
            'at-tabs-pane--inactive': index !== current
          },
          className
        )}
        style={customStyle}
      >
        {this.props.children}
      </View>
    )
  }
}

AtTabsPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
}

AtTabsPane.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  index: PropTypes.number,
  current: PropTypes.number
}
