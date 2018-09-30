import Taro from '@tarojs/taro'
import { View, Slider } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtSlider extends AtComponent {
  constructor () {
    super(...arguments)
    const { value } = this.props
    this.setState({ value })
  }

  static defaultProps = {
    customStyle: '',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    disabled: false,
    activeColor: '#6190e8',
    backgroundColor: '#e9e9e9',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false,
    onChange: () => {},
    onChanging: () => {}
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
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    activeColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    blockSize: PropTypes.number,
    blockColor: PropTypes.string,
    showValue: PropTypes.bool,
    onChange: PropTypes.func,
    onChanging: PropTypes.func
  }

  handleChanging (e) {
    const { value } = e.detail
    this.setState({ value })
    this.props.onChanging(e.detail.value)
  }

  render () {
    const {
      customStyle,
      className,
      min,
      max,
      step,
      value,
      disabled,
      activeColor,
      backgroundColor,
      blockSize,
      blockColor,
      showValue
    } = this.props

    return (
      <View
        className={
          classNames({
            'at-slider': true,
            'at-slider--disabled': disabled
          }, className)
        }
        style={customStyle}
      >
        <View className='at-slider__inner'>
          <Slider min={min} max={max} step={step} value={value} disabled={disabled} activeColor={activeColor} backgroundColor={backgroundColor} blockSize={blockSize} blockColor={blockColor} onChanging={this.handleChanging.bind(this)}></Slider>
        </View>
        {
          showValue && <View className='at-slider__text'>{value}</View>
        }
      </View>
    )
  }
}
