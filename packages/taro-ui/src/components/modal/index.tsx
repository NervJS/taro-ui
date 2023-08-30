import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtModalProps, AtModalState } from '../../../types/modal'
import { handleTouchScroll } from '../../common/utils'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtModalHeader from './header/index'

export default class AtModal extends React.Component<
  AtModalProps,
  AtModalState
> {
  public static defaultProps: AtModalProps
  public static propTypes: InferProps<AtModalProps>

  public constructor(props: AtModalProps) {
    super(props)
    const { isOpened } = props
    this.state = {
      _isOpened: isOpened,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtModalProps): void {
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

  private handleClickOverlay = (): void => {
    if (this.props.closeOnClickOverlay) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose
      )
    }
  }

  private handleClose = (event?: CommonEvent): void => {
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event!)
    }
  }

  private handleCancel = (event: CommonEvent): void => {
    if (typeof this.props.onCancel === 'function') {
      this.props.onCancel(event)
    }
  }

  private handleConfirm = (event: CommonEvent): void => {
    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(event)
    }
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  public render(): JSX.Element {
    const { _isOpened, isWEB } = this.state
    const { title, content, cancelText, confirmText } = this.props
    const rootClass = classNames(
      'at-modal',
      {
        'at-modal--active': _isOpened
      },
      this.props.className
    )

    if (title || content) {
      const isRenderAction = cancelText || confirmText
      return (
        <View className={rootClass}>
          <View
            onClick={this.handleClickOverlay}
            className='at-modal__overlay'
          />
          <View className='at-modal__container'>
            {title && (
              <AtModalHeader>
                <Text>{title}</Text>
              </AtModalHeader>
            )}
            {content && (
              <AtModalContent>
                <View className='content-simple'>
                  {isWEB ? (
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: content.replace(/\\n/g, '<br/>')
                      }}
                    ></Text>
                  ) : (
                    <Text>{content}</Text>
                  )}
                </View>
              </AtModalContent>
            )}
            {isRenderAction && (
              <AtModalAction isSimple>
                {cancelText && (
                  <Button onClick={this.handleCancel}>{cancelText}</Button>
                )}
                {confirmText && (
                  <Button onClick={this.handleConfirm}>{confirmText}</Button>
                )}
              </AtModalAction>
            )}
          </View>
        </View>
      )
    }

    return (
      <View onTouchMove={this.handleTouchMove} className={rootClass}>
        <View className='at-modal__overlay' onClick={this.handleClickOverlay} />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}

AtModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true
}

AtModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  content: PropTypes.string,
  closeOnClickOverlay: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
}
