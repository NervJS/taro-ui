import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'
import { AtModalHeaderProps } from 'types/modal'

export default class AtModalHeader extends AtComponent<AtModalHeaderProps> {
  public render (): JSX.Element {
    const rootClass = classNames('at-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
