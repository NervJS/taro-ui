import Taro from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'
import { AtModalContentProps } from 'types/modal'

export default class AtModalContent extends AtComponent<AtModalContentProps> {
  public render (): JSX.Element {
    const rootClass = classNames('at-modal__content', this.props.className)
    return <ScrollView scrollY className={rootClass}>{this.props.children}</ScrollView>
  }
}
