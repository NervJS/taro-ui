/* eslint-disable @typescript-eslint/ban-ts-ignore */

import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React, { CSSProperties, ReactElement, ReactNode } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtNoticeBarProps } from '../../../types/noticebar'
import '../../style/components/noticebar.scss'
import { Animated, Easing } from 'react-native'

const Speed = 10000

export default class AtNoticebar extends React.Component<
  AtNoticeBarProps,
  any
> {
  public static defaultProps: AtNoticeBarProps
  public static propTypes: InferProps<AtNoticeBarProps>

  public constructor(props: AtNoticeBarProps) {
    super(props)
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
    this.state = {
      show: true,
      animElemId,
      transformX: new Animated.Value(0),
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
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

  public UNSAFE_componentWillReceiveProps(): void {
    this.move()
  }

  public componentDidUpdate(): void {
    if (!this.props.marquee) return
    this.move()
  }

  private renderContent = (text: ReactNode): ReactElement => {
    const numberOfLines = { numberOfLines: 1 }
    const { transformX, textWidth }: any = this.state
    return (
      <Animated.View
        style={[{ width: textWidth, transform: [{ translateX: transformX }] }]}
      >
        <Text {...numberOfLines}>{text}</Text>
      </Animated.View>
    )
  }

  move = (): void => {
    const { viewWidth = 375, textWidth, transformX } = this.state
    if (textWidth > viewWidth) {
      // let duration = Speed
      const duration = ((textWidth - viewWidth) / textWidth) * Speed
      transformX.setValue(viewWidth)
      Animated.timing(transformX, {
        toValue: -textWidth,
        duration,
        easing: Easing.linear,
        useNativeDriver: true
      }).start(({ finished }) => {
        if (finished) {
          this.move()
        }
      })
    }
  }

  onLayout = (key: string) => (event: any): void => {
    const { width } = event.nativeEvent.layout
    this.setState({
      [key]: width
    })
  }

  public render(): JSX.Element | boolean {
    const {
      single,
      icon,
      marquee,
      customStyle,
      className,
      moreText = '查看详情'
    } = this.props
    let { showMore, close } = this.props
    const { show, animElemId, animationData, isWEAPP, isALIPAY } = this.state
    const rootClassName = ['at-noticebar']

    if (!single) showMore = false

    const style: CSSProperties = {}
    const innerClassName = ['at-noticebar__content-inner']
    if (marquee) {
      close = false
      style.width = 1024
      innerClassName.push(animElemId)
    }

    const classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
      'at-noticebar--single': !marquee && single
    }

    const iconClass = ['at-icon']
    if (icon) iconClass.push(`at-icon-${icon}`)

    const numberOfLines = { numberOfLines: 1 }

    return (
      !!show && (
        <View
          className={classNames(rootClassName, classObject, className)}
          style={customStyle}
        >
          {close && (
            <View
              className='at-noticebar__close'
              onClick={this.onClose.bind(this)}
            >
              <Text className='at-icon at-icon-close'></Text>
            </View>
          )}
          <View className='at-noticebar__content'>
            {!!icon && (
              <View className='at-noticebar__content-icon'>
                {/* start hack 百度小程序 */}
                <Text className={classNames(iconClass, iconClass)}></Text>
              </View>
            )}
            <View
              className='at-noticebar__content-text-wrap'
              style={{ width: 375 }}
            >
              <View
                id={animElemId}
                animation={animationData}
                className={classNames(innerClassName)}
                style={style}
              >
                <Text className='at-noticebar__content-text' {...numberOfLines}>
                  {this.renderContent(this.props.children)}
                </Text>
              </View>
              <View className='at-noticebar__content--hide'>
                <Text
                  // @ts-ignore
                  onLayout={this.onLayout('textWidth')}
                  {...numberOfLines}
                  className='at-noticebar__content--hide'
                >
                  {this.props.children}
                </Text>
              </View>
            </View>
          </View>
          {showMore && (
            <View
              className='at-noticebar__more'
              onClick={this.onGotoMore.bind(this)}
            >
              <Text className='text'>{moreText}</Text>
              <View className='at-noticebar__more-icon'>
                <Text className='at-icon at-icon-chevron-right'></Text>
              </View>
            </View>
          )}
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
  icon: PropTypes.string,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func
}
