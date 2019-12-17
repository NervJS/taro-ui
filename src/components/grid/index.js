import * as React from 'nervjs'
import { View, Text, Image } from '@tarojs/components'
import _chunk from 'lodash/chunk'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isObject from 'lodash/isObject'
import _isFunction from 'lodash/isFunction'
import AtComponent from '../../common/component'

export default class AtGrid extends AtComponent {
  handleClick = (item, index, row, ...arg) => {
    const { onClick, columnNum } = this.props
    if (_isFunction(onClick)) {
      /* prettier-ignore */
      const clickIndex = (row * columnNum) + index
      onClick(item, clickIndex, ...arg)
    }
  }

  render () {
    const { data, mode, columnNum, hasBorder } = this.props

    if (Array.isArray(data) && data.length === 0) {
      return null
    }

    const gridGroup = _chunk(data, columnNum)

    const bodyClass = classNames(
      ['at-grid__flex-item', 'at-grid-item', `at-grid-item--${mode}`],
      {
        'at-grid-item--no-border': !hasBorder
      }
    )

    return (
      <View className={classNames('at-grid', this.props.className)}>
        {gridGroup.map((item, i) => (
          <View className='at-grid__flex' key={`at-grid-group-${i}`}>
            {item.map((childItem, index) => (
              <View
                key={`at-grid-item-${index}`}
                className={classNames(bodyClass, {
                  'at-grid-item--last': index === columnNum - 1
                })}
                onClick={this.handleClick.bind(this, childItem, index, i)}
                style={{
                  flex: `0 0 ${100 / columnNum}%`
                }}
              >
                <View className='at-grid-item__content'>
                  <View className='at-grid-item__content-inner'>
                    <View className='content-inner__icon'>
                      {childItem.image && (
                        <Image
                          className='content-inner__img'
                          src={childItem.image}
                          mode='scaleToFill'
                        />
                      )}
                      {_isObject(childItem.iconInfo) && !childItem.image && (
                        <Text
                          className={classNames(
                            childItem.iconInfo.prefixClass || 'at-icon',
                            {
                              [`${childItem.iconInfo.prefixClass ||
                                'at-icon'}-${
                                childItem.iconInfo.value
                              }`]: childItem.iconInfo.value
                            },
                            childItem.iconInfo.className
                          )}
                          style={this.mergeStyle(
                            {
                              color: childItem.iconInfo.color,
                              fontSize: `${childItem.iconInfo.size || 24}px`
                            },
                            childItem.iconInfo.customStyle
                          )}
                        />
                      )}
                    </View>
                    <Text className='content-inner__text'>
                      {childItem.value}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    )
  }
}

AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
}

AtGrid.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
  hasBorder: PropTypes.bool,
  columnNum: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      value: PropTypes.string,
      iconInfo: PropTypes.shape({
        size: PropTypes.number,
        value: PropTypes.string,
        color: PropTypes.string,
        prefixClass: PropTypes.string,
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
      })
    })
  )
}
