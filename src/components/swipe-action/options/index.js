import React from 'nervjs'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'
import { delayQuerySelector } from '../../../common/utils'

export default class AtSwiperActionOptions extends AtComponent {
  trrigerOptionsDomUpadte () {
    delayQuerySelector(
      this,
      `#swipeActionOptions-${this.props.componentId}`,
      100
    ).then(res => {
      this.props.onQueryedDom(res[0])
    })
  }

  componentDidMount () {
    this.trrigerOptionsDomUpadte()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.options !== this.props.options) {
      this.trrigerOptionsDomUpadte()
    }
  }

  render () {
    const rootClass = classNames(
      'at-swipe-action__options',
      this.props.className
    )

    return (
      <View
        id={`swipeActionOptions-${this.props.componentId}`}
        className={rootClass}
      >
        {this.props.children}
      </View>
    )
  }
}

AtSwiperActionOptions.defaultProps = {}

AtSwiperActionOptions.propTypes = {}
