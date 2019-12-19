import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtCheckbox extends AtComponent {
  handleClick (option) {
    const { selectedList } = this.props
    const { disabled, value } = option
    if (disabled) return

    const selectedSet = new Set(selectedList)
    if (!selectedSet.has(value)) {
      selectedSet.add(value)
    } else {
      selectedSet.delete(value)
    }
    this.props.onChange([...selectedSet])
  }

  render () {
    const {
      customStyle,
      className,
      options,
      selectedList,
    } = this.props

    const rootCls = classNames('at-checkbox', className)

    return <View className={rootCls} style={customStyle}>
      { options.map(option => {
        const { value, disabled, label, desc } = option
        const optionCls = classNames('at-checkbox__option', {
          'at-checkbox__option--disabled': disabled,
          'at-checkbox__option--selected': selectedList.includes(value)
        })
        return <View className={optionCls} key={value} onClick={this.handleClick.bind(this, option)} >
          <View className='at-checkbox__option-wrap'>
            <View className='at-checkbox__option-cnt'>
              <View className='at-checkbox__icon-cnt'>
                <Text className='at-icon at-icon-check'></Text>
              </View>
              <View className='at-checkbox__title'>{label}</View>
            </View>
            {desc && <View className='at-checkbox__desc'>{desc}</View>}
          </View>
        </View>
      })}
    </View>
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
