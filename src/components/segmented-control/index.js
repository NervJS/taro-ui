import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author:chenzeji
 * @description segmented control 分段器组件
 * @prop current {Number} 选中项在数组中的索引，从0计数，default:0
 * @prop color {String} 背景颜色与选中标签字体的颜色，default:#fff
 * @prop selectedColor {String} 选中的标签背景色与边框颜色，default:#6190E8
 * @prop values {Array} 选项数组,值是字符串 eg: ['标签页1','标签页2' ]
 * @prop disabled {Boolean} 是否禁止点击 default:false
 * @prop fontSize {String|Number} 字体大小,单位h5为rem，小程序为rem default:'28'
 * @prop onClick {Function} 点击时触发事件，回调参数 数组索引值
 */
class AtSegmentedControl extends Taro.Component {
  handleClick (i, disable) {
    if (disable) return
    this.props.onClick(i)
  }

  render () {
    const { disabled, values, selectedColor, current, color, fontSize } = this.props
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
    const rootClassName = ['at-segmented-control']
    if (disabled) {
      rootClassName.push('at-segmented-control--disabled')
    }
    return <View className={rootClassName} style={rootStyle}>
      {
        values.map((value, i) => <View
          className='at-segmented-control__item'
          style={current === i ? selectedItemStyle : itemStyle}
          key={value}
          onClick={this.handleClick.bind(this, i, disabled)}
        >
          {value}
        </View>)
      }
    </View>
  }
}
AtSegmentedControl.defaultProps = {
  current: 0,
  color: '#fff',
  fontSize: '28',
  disabled: false,
  selectedColor: '#6190E8',
  values: [],
  onClick: () => { }
}
AtSegmentedControl.propTypes = {
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  values: PropTypes.array,
  onClick: PropTypes.func
}
export default AtSegmentedControl
