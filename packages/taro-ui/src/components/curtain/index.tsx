import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtCurtainProps } from '../../../types/curtain'

export default class AtCurtain extends React.Component<AtCurtainProps> {
  public static defaultProps: AtCurtainProps
  public static propTypes: InferProps<AtCurtainProps>

  private onClose(e: CommonEvent): void {
    e.stopPropagation()
    this.props.onClose(e)
  }

  private _stopPropagation(e: CommonEvent): void {
    e.stopPropagation()
  }

  public render(): JSX.Element {
    const { className, customStyle, isOpened, closeBtnPosition } = this.props

    const curtainClass = classNames(
      {
        'at-curtain': true,
        'at-curtain--closed': !isOpened
      },
      className
    )
    const btnCloseClass = classNames({
      'at-curtain__btn-close': true,
      [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
    })

    return (
      <View
        className={curtainClass}
        style={customStyle}
        onClick={this._stopPropagation}
      >
        <View className='at-curtain__container'>
          <View className='at-curtain__body'>
            {this.props.children}
            <View
              className={btnCloseClass}
              onClick={this.onClose.bind(this)}
            ></View>
          </View>
        </View>
      </View>
    )
  }
}

AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: (): void => {}
}

AtCurtain.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool,
  closeBtnPosition: PropTypes.string,
  onClose: PropTypes.func
}
