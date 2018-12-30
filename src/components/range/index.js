import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => {}

export default class AtRange extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    sliderStyle: '',
    railStyle: '',
    trackStyle: '',
    value: [0, 0],
    min: 0,
    max: 100,
    disabled: false,
    blockSize: 28,
    onChange: defaultFunc,
    onAfterChange: defaultFunc
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
    sliderStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    railStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    trackStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    value: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
    blockSize: PropTypes.number,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
  }

  constructor (props) {
    super(...arguments)
    const { max, min } = props
    // range 宽度
    this.width = 0
    // range 到屏幕左边的距离
    this.left = 0
    this.deltaValue = max - min
    this.currentSlider = ''
    this.state = {
      slider1X: 0,
      slider2X: 0
    }
  }

  handleClick (event) {
    if (this.currentSlider && !this.props.disabled) {
      const env = Taro.getEnv()
      let sliderValue = 0
      if (env === Taro.ENV_TYPE.WEB) {
        sliderValue = event.pageX - this.left
      } else if (env === Taro.ENV_TYPE.WEAPP) {
        sliderValue = event.target.x - this.left
      }
      this.setSliderValue(this.currentSlider, sliderValue, 'onChange')
    }
  }

  handleTouchMove (sliderName, event) {
    if (this.props.disabled) return
    event.stopPropagation()

    const clientX = event.touches[0].clientX
    this.setSliderValue(sliderName, clientX - this.left, 'onChange')
  }

  handleTouchEnd (sliderName) {
    if (this.props.disabled) return

    this.currentSlider = sliderName
    this.triggerEvent('onAfterChange')
  }

  setSliderValue (sliderName, targetValue, funcName) {
    let value = 0
    if (targetValue < 0) {
      value = 0
    } else if (targetValue > this.width) {
      value = this.width
    } else {
      value = targetValue
    }

    value = Math.floor((value / this.width) * 100)
    if (funcName) {
      this.setState({
        [sliderName]: value
      }, () => (this.triggerEvent(funcName)))
    } else {
      this.setState({
        [sliderName]: value
      })
    }
  }

  setValue (value) {
    const slider1X = Math.round((value[0] / this.deltaValue) * 100)
    const slider2X = Math.round((value[1] / this.deltaValue) * 100)
    this.setState({
      slider1X,
      slider2X
    })
  }

  triggerEvent (funcName) {
    const { slider1X, slider2X } = this.state
    const value1 = Math.round((slider1X / 100) * this.deltaValue)
    const value2 = Math.round((slider2X / 100) * this.deltaValue)
    const valueArr = []
    if (value1 > value2) {
      valueArr.push(value2)
      valueArr.push(value1)
    } else {
      valueArr.push(value1)
      valueArr.push(value2)
    }

    if (funcName === 'onChange') {
      this.props.onChange(valueArr)
    } else if (funcName === 'onAfterChange') {
      this.props.onAfterChange(valueArr)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { value } = nextProps
    if (this.props.value[0] !== value[0] && this.props.value[1] !== value[1]) {
      this.setValue(value)
    }
  }

  componentDidMount () {
    // 获取 range 宽度
    const env = Taro.getEnv()
    const { value } = this.props
    // 异步解决获取 offsetWidth 不准确问题
    setTimeout(() => {
      if (env === Taro.ENV_TYPE.WEB) {
        this.width = Math.round(this.rangeRef.vnode.dom.offsetWidth)
        this.left = Math.round(this.rangeRef.vnode.dom.offsetLeft)
        this.setValue(value)
      } else if (env === Taro.ENV_TYPE.WEAPP) {
        this.rangeRef.boundingClientRect(rect => {
          this.width = Math.round(rect.width)
          this.left = Math.round(rect.left)
          this.setValue(value)
        }).exec()
      }
    })
  }

  getRangeRef = node => (this.rangeRef = node)

  render () {
    const {
      className,
      customStyle,
      sliderStyle,
      railStyle,
      trackStyle,
      blockSize,
      disabled
    } = this.props

    const { slider1X, slider2X } = this.state
    const sliderCommonStyle = {
      width: `${blockSize}PX`,
      height: `${blockSize}PX`,
      marginLeft: `${-blockSize / 2}PX`
    }
    const slider1Style = {
      ...sliderCommonStyle,
      left: `${slider1X}%`
    }
    const slider2Style = {
      ...sliderCommonStyle,
      left: `${slider2X}%`
    }
    const containerStyle = {
      height: `${blockSize}PX`,
    }

    const smallX = slider1X > slider2X ? slider2X : slider1X
    const deltaX = Math.abs(slider1X - slider2X)
    const atTrackStyle = {
      left: `${smallX}%`,
      width: `${deltaX}%`
    }

    return (
      <View
        className={
          classNames({
            'at-range': true,
            'at-range--disabled': disabled
          }, className)}
        style={customStyle}
        onClick={this.handleClick.bind(this)}
      >
        <View
          className='at-range__container'
          style={containerStyle}
          ref={this.getRangeRef}
        >
          <View
            className='at-range__rail'
            style={railStyle}
          >
          </View>
          <View
            className='at-range__track'
            style={this.mergeStyle(atTrackStyle, trackStyle)}
          ></View>
          <View
            style={this.mergeStyle(slider1Style, sliderStyle)}
            className='at-range__slider'
            onTouchMove={this.handleTouchMove.bind(this, 'slider1X')}
            onTouchEnd={this.handleTouchEnd.bind(this, 'slider1X')}
          >
          </View>
          <View
            style={this.mergeStyle(slider2Style, sliderStyle)}
            className='at-range__slider'
            onTouchMove={this.handleTouchMove.bind(this, 'slider2X')}
            onTouchEnd={this.handleTouchEnd.bind(this, 'slider2X')}
          >
          </View>
        </View>
      </View>
    )
  }
}
