import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author:chenzeji
 * @description nav bar 导航栏组件
 * @prop color {String} 链接文字跟图标颜色，不包括标题，default#6190E8
 * @prop fixed {Boolean} 是否吸顶，default:false
 * @prop leftIconType {String} 左边图标类型
 * @prop leftText {String} 左边文字
 * @prop title {String} 标题文字
 * @prop rightFirstIconType {String} 从左到右第一个图标类型
 * @prop rightSecondIconType {String} 从左到右第二个图标类型
 * @prop onClickLeftIcon {Function} 左边第一个图标类型点击事件
 * @prop onClickRightFirstIcon {Function} 从左到右第一个图标类型点击事件
 * @prop onClickRightSecondIcon {Function} 从左到右第二个图标类型点击事件
 */
class AtNavBar extends Taro.Component {
  handleClickLeftView () {
    this.props.onClickLeftIcon(...arguments)
  }
  handleClickFirstIcon () {
    this.props.onClickRightFirstIcon(...arguments)
  }
  handleClickSecondIcon () {
    this.props.onClickRightSecondIcon(...arguments)
  }

  render () {
    const { color, fixed, leftIconType, leftText, title, rightFirstIconType, rightSecondIconType } = this.props
    const linkStyle = `color: ${color};`

    return <View className={fixed ? 'at-nav-bar at-nav-bar--fixed' : 'at-nav-bar'}>
      <View className='at-nav-bar__left_view' onClick={this.handleClickLeftView.bind(this)}>
        <View className='at-nav-bar__container' style={linkStyle}><AtIcon value={leftIconType} /></View>
        <View className='at-nav-bar__container at-nav-bar__left_text' style={linkStyle}>{leftText}</View>
      </View>
      <View className='at-nav-bar__title'>{title}</View>
      <View className='at-nav-bar__right_view'>
        <View className='at-nav-bar__container' style={linkStyle} onClick={this.handleClickFirstIcon.bind(this)}>
          <AtIcon value={rightFirstIconType} />
        </View>
        <View className='at-nav-bar__container' style={linkStyle} onClick={this.handleClickSecondIcon.bind(this)}>
          <AtIcon value={rightSecondIconType} />
        </View>
      </View>
    </View>
  }
}

const defaltFunc = () => {}

AtNavBar.defaultProps = {
  fixed: false,
  color: '',
  leftIconType: 'return',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeftIcon: defaltFunc,
  onClickRightFirstIcon: defaltFunc,
  onClickRightSecondIcon: defaltFunc
}
AtNavBar.propTypes = {
  fixed: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.string,
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.string,
  rightSecondIconType: PropTypes.string,
  onClickLeftIcon: PropTypes.func,
  onClickRightFirstIcon: PropTypes.func,
  onClickRightSecondIcon: PropTypes.func
}
export default AtNavBar
