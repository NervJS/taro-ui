import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtNavBar extends AtComponent {
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
    const linkStyle = { color }

    const leftIconClass = classNames('at-icon', {
      [`at-icon-${leftIconType}`]: leftIconType
    })
    const rightFirstIconClass = classNames('at-icon', {
      [`at-icon-${rightFirstIconType}`]: rightFirstIconType
    })
    const rightSecondIconClass = classNames('at-icon', {
      [`at-icon-${rightSecondIconType}`]: rightSecondIconType
    })

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
        className='at-nav-bar__left-view'
        onClick={this.handleClickLeftView.bind(this)}
        style={linkStyle}
      >
        {leftIconType && <Text className={leftIconClass}></Text>}
        <Text className='at-nav-bar__text'>{leftText}</Text>
      </View>
      <View className='at-nav-bar__title'>{title}</View>
      <View className='at-nav-bar__right-view'>
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
          {rightSecondIconType && <Text className={rightSecondIconClass}></Text>}
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
          {rightFirstIconType && <Text className={rightFirstIconClass}></Text>}
        </View>
      </View>
    </View>
  }
}

AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeftIcon: () => {},
  onClickRgIconSt: () => {},
  onClickRgIconNd: () => {},
}

AtNavBar.propTypes = {
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
  onClickRgIconNd: PropTypes.func,
}
