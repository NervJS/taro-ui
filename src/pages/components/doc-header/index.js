import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import * as React from 'nervjs'

import './index.scss'

export default class DocsHeader extends React.Component {
  render () {
    const { title } = this.props

    return (
      <View className='doc-header'>
        <View className='doc-header__title'>{title}</View>
      </View>
    )
  }
}

DocsHeader.defaultProps = {
  title: '标题'
}

DocsHeader.propTypes = {
  title: PropTypes.string
}
