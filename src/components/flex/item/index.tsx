import classNames from 'classnames'
import _forEach from 'lodash/forEach'
import PropTypes, { InferProps } from 'prop-types'
import { AtFlexItemProps } from 'types/flex'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../../common/component'

export default class AtFlexItem extends AtComponent<AtFlexItemProps> {
  public static propTypes: InferProps<AtFlexItemProps>

  public render(): JSX.Element {
    const rootClass = ['at-col']

    _forEach(this.props, (value, key) => {
      if (key === 'isAuto' && value) {
        return rootClass.push('at-col--auto')
      }
      if (key === 'isWrap' && value) {
        return rootClass.push('at-col--wrap')
      }
      if (key === 'size' && value) {
        rootClass.push(`at-col-${value}`)
      }
      rootClass.push(`at-col__${key}--${value}`)
    })

    return <View className={classNames(rootClass)}>{this.props.children}</View>
  }
}

AtFlexItem.propTypes = {
  isAuto: PropTypes.bool,
  isWrap: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'bottom', 'center']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}
