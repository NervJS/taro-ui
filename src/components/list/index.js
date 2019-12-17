import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtList extends AtComponent {
  render () {
    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !this.props.hasBorder
      },
      this.props.className
    )

    return <View className={rootClass}>{this.props.children}</View>
  }
}

AtList.defaultProps = {
  hasBorder: true
}

AtList.propTypes = {
  hasBorder: PropTypes.bool
}
