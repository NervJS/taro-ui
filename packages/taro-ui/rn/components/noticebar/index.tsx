/* eslint-disable @typescript-eslint/ban-ts-ignore */

import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React, { CSSProperties, ReactElement, ReactNode } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { Animated, Easing } from 'react-native'
import { AtNoticeBarProps } from '../../../types/noticebar'
import AtIcon from '../icon'

export default class AtNoticebar extends React.Component<
  AtNoticeBarProps,
  any
> {
  public static defaultProps: AtNoticeBarProps
  public static propTypes: InferProps<AtNoticeBarProps>

  public constructor(props: AtNoticeBarProps) {
    super(props)
    this.state = {
      show: true,
      transformX: new Animated.Value(0)
    }
  }

  private onClose(event: CommonEvent): void {
    this.setState({
      show: false
    })
    this.props.onClose && this.props.onClose(event)
  }

  private onGotoMore(event: CommonEvent): void {
    this.props.onGotoMore && this.props.onGotoMore(event)
  }

  public componentDidUpdate(): void {
    if (!this.props.marquee) return
    this.move()
  }

  private renderContent = (text: ReactNode): ReactElement => {
    const { marquee, single, icon } = this.props
    const numberOfLines = single ? { numberOfLines: 1 } : {}
    const { transformX, textWidth }: any = this.state
    return marquee ? (
      <Animated.View
        style={[{ width: textWidth, transform: [{ translateX: transformX }] }]}
      >
        <Text className='at-noticebar__content-text' {...numberOfLines}>
          {text}
        </Text>
      </Animated.View>
    ) : (
      <Text
        className='at-noticebar__content-text'
        style={icon ? { marginLeft: Taro.pxTransform(12) } : {}}
        {...numberOfLines}
      >
        {!!icon && (
          <AtIcon
            customStyle={{
              // ios 生效，android 不生效，考虑换成图
              marginRight: -3,
              marginBottom: -3
            }}
            className='at-noticebar__content-icon__at-icon'
            value={icon}
          />
        )}
        {
          // rn中图文混排 不支持设置margin 用空格hack
        }
        {icon ? '  ' : ''}
        {text}
      </Text>
    )
  }

  move = (): void => {
    const { viewWidth = 375, textWidth, transformX } = this.state
    const { speed = 100 } = this.props
    if (textWidth > viewWidth) {
      transformX.setValue(viewWidth)
      Animated.timing(transformX, {
        toValue: -textWidth,
        duration: (textWidth * 30) / (speed / 100),
        easing: Easing.linear,
        useNativeDriver: true
      }).start(({ finished }) => {
        if (finished) {
          this.move()
        }
      })
    }
  }

  onLayout =
    (key: string) =>
    (event: any): void => {
      const { width } = event.nativeEvent.layout
      this.setState({
        [key]: width
      })
    }

  public render(): JSX.Element | boolean {
    const {
      single,
      marquee,
      customStyle,
      className,
      moreText = '查看详情'
    } = this.props
    let { showMore, close } = this.props
    const { show } = this.state
    const rootClassName = ['at-noticebar']

    if (!single) showMore = false

    const style: CSSProperties = {}
    if (marquee) {
      close = false
      style.width = 1024
    }

    // const iconClass = ['at-icon']
    // if (icon) iconClass.push(`at-icon-${icon}`)

    return (
      !!show && (
        <View
          className={classNames(rootClassName, className)}
          style={customStyle}
        >
          {close && (
            <View
              className='at-noticebar__close'
              onClick={this.onClose.bind(this)}
            >
              <AtIcon value='close' className='at-noticebar__close-icon' />
            </View>
          )}
          <View
            className={`at-noticebar__content ${
              close ? 'at-noticebar__content--has-close' : ''
            }`}
          >
            <View
              className='at-noticebar__content-text-wrap'
              style={{
                flex: 1,
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              <View style={style}>
                {this.renderContent(this.props.children)}
              </View>
              <View className='at-noticebar__content--hide'>
                <Text
                  // @ts-ignore
                  onLayout={this.onLayout('textWidth')}
                  className='at-noticebar__content--hide'
                >
                  {this.props.children}
                </Text>
              </View>
            </View>
            {showMore && (
              <View
                className='at-noticebar__more'
                onClick={this.onGotoMore.bind(this)}
              >
                <Text className='at-noticebar__more-text'>{moreText}</Text>
                <AtIcon
                  value='chevron-right'
                  className='at-noticebar__more-icon__at-icon'
                />
              </View>
            )}
          </View>
        </View>
      )
    )
  }
}

AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {}
}

AtNoticebar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  marquee: PropTypes.bool,
  speed: PropTypes.number,
  moreText: PropTypes.string,
  showMore: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func
}
