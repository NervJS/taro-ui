import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtTagProps } from '../../../types/tag'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary'
}

export default class AtTag extends React.Component<AtTagProps> {
  public static defaultProps: AtTagProps
  public static propTypes: InferProps<AtTagProps>

  private onClick(event: CommonEvent): void {
    const { name = '', active = false, disabled, onClick } = this.props
    if (!disabled) {
      typeof onClick === 'function' &&
        onClick(
          {
            name,
            active
          },
          event
        )
    }
  }

  public render(): JSX.Element {
    const {
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
      active = false,
      customStyle
    } = this.props
    const rootClassName = ['at-tag']

    const classObject = {
      [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      [`at-tag--${type}`]: TYPE_CLASS[type],
      'at-tag--disabled': disabled,
      'at-tag--active': active,
      'at-tag--active-primary': type === 'primary' && active,
      'at-tag--circle': circle,
      'at-tag--small-circle': size === 'small' && circle
    }

    const textClassObject = {
      [`at-tag--${SIZE_CLASS[size]}--text`]: SIZE_CLASS[size],
      [`at-tag--${type}--text`]: TYPE_CLASS[type],
      'at-tag--disabled--text': disabled,
      'at-tag--active--text': active,
      'at-tag--active-primary--text': type === 'primary' && active,
      'at-tag--circle--text': circle,
      'at-tag--small-circle--text': size === 'small' && circle
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        <Text className={classNames(textClassObject)}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {}
}

AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func
}
