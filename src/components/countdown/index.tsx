import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtCountDownProps, AtCountdownState } from 'types/countdown'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import AtCountdownItem from './item'

const toSeconds = (
  day: number,
  hours: number,
  minutes: number,
  seconds: number
): number => day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds

export default class AtCountdown extends AtComponent<
  AtCountDownProps,
  AtCountdownState
> {
  public static defaultProps: AtCountDownProps
  public static propTypes: InferProps<AtCountDownProps>

  private seconds: number
  private timer: NodeJS.Timeout | number | undefined

  public constructor(props: AtCountDownProps) {
    super(props)
    const { day, hours, minutes, seconds } = this.props
    this.seconds = toSeconds(day!, hours!, minutes!, seconds!)
    const {
      day: _day,
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds
    } = this.calculateTime()

    this.state = {
      _day,
      _hours,
      _minutes,
      _seconds
    }
    this.timer = undefined
  }

  private setTimer(): void {
    if (!this.timer) this.countdonwn()
  }

  private clearTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer as number)
      this.timer = undefined
    }
  }

  private calculateTime() {
    let [day, hours, minutes, seconds] = [0, 0, 0, 0]

    if (this.seconds > 0) {
      day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0
      hours = Math.floor(this.seconds / (60 * 60)) - day * 24
      minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60
      seconds =
        Math.floor(this.seconds) -
        day * 24 * 60 * 60 -
        hours * 60 * 60 -
        minutes * 60
    }
    return {
      day,
      hours,
      minutes,
      seconds
    }
  }

  private countdonwn(): void {
    const { day, hours, minutes, seconds } = this.calculateTime()

    this.setState({
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    })
    this.seconds--

    if (this.seconds < 0) {
      this.clearTimer()
      this.props.onTimeUp && this.props.onTimeUp()
      return
    }

    this.timer = setTimeout(() => {
      this.countdonwn()
    }, 1000)
  }

  public componentWillReceiveProps(nextProps: AtCountDownProps): void {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return

    const { day, hours, minutes, seconds } = nextProps
    this.seconds = toSeconds(day!, hours!, minutes!, seconds!)
    this.clearTimer()
    this.setTimer()
  }

  public componentDidMount(): void {
    this.setTimer()
  }

  public componentWillUnmount(): void {
    this.clearTimer()
  }

  public componentDidHide(): void {
    this.clearTimer()
  }

  public componentDidShow(): void {
    this.setTimer()
  }

  public render(): JSX.Element {
    const {
      className,
      customStyle,
      format,
      isShowDay,
      isCard,
      isShowHour
    } = this.props
    const { _day, _hours, _minutes, _seconds } = this.state

    return (
      <View
        className={classNames(
          {
            'at-countdown': true,
            'at-countdown--card': isCard
          },
          className
        )}
        style={customStyle}
      >
        {isShowDay && <AtCountdownItem num={_day} separator={format!.day} />}
        {isShowHour && (
          <AtCountdownItem num={_hours} separator={format!.hours} />
        )}
        <AtCountdownItem num={_minutes} separator={format!.minutes} />
        <AtCountdownItem num={_seconds} separator={format!.seconds} />
      </View>
    )
  }
}

AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isCard: false,
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  onTimeUp() {}
}

AtCountdown.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isCard: PropTypes.bool,
  isShowDay: PropTypes.bool,
  isShowHour: PropTypes.bool,
  format: PropTypes.object,
  day: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onTimeUp: PropTypes.func
}
