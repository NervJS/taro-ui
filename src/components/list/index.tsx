import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'
import { AtListProps } from 'types/list'

export default class AtList extends AtComponent<AtListProps> {
  public static defaultProps: AtListProps
  public static propTypes: InferProps<AtListProps>

  public render (): JSX.Element {
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
