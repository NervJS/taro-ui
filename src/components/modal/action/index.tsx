import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../../common/component'
import { AtModalActionProps } from 'types/modal'

export default class AtModalAction extends AtComponent<AtModalActionProps> {
  public static defaultProps: AtModalActionProps
  public static propTypes: InferProps<AtModalActionProps>

  public render (): JSX.Element {
    const rootClass = classNames(
      'at-modal__footer',
      {
        'at-modal__footer--simple': this.props.isSimple
      },
      this.props.className
    )

    return (
      <View className={rootClass}>
        <View className='at-modal__action'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtModalAction.defaultProps = {
  isSimple: false,
}

AtModalAction.propTypes = {
  isSimple: PropTypes.bool,
}
