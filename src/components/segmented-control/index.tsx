import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtSegmentedControlProps } from 'types/segmented-control'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import { initTestEnv, pxTransform } from '../../common/utils'

initTestEnv()

export default class AtSegmentedControl extends AtComponent<
  AtSegmentedControlProps
> {
  public static defaultProps: AtSegmentedControlProps
  public static propTypes: InferProps<AtSegmentedControlProps>

  private handleClick(index: number, event: CommonEvent) {
    if (this.props.disabled) return
    this.props.onClick(index, event)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      disabled,
      values,
      selectedColor,
      current,
      color,
      fontSize
    } = this.props

    const rootStyle = {
      borderColor: selectedColor
    }
    const itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize!),
      borderColor: selectedColor,
      backgroundColor: color
    }
    const selectedItemStyle = {
      color,
      fontSize: pxTransform(fontSize!),
      borderColor: selectedColor,
      backgroundColor: selectedColor
    }
    const rootCls = classNames(
      'at-segmented-control',
      {
        'at-segmented-control--disabled': disabled
      },
      className
    )

    return (
      <View
        className={rootCls}
        style={this.mergeStyle(rootStyle, customStyle!)}
      >
        {values.map((value, i) => (
          <View
            className={classNames('at-segmented-control__item', {
              'at-segmented-control__item--active': current === i
            })}
            style={current === i ? selectedItemStyle : itemStyle}
            key={value}
            onClick={this.handleClick.bind(this, i)}
          >
            {value}
          </View>
        ))}
      </View>
    )
  }
}

AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 0,
  disabled: false,
  selectedColor: '',
  values: [],
  onClick: () => {}
}

AtSegmentedControl.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  values: PropTypes.array,
  onClick: PropTypes.func
}
