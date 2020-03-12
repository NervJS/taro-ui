import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtMessageProps, AtMessageState } from 'types/message'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtMessage extends AtComponent<
  AtMessageProps,
  AtMessageState
> {
  public static defaultProps: AtMessageProps
  public static propTypes: InferProps<AtMessageProps>

  private _timer: NodeJS.Timeout | number | null

  public constructor(props: AtMessageProps) {
    super(props)
    this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000
    }
    this._timer = null
  }

  private bindMessageListener(): void {
    Taro.eventCenter.on('atMessage', (options = {}) => {
      const { message, type, duration } = options
      const newState = {
        _isOpened: true,
        _message: message,
        _type: type,
        _duration: duration || this.state._duration
      }
      this.setState(newState, () => {
        clearTimeout(this._timer as number)
        this._timer = setTimeout(() => {
          this.setState({
            _isOpened: false
          })
        }, this.state._duration)
      })
    })
    // 绑定函数
    Taro.atMessage = Taro.eventCenter.trigger.bind(
      Taro.eventCenter,
      'atMessage'
    )
  }

  public componentDidShow(): void {
    this.bindMessageListener()
  }

  public componentDidMount(): void {
    this.bindMessageListener()
  }

  public componentDidHide(): void {
    Taro.eventCenter.off('atMessage')
  }

  public componentWillUnmount(): void {
    Taro.eventCenter.off('atMessage')
  }

  public render(): JSX.Element {
    const { className, customStyle } = this.props
    const { _message, _isOpened, _type } = this.state
    const rootCls = classNames(
      {
        'at-message': true,
        'at-message--show': _isOpened,
        'at-message--hidden': !_isOpened
      },
      `at-message--${_type}`,
      className
    )

    return (
      <View className={rootCls} style={customStyle}>
        {_message}
      </View>
    )
  }
}

AtMessage.defaultProps = {
  customStyle: '',
  className: ''
}

AtMessage.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
