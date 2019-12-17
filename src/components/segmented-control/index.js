import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { initTestEnv, pxTransform } from '../../common/utils'
import AtComponent from '../../common/component'

initTestEnv()

export default class AtSegmentedControl extends AtComponent {
  handleClick () {
    if (this.props.disable) return
    this.props.onClick(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      disabled,
      values,
      selectedColor,
      current,
      color,
      fontSize
    } = this.props

    const rootStyle = {
      borderColor: selectedColor
    }
    const itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color,
    }
    const selectedItemStyle = {
      color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor,
    }
    const rootCls = classNames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className)

    return (
      <View
        className={rootCls}
        style={this.mergeStyle(rootStyle, customStyle)}
      >
        {
          values.map((value, i) => (
            <View
              className={classNames('at-segmented-control__item', {
                'at-segmented-control__item--active': current === i
              })}
              style={current === i ? selectedItemStyle : itemStyle}
              key={value}
              onClick={this.handleClick.bind(this, i)}
            >{value}</View>
          ))
        }
      </View>
    )
  }
}

AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 0,
  disabled: false,
  selectedColor: '',
  values: [],
  onClick: () => {},
}

AtSegmentedControl.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  values: PropTypes.array,
  onClick: PropTypes.func,
}
