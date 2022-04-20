import React from 'react'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { AtNoticeBarProps } from '../../../types/notice-bar'
import AtIcon from '../icon'
import { noop } from '../../utils'

const AtNoticeBar: React.FC<AtNoticeBarProps> = ({
  type,
  actionText,
  content,
  single,
  showClose,
  customStyle,
  onClose,
  onAction
}) => {
  const rootClassName = `at-notice-bar at-notice-bar__${type}`
  const contentClassName = classNames(
    'at-notice-bar__content',
    `at-notice-bar__content--${type}`,
    {
      'at-notice-bar__content--single': single
    }
  )

  return (
    <View className={rootClassName} style={customStyle}>
      <View className={contentClassName}>
        <Text
          className={contentClassName}
          // eslint-disable-next-line
          // @ts-ignore
          numberOfLines={single ? 1 : 0}
        >
          {content}
        </Text>
      </View>
      {actionText && (
        <View
          className={`at-notice-bar__action at-notice-bar__action--${type}`}
          onClick={onAction}
        >
          {actionText}
        </View>
      )}
      {showClose && (
        <View className='at-notice-bar__close' onClick={onClose}>
          <AtIcon
            className={`at-notice-bar__close--icon at-notice-bar__close--${type}`}
            value='curtain_icon_cancel'
            size={16}
          />
        </View>
      )}
    </View>
  )
}

AtNoticeBar.defaultProps = {
  showClose: false,
  single: false,
  onClose: noop,
  onAction: noop
}

AtNoticeBar.displayName = 'AtNoticeBar'

export default AtNoticeBar
