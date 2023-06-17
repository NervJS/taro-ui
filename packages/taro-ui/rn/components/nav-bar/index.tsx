import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import { AtNavBarProps } from '../../../types/nav-bar'
import AtIcon from '../icon'

export default class AtNavBar extends React.Component<AtNavBarProps> {
  public static defaultProps: AtNavBarProps
  public static propTypes: InferProps<AtNavBarProps>

  private handleClickLeftView(event: ITouchEvent): void {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(event)
  }

  private handleClickSt(event: ITouchEvent): void {
    this.props.onClickRgIconSt && this.props.onClickRgIconSt(event)
  }

  private handleClickNd(event: ITouchEvent): void {
    this.props.onClickRgIconNd && this.props.onClickRgIconNd(event)
  }

  private handleClickTitle(event: ITouchEvent): void {
    this.props.onClickTitle && this.props.onClickTitle(event)
  }

  public render(): JSX.Element {
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
    const linkStyle: any = {
      // color,
    }

    if (color) {
      linkStyle.color = color
    }

    const defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24
    }

    const leftIconInfo =
      leftIconType instanceof Object
        ? { ...defaultIconInfo, ...leftIconType }
        : { ...defaultIconInfo, value: leftIconType }
    const leftIconClass = classNames(
      leftIconInfo.prefixClass,
      'at-nav-bar__at-icon',
      {
        [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]:
          leftIconInfo.value
      },
      leftIconInfo.className
    )

    const rightFirstIconInfo =
      rightFirstIconType instanceof Object
        ? { ...defaultIconInfo, ...rightFirstIconType }
        : { ...defaultIconInfo, value: rightFirstIconType }
    const rightFirstIconClass = classNames(
      rightFirstIconInfo.prefixClass,
      'at-nav-bar__at-icon',
      {
        [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]:
          rightFirstIconInfo.value
      },
      rightFirstIconInfo.className
    )

    const rightSecondIconInfo =
      rightSecondIconType instanceof Object
        ? { ...defaultIconInfo, ...rightSecondIconType }
        : { ...defaultIconInfo, value: rightSecondIconType }
    const rightSecondIconClass = classNames(
      rightSecondIconInfo.prefixClass,
      'at-nav-bar__at-icon',
      {
        [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]:
          rightSecondIconInfo.value
      },
      rightSecondIconInfo.className
    )

    return (
      <View
        className={classNames(
          {
            'at-nav-bar': true,
            'at-nav-bar--fixed': fixed,
            'at-nav-bar--no-border': !border
          },
          className
        )}
        style={customStyle}
      >
        <View
          className='at-nav-bar__left-view'
          onClick={this.handleClickLeftView.bind(this)}
          style={linkStyle}
        >
          {leftIconType && (
            <AtIcon
              className={leftIconClass}
              value={leftIconInfo.value}
              size={leftIconInfo.size}
              color={leftIconInfo.color}
              customStyle={Object.assign(
                {},
                linkStyle,
                leftIconInfo.customStyle
              )}
            />
          )}
          {/* <Image src={leftIconInfo.value || chevronLeft} style={leftIconInfo.customStyle} className={leftIconClass}/> */}
          <Text
            className='at-nav-bar__text at-nav-bar__left-view__text'
            style={linkStyle}
          >
            {leftText}
          </Text>
        </View>
        <View
          className='at-nav-bar__title'
          onClick={this.handleClickTitle.bind(this)}
        >
          {title || this.props.children}
        </View>
        <View className='at-nav-bar__right-view'>
          <View
            className={classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightSecondIconType
            })}
            style={linkStyle}
            onClick={this.handleClickNd.bind(this)}
          >
            {rightSecondIconType && (
              <AtIcon
                className={rightSecondIconClass}
                value={rightSecondIconInfo.value}
                size={rightSecondIconInfo.size}
                color={rightSecondIconInfo.color}
                customStyle={Object.assign(
                  {},
                  linkStyle,
                  leftIconInfo.customStyle
                )}
              />
            )}
            {/* {!!rightSecondIconType && (
              <Image src={ rightSecondIconInfo.value || ''} style={rightSecondIconInfo.customStyle} className={rightSecondIconClass}/>
            )} */}
          </View>
          <View
            className={classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightFirstIconType
            })}
            style={linkStyle}
            onClick={this.handleClickSt.bind(this)}
          >
            {rightFirstIconType && (
              <AtIcon
                className={rightFirstIconClass}
                value={rightFirstIconInfo.value}
                size={rightFirstIconInfo.size}
                color={rightFirstIconInfo.color}
                customStyle={Object.assign(
                  {},
                  linkStyle,
                  leftIconInfo.customStyle
                )}
              />
            )}
            {/* {!!rightFirstIconType && (
              <Image src={ rightFirstIconInfo.value || '' } style={rightFirstIconInfo.customStyle} className={rightFirstIconClass}/>
            )} */}
          </View>
        </View>
      </View>
    )
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
  rightSecondIconType: ''
}

AtNavBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightSecondIconType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onClickLeftIcon: PropTypes.func,
  onClickRgIconSt: PropTypes.func,
  onClickRgIconNd: PropTypes.func,
  onClickTitle: PropTypes.func
}
