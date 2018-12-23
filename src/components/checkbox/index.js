import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtCheckbox extends AtComponent {
  handleClick (option) {
    if (option.disabled) return

    const value = option.value
    const selectedList = new Set(this.props.selectedList)

    if (!selectedList.has(value)) {
      selectedList.add(value)
    } else {
      selectedList.delete(value)
    }

    this.props.onChange(Array.from(selectedList))
  }

  render () {
    const {
      customStyle,
      className,
      options,
      selectedList,
    } = this.props

    return (
      <View
        className={classNames('at-checkbox', className)}
        style={customStyle}
      >
        {
          options.map(option => (
            <View
              key={option.value}
              onClick={this.handleClick.bind(this, option)}
              className={
                option.disabled
                  ? 'at-checkbox__option at-checkbox__option--disabled'
                  : 'at-checkbox__option'
              }
            >
              <View className='at-checkbox__option-wrap'>
                <View className='at-checkbox__option-container'>
                  <View
                    className={
                      selectedList.includes(option.value)
                        ? 'at-checkbox__icon-cnt at-checkbox__icon-cnt--selected'
                        : 'at-checkbox__icon-cnt'
                    }
                  >
                    <Text className='at-icon at-icon-check at-checkbox__icon'></Text>
                  </View>
                  <View className='at-checkbox__title'>{option.label}</View>
                </View>
                {option.desc && <View className='at-checkbox__desc'>{option.desc}</View>}
              </View>
            </View>)
          )
        }
      </View>
    )
  }
}

AtCheckbox.defaultProps = {
  customStyle: '',
  className: '',
  options: [],
  selectedList: [],
  onChange () {},
}

AtCheckbox.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func,
}
