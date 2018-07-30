import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author:chenzeji
 * @description segmented control 分段器组件
 * @prop current {Number} 当前选中的tab index值，从0计数，default:0
 * @prop color {String} 背景颜色与选中标签字体的颜色，default:#fff
 * @prop selectedColor {String} 选中的标签背景色与边框颜色，default:#6190E8
 * @prop tabList {Array} tab 列表 eg: [{ title: '标签页1' }, { title: '标签页2' }]
 * @prop disabled {Boolean} 是否禁止点击 default:false
 * @prop fontSize {String|Number} 字体大小,目前单位是px,等taro支持单位转化再修改 default:'14'
 * @prop onClick {Function} 点击时触发事件，回调参数 {value: 1}
 */
class AtSegmentedControl extends Taro.Component {
  handleClick (i, disable) {
    if (disable) return
    this.props.onClick({ value: i })
  }

  render () {
    const { disabled, tabList, selectedColor, current, color, fontSize } = this.props
    const rootStyle = `border-color: ${selectedColor};`
    const itemStyle = `
      color: ${selectedColor};
      background-color:${color};
      border-color: ${selectedColor};
      font-size: ${fontSize}px;
    `
    const selectedItemStyle = `
      color: ${color};
      background-color:${selectedColor};
      border-color: ${selectedColor};
      font-size: ${fontSize}px;
    `
    const rootClassName = ['at-segmented-control']
    if (disabled) {
      rootClassName.push('at-segmented-control--disabled')
    }
    return <View className={rootClassName} style={rootStyle}>
      {
        tabList.map((item, i) => <View className='at-segmented-control__item' style={current === i ? selectedItemStyle : itemStyle} key={item} onClick={this.handleClick.bind(this, i, disabled)}>
          {item.title}
        </View>)
      }
    </View>
  }
}
AtSegmentedControl.defaultProps = {
  current: 0,
  color: '#fff',
  fontSize: '14',
  disabled: false,
  selectedColor: '#6190E8',
  tabList: [],
  onClick: () => { }
}
AtSegmentedControl.propTypes = {
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
export default AtSegmentedControl
