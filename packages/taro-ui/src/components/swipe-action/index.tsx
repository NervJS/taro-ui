import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { Text, View, MovableArea, MovableView } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import {
  AtSwipeActionProps,
  AtSwipeActionState,
  SwipeActionOption
} from '../../../types/swipe-action'
import { uuid, delayGetClientRect } from '../../common/utils'
import AtSwipeActionOptions from './options/index'

export default class AtSwipeAction extends React.Component<
  AtSwipeActionProps,
  AtSwipeActionState
> {
  public static defaultProps: AtSwipeActionProps
  public static propTypes: InferProps<AtSwipeActionProps>

  private moveX: number
  private moveRatio: number

  public constructor(props: AtSwipeActionProps) {
    super(props)
    const { isOpened, moveRatio } = props
    this.state = {
      componentId: uuid(),
      // eslint-disable-next-line no-extra-boolean-cast
      offsetSize: 0,
      _isOpened: !!isOpened,
      needAnimation: false,
      eleWidth: 0,
      maxOffsetSize: 0
    }
    this.moveX = this.state.offsetSize
    this.moveRatio = moveRatio || 0.5
  }

  public componentDidMount(): void {
    this.getAreaWidth()
  }

  // 当 eleWidth 发生变化时，需要重新计算 maxOffsetSize
  public componentDidUpdate(_, prevState: AtSwipeActionState): void {
    const { eleWidth } = this.state
    if (prevState.eleWidth !== eleWidth) {
      this.getMaxOffsetSize()
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtSwipeActionProps): void {
    const { isOpened } = nextProps
    const { _isOpened, maxOffsetSize } = this.state

    if (isOpened !== _isOpened) {
      this.moveX = isOpened ? 0 : maxOffsetSize
      this._reset(!!isOpened) // TODO: Check behavior
    }
  }

  /**
   * 获取滑动区域宽度
   */
  private async getAreaWidth(): Promise<void> {
    const systemInfo = await Taro.getSystemInfo()
    this.setState({
      eleWidth: systemInfo.windowWidth
    })
  }

  /**
   * 获取最大偏移量
   */
  private async getMaxOffsetSize(): Promise<void> {
    const { componentId } = this.state

    const actionOptionsRect = await delayGetClientRect({
      selectorStr: `#swipeActionOptions-${componentId}`
    })

    const maxOffsetSize = actionOptionsRect[0].width

    this.setState({
      maxOffsetSize
    })
  }

  private _reset(isOpened: boolean): void {
    if (isOpened) {
      const { maxOffsetSize } = this.state
      if (process.env.TARO_ENV === 'jd') {
        this.setState({
          _isOpened: true,
          offsetSize: -maxOffsetSize + 0.01
        })
      } else {
        this.setState({
          _isOpened: true,
          offsetSize: -maxOffsetSize
        })
      }
    } else {
      this.setState(
        {
          offsetSize: this.moveX
        },
        () => {
          this.setState({
            offsetSize: 0,
            _isOpened: false
          })
        }
      )
    }
  }

  private handleOpened = (event: CommonEvent): void => {
    const { onOpened } = this.props
    if (typeof onOpened === 'function') {
      onOpened(event)
    }
  }

  private handleClosed = (event: CommonEvent): void => {
    const { onClosed } = this.props
    if (typeof onClosed === 'function') {
      onClosed(event)
    }
  }

  private handleClick = (
    item: SwipeActionOption,
    index: number,
    event: CommonEvent
  ): void => {
    const { onClick, autoClose } = this.props

    if (typeof onClick === 'function') {
      onClick(item, index, event)
    }
    if (autoClose) {
      this._reset(false) // TODO: Check behavior
      this.handleClosed(event)
    }
  }

  onTouchEnd = e => {
    const { maxOffsetSize } = this.state
    if (this.moveX === -maxOffsetSize) {
      this._reset(true)
      this.handleOpened(e)
      return
    }
    if (this.moveX === 0) {
      this._reset(false)
      this.handleClosed(e)
      return
    }
    if (this.state._isOpened && this.moveX < 0) {
      this._reset(false)
      this.handleClosed(e)
      return
    }
    if (Math.abs(this.moveX) < maxOffsetSize * this.moveRatio) {
      this._reset(false)
      this.handleClosed(e)
    } else {
      this._reset(true)
      this.handleOpened(e)
    }
  }

  onChange = e => {
    this.moveX = e.detail.x
  }

  public render(): JSX.Element {
    const { componentId, maxOffsetSize, eleWidth, offsetSize } = this.state

    const { options, disabled } = this.props
    const rootClass = classNames('at-swipe-action', this.props.className)

    return (
      <View
        id={`swipeAction-${componentId}`}
        className={rootClass}
        style={{
          width: `${eleWidth}px`
        }}
      >
        <MovableArea
          className='at-swipe-action__area'
          style={{
            width: `${eleWidth}px`
          }}
        >
          <MovableView
            className='at-swipe-action__content'
            direction='horizontal'
            damping={50}
            x={offsetSize}
            onTouchEnd={this.onTouchEnd}
            onChange={this.onChange}
            disabled={disabled}
            style={{
              width: `${eleWidth + maxOffsetSize}px`
            }}
          >
            {this.props.children}
            {Array.isArray(options) && options.length > 0 ? (
              <AtSwipeActionOptions
                options={options}
                componentId={componentId}
                customStyle={{
                  opacity: maxOffsetSize ? 1 : 0
                }}
              >
                {options.map((item, key) => (
                  <View
                    key={`${item.text}-${key}`}
                    style={item.style}
                    onClick={(e): void => this.handleClick(item, key, e)}
                    className={classNames(
                      'at-swipe-action__option',
                      item.className
                    )}
                  >
                    <Text className='option__text'>{item.text}</Text>
                  </View>
                ))}
              </AtSwipeActionOptions>
            ) : null}
          </MovableView>
        </MovableArea>
      </View>
    )
  }
}

AtSwipeAction.defaultProps = {
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false,
  maxDistance: 0,
  areaWidth: 0
}

AtSwipeAction.propTypes = {
  isOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      className: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.array
      ])
    })
  ),

  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}
