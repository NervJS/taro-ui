import * as React from 'nervjs'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { delayQuerySelector, getEventDetail } from '../../common/utils'
import AtComponent from '../../common/component'


export default class AtRange extends AtComponent {
  constructor (props) {
    super(...arguments)
    const { max, min } = props
    // range 宽度
    this.width = 0
    // range 到屏幕左边的距离
    this.left = 0
    this.deltaValue = (max - min)
    this.currentSlider = ''
    this.state = {
      aX: 0,
      bX: 0
    }
  }

  handleClick = event => {
    if (this.currentSlider && !this.props.disabled) {
      let sliderValue = 0
      const detail = getEventDetail(event)
      sliderValue = detail.x - this.left
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
    const distance = Math.min(Math.max(targetValue, 0), this.width)
    const sliderValue = Math.floor((distance / this.width) * 100)
    if (funcName) {
      this.setState({
        [sliderName]: sliderValue
      }, () => (this.triggerEvent(funcName)))
    } else {
      this.setState({
        [sliderName]: sliderValue
      })
    }
  }

  setValue (value) {
    const aX = Math.round(((value[0] - this.props.min) / this.deltaValue) * 100) // fix issue #670
    const bX = Math.round(((value[1] - this.props.min) / this.deltaValue) * 100) // fix issue #670
    this.setState({ aX, bX })
  }

  triggerEvent (funcName) {
    const { aX, bX } = this.state
    const a = Math.round((aX / 100) * this.deltaValue) + this.props.min // fix issue #670
    const b = Math.round((bX / 100) * this.deltaValue) + this.props.min // fix issue #670
    const result = [a, b].sort((x, y) => x - y)

    if (funcName === 'onChange') {
      this.props.onChange(result)
    } else if (funcName === 'onAfterChange') {
      this.props.onAfterChange(result)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { value } = nextProps
    if (
      this.props.value[0] !== value[0]
      && this.props.value[1] !== value[1]
    ) {
      this.setValue(value)
    }
  }

  componentDidMount () {
    const { value } = this.props
    delayQuerySelector(this, '.at-range__container', 0)
      .then(rect => {
        this.width = Math.round(rect[0].width)
        this.left = Math.round(rect[0].left)
        this.setValue(value)
      })
    // this.triggerEvent('onChange')
    // this.triggerEvent('onAfterChange')
  }

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

    const rootCls = classNames('at-range', {
      'at-range--disabled': disabled
    }, className)

    const { aX, bX } = this.state
    const sliderCommonStyle = {
      width: blockSize ? `${blockSize}PX` : '',
      height: blockSize ? `${blockSize}PX` : '',
      marginLeft: blockSize ? `${-blockSize / 2}PX` : '',
    }
    const sliderAStyle = {
      ...sliderCommonStyle,
      left: `${aX}%`
    }
    const sliderBStyle = {
      ...sliderCommonStyle,
      left: `${bX}%`
    }
    const containerStyle = {
      height: blockSize ? `${blockSize}PX` : '',
    }
    const smallerX = Math.min(aX, bX)
    const deltaX = Math.abs(aX - bX)
    const atTrackStyle = {
      left: `${smallerX}%`,
      width: `${deltaX}%`
    }

    return <View className={rootCls} style={customStyle} onClick={this.handleClick}>
      <View className='at-range__container' style={containerStyle}>
        <View className='at-range__rail' style={railStyle}></View>
        <View className='at-range__track' style={this.mergeStyle(atTrackStyle, trackStyle)}></View>
        <View
          className='at-range__slider'
          style={this.mergeStyle(sliderAStyle, sliderStyle)}
          onTouchMove={this.handleTouchMove.bind(this, 'aX')}
          onTouchEnd={this.handleTouchEnd.bind(this, 'aX')}
        >
        </View>
        <View
          className='at-range__slider'
          style={this.mergeStyle(sliderBStyle, sliderStyle)}
          onTouchMove={this.handleTouchMove.bind(this, 'bX')}
          onTouchEnd={this.handleTouchEnd.bind(this, 'bX')}
        >
        </View>
      </View>
    </View>
  }
}

AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0,
  onChange: () => {},
  onAfterChange: () => {},
}

AtRange.propTypes = {
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
  isTest: PropTypes.bool,
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  blockSize: PropTypes.number,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
}
