import classNames from 'classnames'
import { AtModalContentProps } from 'types/modal'
import { ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../../common/component'

export default class AtModalContent extends AtComponent<AtModalContentProps> {
  public render(): JSX.Element {
    const rootClass = classNames('at-modal__content', this.props.className)
    return (
      <ScrollView scrollY className={rootClass}>
        {this.props.children}
      </ScrollView>
    )
  }
}
