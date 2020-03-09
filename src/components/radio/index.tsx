import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtRadioProps, RadioOption } from 'types/radio'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtRadio extends AtComponent<AtRadioProps<any>> {
  public static defaultProps: AtRadioProps<any>
  public static propTypes: InferProps<AtRadioProps<any>>

  private handleClick(option: RadioOption<any>, event: CommonEvent) {
    if (option.disabled) return
    this.props.onClick(option.value, event)
  }

  public render(): JSX.Element {
    const { customStyle, className, options, value } = this.props

    return (
      <View className={classNames('at-radio', className)} style={customStyle}>
        {options.map(option => (
          <View
            key={option.value}
            onClick={this.handleClick.bind(this, option)}
            className={classNames({
              'at-radio__option': true,
              'at-radio__option--disabled': option.disabled
            })}
          >
            <View className='at-radio__option-wrap'>
              <View className='at-radio__option-container'>
                <View className='at-radio__title'>{option.label}</View>
                <View
                  className={classNames({
                    'at-radio__icon': true,
                    'at-radio__icon--checked': value === option.value
                  })}
                >
                  <Text className='at-icon at-icon-check'></Text>
                </View>
              </View>
              {option.desc && (
                <View className='at-radio__desc'>{option.desc}</View>
              )}
            </View>
          </View>
        ))}
      </View>
    )
  }
}

AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  onClick: () => {}
}

AtRadio.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
}
