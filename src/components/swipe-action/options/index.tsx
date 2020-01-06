import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'
import { delayQuerySelector } from '../../../common/utils'
import { AtSwipeActionOptionsProps } from 'types/swipe-action'

export default class AtSwipeActionOptions extends AtComponent<AtSwipeActionOptionsProps> {
  private trrigerOptionsDomUpadte (): void {
    delayQuerySelector(
      this,
      `#swipeActionOptions-${this.props.componentId}`
    ).then(res => {
      this.props.onQueryedDom(res[0])
    })
  }

  public componentDidMount (): void {
    this.trrigerOptionsDomUpadte()
  }

  public componentWillReceiveProps (nextProps: AtSwipeActionOptionsProps): void {
    if (nextProps.options !== this.props.options) {
      this.trrigerOptionsDomUpadte()
    }
  }

  public render (): JSX.Element {
    const rootClass = classNames(
      'at-swipe-action__options',
      this.props.className
    )

    return (
      <View
        id={`swipeActionOptions-${this.props.componentId}`}
        className={rootClass}
      >
        {this.props.children}
      </View>
    )
  }
}
