import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
 * @prop rightFirstIconType {String} 从右到左第一个图标类型
 * @prop rightSecondIconType {String} 从右到左第二个图标类型
 * @prop onClickLeftIcon {Function} 左边第一个图标类型点击事件
 * @prop onClickRightFirstIcon {Function} 从右到左第一个图标类型点击事件
 * @prop onClickRightSecondIcon {Function} 从右到左第二个图标类型点击事件
 */
class AtNavBar extends Taro.Component {
  handleClickLeftView () {
    this.props.onClickLeftIcon(...arguments)
  }
  handleClickSt () {
    this.props.onClickRgIconSt(...arguments)
  }
  handleClickNd () {
    this.props.onClickRgIconNd(...arguments)
  }

  render () {
    const { style, color, fixed, leftIconType, leftText, title, rightFirstIconType, rightSecondIconType } = this.props
    const linkStyle = `color: ${color};`

    return <View
      className={fixed ? 'at-nav-bar at-nav-bar--fixed' : 'at-nav-bar'}
      style={style}
    >
      <View
        className='at-nav-bar__left_view'
        onClick={this.handleClickLeftView.bind(this)}
        style={linkStyle}
      >
        <AtIcon value={leftIconType} />
        <Text className='at-nav-bar__text'>{leftText}</Text>
      </View>
      <View className='at-nav-bar__title'>{title}</View>
      <View className='at-nav-bar__right_view'>
        <View
          className={rightSecondIconType ? 'at-nav-bar__container' : 'at-nav-bar__container--hide'}
          style={linkStyle}
          onClick={this.handleClickNd.bind(this)}
        >
          <AtIcon value={rightSecondIconType} />
        </View>
        <View
          className={rightFirstIconType ? 'at-nav-bar__container' : 'at-nav-bar__container--hide'}
          style={linkStyle}
          onClick={this.handleClickSt.bind(this)}
        >
          <AtIcon value={rightFirstIconType} />
        </View>
      </View>
    </View>
  }
}

const defaultFunc = () => {}

AtNavBar.defaultProps = {
  style: '',
  fixed: false,
  color: '#6190E8',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeftIcon: defaultFunc,
  onClickRgIconSt: defaultFunc,
  onClickRgIconNd: defaultFunc
}
AtNavBar.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  fixed: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.string,
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.string,
  rightSecondIconType: PropTypes.string,
  onClickLeftIcon: PropTypes.func,
  onClickRgIconSt: PropTypes.func,
  onClickRgIconNd: PropTypes.func
}
export default AtNavBar
