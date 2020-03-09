import classNames from 'classnames'
import { AtModalHeaderProps } from 'types/modal'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../../common/component'

export default class AtModalHeader extends AtComponent<AtModalHeaderProps> {
  public render(): JSX.Element {
    const rootClass = classNames('at-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
