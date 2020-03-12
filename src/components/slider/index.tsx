import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtSliderProps, AtSliderState } from 'types/slider'
import { Slider, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtSlider extends AtComponent<
  AtSliderProps,
  AtSliderState
> {
  public static defaultProps: AtSliderProps
  public static propTypes: InferProps<AtSliderProps>

  public constructor(props: AtSliderProps) {
    super(props)
    const { value, min, max } = props
    this.state = {
      _value: AtSlider.clampNumber(value!, min!, max!)
    }
  }

  protected static clampNumber(
    value: number,
    lower: number,
    upper: number
  ): number {
    return Math.max(lower, Math.min(upper, value))
  }

  private handleChanging(e: CommonEvent): void {
    const { _value } = this.state
    const { value }: { value: number } = e.detail

    if (value !== _value) {
      this.setState({ _value: value })
    }
    this.props.onChanging && this.props.onChanging(value)
  }

  private handleChange(e: CommonEvent): void {
    const { value } = e.detail

    this.setState({ _value: value })
    this.props.onChange && this.props.onChange(value)
  }

  public componentWillReceiveProps(props: AtSliderProps): void {
    const { value, min, max } = props
    this.setState({
      _value: AtSlider.clampNumber(value!, min!, max!)
    })
  }

  public render(): JSX.Element {
    const { _value } = this.state
    const {
      customStyle,
      className,
      min,
      max,
      step,
      disabled,
      activeColor,
      backgroundColor,
      blockSize,
      blockColor,
      showValue
    } = this.props

    return (
      <View
        className={classNames(
          {
            'at-slider': true,
            'at-slider--disabled': disabled
          },
          className
        )}
        style={customStyle}
      >
        <View className='at-slider__inner'>
          <Slider
            min={min}
            max={max}
            step={step}
            value={_value}
            disabled={disabled}
            activeColor={activeColor}
            backgroundColor={backgroundColor}
            blockSize={blockSize}
            blockColor={blockColor}
            onChanging={this.handleChanging.bind(this)}
            onChange={this.handleChange.bind(this)}
          ></Slider>
        </View>
        {showValue && <View className='at-slider__text'>{`${_value}`}</View>}
      </View>
    )
  }
}

AtSlider.defaultProps = {
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

AtSlider.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
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
