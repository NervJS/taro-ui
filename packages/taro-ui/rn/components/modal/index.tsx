import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { Modal, Animated } from 'react-native'
import { AtModalProps, AtModalState } from '../../../types/modal'
import { handleTouchScroll } from '../../common/utils'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtModalHeader from './header/index'

const duration = 300

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
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      opacity: 0
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtModalProps): void {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.animateLayout(isOpened)
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

  private animateLayout(isOpened: boolean, cb?: Function): void {
    let fromValue
    let toValue
    let setStateDelay = 0
    if (isOpened) {
      fromValue = 0
      toValue = 1
    } else {
      setStateDelay = duration
      fromValue = 1
      toValue = 0
    }

    const opacity = new Animated.Value(fromValue)

    this.setState(
      {
        opacity
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              _isOpened: isOpened
            },
            () => {
              cb && cb()
            }
          )
        }, setStateDelay)

        Animated.timing(this.state.opacity, {
          toValue,
          duration,
          useNativeDriver: true
        }).start()
      }
    )
  }

  private close = (): void => {
    this.animateLayout(false, this.handleClose)
  }

  public render(): JSX.Element {
    const { _isOpened, isWEB, opacity } = this.state
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
        <Modal
          animationType='fade'
          transparent={true}
          visible={_isOpened}
          onRequestClose={this.close.bind(this)}
        >
          <Animated.View className={rootClass} style={{ opacity }}>
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
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        dangerouslySetInnerHTML={{
                          __html: content.replace(/\n/g, '<br/>')
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
                    <Button
                      className='at-modal__action--button at-modal__action--button__no-border'
                      onClick={this.handleCancel}
                    >
                      <View className='at-modal__action--button__text'>
                        {cancelText}
                      </View>
                    </Button>
                  )}
                  {confirmText && (
                    <Button
                      className='at-modal__action--button'
                      onClick={this.handleConfirm}
                    >
                      <View className='at-modal__action--button__text at-modal__action--button__text--confirm'>
                        {confirmText}
                      </View>
                    </Button>
                  )}
                </AtModalAction>
              )}
            </View>
          </Animated.View>
        </Modal>
      )
    }

    return (
      <Modal
        animationType='none'
        transparent={true}
        visible={_isOpened}
        onRequestClose={this.close.bind(this)}
      >
        <Animated.View className={rootClass}>
          <View
            className='at-modal__overlay'
            onClick={this.handleClickOverlay}
          />
          <View className='at-modal__container'>{this.props.children}</View>
        </Animated.View>
      </Modal>
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
