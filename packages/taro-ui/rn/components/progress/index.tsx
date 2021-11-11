import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Icon } from '@tarojs/components'
import { AtProgressProps } from '../../../types/progress'

export default class AtProgress extends React.Component<AtProgressProps> {
  public static propTypes: InferProps<AtProgressProps>

  public constructor(props: AtProgressProps) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  get iconStatus() {
    const { status } = this.props
    if (status === 'error') {
      return 'cancel'
    }
    if (status === 'success') {
      return 'success'
    }
  }

  onLayout = event => {
    const { width } = event.nativeEvent.layout
    this.setState({ width })
  }

  public render(): JSX.Element {
    const { color } = this.props
    let { percent } = this.props
    const { width } = this.state
    const { strokeWidth, status, isHidePercent } = this.props

    if (typeof percent !== 'number') {
      percent = 0
    }

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = classNames(
      'at-progress',
      {
        [`at-progress--${status}`]: !!status,
      },
      this.props.className,
    )
    // const iconClass = classNames('at-icon', {
    //   'at-icon-close-circle': status === 'error',
    //   'at-icon-check-circle': status === 'success'
    // })

    const progressStyle = {
      width: percent && (width * parseInt(percent)) / 100,
    }

    if (color) {
      progressStyle.backgroundColor = color
    }

    if (strokeWidth) {
      progressStyle.height = strokeWidth
    }

    return (
      <View className={rootClass}>
        <View className='at-progress__outer'>
          <View className='at-progress__outer-inner' onLayout={this.onLayout}>
            <View
              className='at-progress__outer-inner-background'
              style={progressStyle}
            />
          </View>
        </View>

        {!isHidePercent && (
          <View className='at-progress__content'>
            {!status || status === 'progress' ? (
              `${percent}%`
            ) : (
              // <Text className={iconClass}></Text>
              <Icon size='20' type={this.iconStatus} />
            )}
          </View>
        )}
      </View>
    )
  }
}

AtProgress.propTypes = {
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool,
}
