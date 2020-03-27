import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtActionSheetFooterProps } from 'types/action-sheet'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../../common/component'

export default class AtActionSheetFooter extends AtComponent<
  AtActionSheetFooterProps
> {
  public static defaultProps: AtActionSheetFooterProps
  public static propTypes: InferProps<AtActionSheetFooterProps>

  private handleClick = (...args: any[]): void => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(...args)
    }
  }

  public render(): JSX.Element {
    const rootClass = classNames(
      'at-action-sheet__footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.defaultProps = {
  onClick: () => {}
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
