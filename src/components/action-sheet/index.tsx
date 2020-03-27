import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtActionSheetProps, AtActionSheetState } from 'types/action-sheet'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import AtActionSheetBody from './body/index'
import AtActionSheetFooter from './footer/index'
import AtActionSheetHeader from './header/index'

export default class AtActionSheet extends AtComponent<
  AtActionSheetProps,
  AtActionSheetState
> {
  public static defaultProps: AtActionSheetProps
  public static propTypes: InferProps<AtActionSheetProps>

  public constructor(props: AtActionSheetProps) {
    super(props)
    const { isOpened } = props

    this.state = {
      _isOpened: isOpened
    }
  }

  public componentWillReceiveProps(nextProps: AtActionSheetProps): void {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })

      !isOpened && this.handleClose()
    }
  }

  private handleClose = (): void => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  private handleCancel = (): void => {
    if (typeof this.props.onCancel === 'function') {
      return this.props.onCancel()
    }
    this.close()
  }

  private close = (): void => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
    e.preventDefault()
  }

  public render(): JSX.Element {
    const { title, cancelText, className } = this.props
    const { _isOpened } = this.state

    const rootClass = classNames(
      'at-action-sheet',
      {
        'at-action-sheet--active': _isOpened
      },
      className
    )

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='at-action-sheet__overlay' />
        <View className='at-action-sheet__container'>
          {title && <AtActionSheetHeader>{title}</AtActionSheetHeader>}
          <AtActionSheetBody>{this.props.children}</AtActionSheetBody>
          {cancelText && (
            <AtActionSheetFooter onClick={this.handleCancel}>
              {cancelText}
            </AtActionSheetFooter>
          )}
        </View>
      </View>
    )
  }
}

AtActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
}

AtActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  isOpened: PropTypes.bool.isRequired,
  cancelText: PropTypes.string
}
