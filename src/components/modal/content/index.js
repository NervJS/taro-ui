import * as React from 'nervjs'
import { ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'

export default class AtModalContent extends AtComponent {
  render () {
    const rootClass = classNames('at-modal__content', this.props.className)
    return <ScrollView scrollY className={rootClass}>{this.props.children}</ScrollView>
  }
}
