import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => {}

export default class AtNavBar extends AtComponent {
  static defaultProps = {
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

  static propTypes = {
    style: PropTypes.string,
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
    const {
      style,
      color,
      fixed,
      leftIconType,
      leftText,
      title,
      rightFirstIconType,
      rightSecondIconType
    } = this.props
    const linkStyle = `color: ${color};`

    return <View
      className={
        fixed
          ? 'at-nav-bar at-nav-bar--fixed'
          : 'at-nav-bar'
      }
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
          className={
            rightSecondIconType
              ? 'at-nav-bar__container'
              : 'at-nav-bar__container--hide'
          }
          style={linkStyle}
          onClick={this.handleClickNd.bind(this)}
        >
          <AtIcon value={rightSecondIconType} />
        </View>
        <View
          className={
            rightFirstIconType
              ? 'at-nav-bar__container'
              : 'at-nav-bar__container--hide'
          }
          style={linkStyle}
          onClick={this.handleClickSt.bind(this)}
        >
          <AtIcon value={rightFirstIconType} />
        </View>
      </View>
    </View>
  }
}
