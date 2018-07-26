import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author:chenzeji
 * @description tab bar 标签栏
 * @prop current {Number} 当前选中的tab index值，从0计数，default:0
 * @prop color {String} 未选中标签字体与图标颜色,default:'#333'
 * @prop selectedColor {String} 选中标签字体与图标颜色,default:'#6190E8'
 * @prop fixed {Boolean} 是否固定底部 default:false
 * @prop backgroundColor {String} 背景色 default:'#fff'
 * @prop iconSize {String|Number} 图标大小 default:'24'
 * @prop fontSize {String|Number} 字体大小 default:'14'
 * @prop tabList {Array} tab 列表,object 字段说明：
 *  title: {String} 标题 [必填]
 *  iconType: {String} 未选中时展示的icon 类型，仅支持AtIcon支持的类型 [可选]
 *  selectedIconType: {String} 选中时展示的icon 类型，仅支持AtIcon支持的类型 [可选]
 *  count: {Number} 显示的数字 [可选]
 *  dot: {Boolean} 是否显示红点，如果有count，优先显示count [可选]
 *  示例: [{ title: '标签页1',iconType: '', dot: true, iconSize:24, selectedIconType: '',count: 8 }, { title: '标签页2' }]
 * @prop onClick {Function} 点击时触发事件，回调参数 {value: 1}
 */
class AtTabBar extends Taro.Component {
  handleClick (i) {
    this.props.onClick({ value: i })
  }
  render () {
    const { fixed, backgroundColor, tabList, current, color, iconSize, fontSize, selectedColor } = this.props
    const defaultStyle = `color: ${color};`
    const selectedStyle = `color: ${selectedColor};`
    const titleStyle = `font-size: ${fontSize}px;`
    const rootStyle = `background-color: ${backgroundColor};`
    const rootClassName = ['at-tab-bar']
    if (fixed) {
      rootClassName.push('at-tab-bar--fixed')
    }
    return <View className={rootClassName} style={rootStyle}>
      {
        tabList.map((item, i) => <View className='at-tab-bar__item' style={current === i ? selectedStyle : defaultStyle} key={item} onClick={this.handleClick.bind(this, i)}>
          <View className='at-tab-bar__item-container'>
            {
              !item.count && item.dot
                ? <View className='at-tab-bar__dot'></View>
                : null
            }
            {
              item.count
                ? <View className='at-tab-bar__count'>{item.count}</View>
                : null
            }
            {
              item.iconType
                ? <View className='at-tab-bar__icon'>
                  <AtIcon
                    value={current === i && item.selectedIconType ? item.selectedIconType : item.iconType}
                    size={iconSize}
                    color={current === i ? selectedColor : color}
                  />
                </View>
                : null
            }
            <View className='at-tab-bar__title' style={titleStyle}>{item.title}</View>
          </View>
        </View>)
      }
    </View>
  }
}
AtTabBar.defaultProps = {
  fixed: false,
  backgroundColor: '#fff',
  current: 0,
  iconSize: '24',
  fontSize: '14',
  color: '#333',
  selectedColor: '#6190E8',
  scroll: false,
  tabList: [],
  onClick: () => { }
}
AtTabBar.propTypes = {
  fixed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  current: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  scroll: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
export default AtTabBar
