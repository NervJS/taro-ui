import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'
import { AtFabProps } from 'types/fab'

export default class AtFab extends AtComponent<AtFabProps> {
  public static defaultProps: AtFabProps
  public static propTypes: InferProps<AtFabProps>

  private onClick (): void {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  public render (): JSX.Element {
    const { size, className } = this.props

    const rootClass = classNames('at-fab', className, {
      [`at-fab--${size}`]: size
    })

    return (
      <View
        className={rootClass}
        onClick={this.onClick.bind(this)}
      >{this.props.children}</View>
    )
  }
}

AtFab.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  onClick: PropTypes.func,
}

AtFab.defaultProps = {
  size: 'normal',
  onClick: () => {},
}
