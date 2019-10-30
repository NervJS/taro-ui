import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import _isFunction from 'lodash/isFunction'
import AtComponent from '../../../../common/component'
import { AtActionSheetItemProps } from 'types/action-sheet-item'

export default class AtActionSheetItem extends AtComponent<AtActionSheetItemProps> {
  public static defaultProps: AtActionSheetItemProps
  public static propTypes: InferProps<AtActionSheetItemProps>

  private handleClick = (args: any): void => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(args)
    }
  }

  public render (): JSX.Element {
    const rootClass = classNames('at-action-sheet__item', this.props.className)

    return (
      <View className={rootClass} onClick={this.handleClick}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetItem.defaultProps = {
  onClick: () => {}
}

AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
}
