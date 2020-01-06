import Taro, { Component } from '@tarojs/taro'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'

import './index.scss'

export interface DocsHeaderProps {
  title?: string
}

export default class DocsHeader extends Component<DocsHeaderProps> {
  public static defaultProps: DocsHeaderProps
  public static propTypes: InferProps<DocsHeaderProps>

  public render (): JSX.Element {
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
