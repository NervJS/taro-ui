import classNames from 'classnames'
import _forEach from 'lodash/forEach'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtFlexProps } from '../../../types/flex'
import AtComponent from '../../common/component'

export default class AtFlex extends AtComponent<AtFlexProps> {
  public static propTypes: InferProps<AtFlexProps>

  public render(): JSX.Element {
    const rootClass = ['at-row']

    _forEach(this.props, (value, key) => {
      if (key === 'children') {
        return
      }
      if (key === 'alignContent') {
        return rootClass.push(`at-row--${value}`)
      }
      if (key === 'alignContent') {
        return rootClass.push(`at-row__align-content--${value}`)
      }
      rootClass.push(`at-row__${key}--${value}`)
    })

    return <View className={classNames(rootClass)}>{this.props.children}</View>
  }
}

AtFlex.propTypes = {
  wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  dirction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'between',
    'around'
  ])
}
