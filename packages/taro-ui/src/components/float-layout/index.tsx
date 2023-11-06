import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { ScrollView, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import {
  AtFloatLayoutProps,
  AtFloatLayoutState
} from '../../../types/float-layout'
import { handleTouchScroll } from '../../common/utils'

export default class AtFloatLayout extends React.Component<
  AtFloatLayoutProps,
  AtFloatLayoutState
> {
  public static defaultProps: AtFloatLayoutProps
  public static propTypes: InferProps<AtFloatLayoutProps>

  public constructor(props: AtFloatLayoutProps) {
    super(props)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtFloatLayoutProps): void {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  private handleClose = (e): void => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose(e)
    }
  }

  private close = (e): void => {
    this.setState(
      {
        _isOpened: false
      },
      () => this.handleClose(e)
    )
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  public render(): JSX.Element {
    const { _isOpened } = this.state
    const {
      title,

      scrollY,
      scrollX,
      scrollTop,
      scrollLeft,
      upperThreshold,
      lowerThreshold,
      scrollWithAnimation
    } = this.props

    const rootClass = classNames(
      'at-float-layout',
      {
        'at-float-layout--active': _isOpened
      },
      this.props.className
    )

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='at-float-layout__overlay' />
        <View className='at-float-layout__container layout'>
          {title ? (
            <View className='layout-header'>
              <Text className='layout-header__title'>{title}</Text>
              <View className='layout-header__btn-close' onClick={this.close} />
            </View>
          ) : null}
          <View className='layout-body'>
            <ScrollView
              scrollY={scrollY}
              scrollX={scrollX}
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
              upperThreshold={upperThreshold}
              lowerThreshold={lowerThreshold}
              scrollWithAnimation={scrollWithAnimation}
              onScroll={this.props.onScroll}
              onScrollToLower={this.props.onScrollToLower}
              onScrollToUpper={this.props.onScrollToUpper}
              className='layout-body__content'
            >
              {this.props.children}
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,

  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false
}

AtFloatLayout.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollLeft: PropTypes.number,
  upperThreshold: PropTypes.number,
  lowerThreshold: PropTypes.number,
  scrollWithAnimation: PropTypes.bool,
  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  onScrollToLower: PropTypes.func,
  onScrollToUpper: PropTypes.func
}
