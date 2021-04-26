import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtListProps } from 'types/list'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtList extends AtComponent<AtListProps> {
  public static defaultProps: AtListProps
  public static propTypes: InferProps<AtListProps>

  public render(): JSX.Element {
    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !this.props.hasBorder
      },
      this.props.className
    )

    return <View className={rootClass} style={this.props.customStyle}>{this.props.children}</View>
  }
}

AtList.defaultProps = {
  hasBorder: true,
  customStyle: {}
}

AtList.propTypes = {
  hasBorder: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}
