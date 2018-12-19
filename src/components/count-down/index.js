import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

const toSeconds = (day, hours, minutes, seconds) => (day * 60 * 60 * 24) + (hours * 60 * 60) + (minutes * 60) + seconds

export default class AtCountDown extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    isCard: false,
    isShowDay: false,
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
    onTimeUp: () => {}
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    isCard: PropTypes.bool,
    isShowDay: PropTypes.bool,
    format: PropTypes.object,
    day: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    onTimeUp: PropTypes.func
  }

  constructor () {
    super(...arguments)
    const { day, hours, minutes, seconds } = this.props
    this.seconds = toSeconds(day, hours, minutes, seconds)
    this.state = { day, hours, minutes, seconds }
    this.timer = null
  }

  formatNum (num) {
    return num <= 9 ? `0${num}` : `${num}`
  }

  setTimer () {
    this.timer = setInterval(() => {
      let [day, hours, minutes, seconds] = [0, 0, 0, 0]
      if (this.seconds > 0) {
        day = Math.floor(this.seconds / (60 * 60 * 24))
        hours = Math.floor(this.seconds / (60 * 60)) - (day * 24)
        minutes = Math.floor(this.seconds / 60) - (day * 24 * 60) - (hours * 60)
        seconds = Math.floor(this.seconds) - (day * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
      }
      this.setState({ day, hours, minutes, seconds })
      this.seconds--
      if (this.seconds < 0) {
        clearInterval(this.timer)
        this.timer = null
        this.props.onTimeUp()
      }
    }, 1000)
  }

  clearTimer () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  componentWillReceiveProps (nextProps) {
    const props = this.props
    if (nextProps.day === props.day
      && nextProps.hours === props.hours
      && nextProps.minutes === props.minutes
      && nextProps.seconds === props.seconds
    ) return

    const { day, hours, minutes, seconds } = nextProps
    this.seconds = toSeconds(day, hours, minutes, seconds)
    this.clearTimer()
    this.setTimer()
  }

  componentDidMount () {
    this.setTimer()
  }

  componentWillUnmount () {
    this.clearTimer()
  }

  componentDidHide () {
    this.clearTimer()
  }

  componentDidShow () {
    this.setTimer()
  }

  render () {
    const {
      className,
      customStyle,
      format,
      isShowDay,
      isCard
    } = this.props
    const {
      day,
      hours,
      minutes,
      seconds
    } = this.state

    return (
      <View
        className={
          classNames({
            'at-count-down': true,
            'at-count-down--card': isCard
          }, className)}
        style={customStyle}
      >
        {
          isShowDay
            ? <View className='at-count-down__item'>
              <View className='at-count-down__time-box'>
                <Text className='at-count-down__time'>
                  {this.formatNum(day)}
                </Text>
              </View>
              <Text className='at-count-down__separator'>{format.day}</Text>
            </View>
            : null
        }
        <View className='at-count-down__item'>
          <View className='at-count-down__time-box'>
            <Text className='at-count-down__time'>
              {this.formatNum(hours)}
            </Text>
          </View>
          <Text className='at-count-down__separator'>{format.hours}</Text>
        </View>
        <View className='at-count-down__item'>
          <View className='at-count-down__time-box'>
            <Text className='at-count-down__time'>
              {this.formatNum(minutes)}
            </Text>
          </View>
          <Text className='at-count-down__separator'>{format.minutes}</Text>
        </View>
        <View className='at-count-down__item'>
          <View className='at-count-down__time-box'>
            <Text className='at-count-down__time'>
              {this.formatNum(seconds)}
            </Text>
          </View>
          <Text className='at-count-down__separator'>{format.seconds}</Text>
        </View>
      </View>
    )
  }
}
