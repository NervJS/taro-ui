import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtSegmentedControl extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    color: '#fff',
    fontSize: '28',
    disabled: false,
    selectedColor: '#6190E8',
    values: [],
    onClick: () => { }
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
    current: PropTypes.number,
    color: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    values: PropTypes.array,
    onClick: PropTypes.func
  }

  handleClick (i, disable) {
    if (disable) return
    this.props.onClick(i, ...arguments)
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
    const rootStyle = `border-color: ${selectedColor};`
    const itemStyle = `
      color: ${selectedColor};
      background-color:${color};
      border-color: ${selectedColor};
      font-size: ${Taro.pxTransform(fontSize)};
    `
    const selectedItemStyle = `
      color: ${color};
      background-color:${selectedColor};
      border-color: ${selectedColor};
      font-size: ${Taro.pxTransform(fontSize)};
    `

    return (
      <View
        className={
          classNames({
            'at-segmented-control': true,
            'at-segmented-control--disabled': disabled
          }, className)
        }
        style={this.mergeStyle(rootStyle, customStyle)}
      >
        {
          values.map((value, i) => (
            <View
              className='at-segmented-control__item'
              style={current === i ? selectedItemStyle : itemStyle}
              key={value}
              onClick={this.handleClick.bind(this, i, disabled)}
            >
              {value}
            </View>)
          )
        }
      </View>
    )
  }
}
