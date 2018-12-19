import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => {}

export default class AtNavBar extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    border: true,
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
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    fixed: PropTypes.bool,
    border: PropTypes.bool,
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
      customStyle,
      className,
      color,
      fixed,
      border,
      leftIconType,
      leftText,
      title,
      rightFirstIconType,
      rightSecondIconType
    } = this.props
    const linkStyle = `color: ${color};`

    return <View
      className={
        classNames({
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border
        }, className)
      }
      style={customStyle}
    >
      <View
        className='at-nav-bar__left_view'
        onClick={this.handleClickLeftView.bind(this)}
        style={linkStyle}
      >
        <AtIcon customStyle={{ fontSize: '24px' }} value={leftIconType} />
        <Text className='at-nav-bar__text'>{leftText}</Text>
      </View>
      <View className='at-nav-bar__title'>{title}</View>
      <View className='at-nav-bar__right_view'>
        <View
          className={
            classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightSecondIconType
            })
          }
          style={linkStyle}
          onClick={this.handleClickNd.bind(this)}
        >
          <AtIcon customStyle={{ fontSize: '24px' }} value={rightSecondIconType} />
        </View>
        <View
          className={
            classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightFirstIconType
            })
          }
          style={linkStyle}
          onClick={this.handleClickSt.bind(this)}
        >
          <AtIcon customStyle={{ fontSize: '24px' }} value={rightFirstIconType} />
        </View>
      </View>
    </View>
  }
}
