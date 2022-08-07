import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtCheckboxProps } from '../../../types/checkbox'
import AtIcon from '../icon'

export default class AtCheckbox extends React.Component<AtCheckboxProps<any>> {
  public static defaultProps: AtCheckboxProps<any>
  public static propTypes: InferProps<AtCheckboxProps<any>>

  private handleClick(idx: number): void {
    const { selectedList, options } = this.props
    const option = options[idx]
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

  public render(): JSX.Element {
    const { customStyle, className, options, selectedList, border } = this.props

    const rootCls = classNames('at-checkbox', className)

    return (
      <View className={rootCls} style={customStyle}>
        {options.map((option, idx) => {
          const { value, disabled, label, desc } = option
          const optionCls = classNames('at-checkbox__option', {
            'at-checkbox__option--disabled': disabled,
            'at-checkbox__option--selected': selectedList.includes(value)
          })

          return (
            <View
              className={optionCls}
              key={value}
              onClick={this.handleClick.bind(this, idx)}
            >
              <View
                className={classNames({
                  'at-checkbox__option-wrap': true,
                  'at-checkbox__option-wrap--without-border':
                    !border || idx === 0
                })}
              >
                <View
                  className={classNames({
                    'at-checkbox__option-cnt': true,
                    'at-checkbox__option-cnt--disabled': disabled
                  })}
                >
                  <View
                    className={classNames({
                      'at-checkbox__icon-cnt': true,
                      'at-checkbox__icon-cnt--check':
                        selectedList.includes(value)
                    })}
                  >
                    <AtIcon
                      className={classNames({
                        'at-checkbox__icon-cnt--check':
                          selectedList.includes(value)
                      })}
                      value='check'
                      color='#FFF'
                    />
                  </View>
                  <View className='at-checkbox__title'>{label}</View>
                </View>
                {desc && (
                  <View
                    className={classNames({
                      'at-checkbox__desc': true,
                      'at-checkbox__desc--disabled': disabled
                    })}
                  >
                    {desc}
                  </View>
                )}
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

AtCheckbox.defaultProps = {
  customStyle: '',
  className: '',
  border: true,
  options: [],
  selectedList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
}

AtCheckbox.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func
}
