import classNames from 'classnames'
import React, { memo } from 'react'
import { View } from '@tarojs/components'
import { AtDialogFooterProps } from '../../../../types/dialog'
import AtDialogAction from './Action'

const AtDialogFooter: React.FC<AtDialogFooterProps> = ({
  primaryText,
  secondaryText,
  tertiaryText,
  onPrimary,
  onSecondary,
  onTertiary
}) => {
  const actions: Array<{ type: any; text: string }> = []
  if (primaryText) {
    actions.push({ type: 'primary', text: primaryText })
  }
  if (secondaryText) {
    actions.push({ type: 'secondary', text: secondaryText })
  }
  if (tertiaryText) {
    actions.push({ type: 'tertiary', text: tertiaryText })
  }

  // 超过3个 action 改成自上而下的排版
  const isFlexColumn = actions.length > 2
  if (!isFlexColumn) {
    actions.reverse()
  }
  const rootClass = classNames('at-dialog__footer', {
    'at-dialog__footer--column': isFlexColumn
  })

  const getEventByType = (type: string) => {
    if (type === 'primary') {
      return onPrimary
    }
    if (type === 'secondary') {
      return onSecondary
    }
    if (type === 'tertiary') {
      return onTertiary
    }
  }

  return (
    <View className={rootClass}>
      {actions.map(({ type, text }, index) => (
        <AtDialogAction
          key={type}
          type={type}
          hasLeftBorder={!isFlexColumn && index === 1}
          onClick={getEventByType(type)}
        >
          {text}
        </AtDialogAction>
      ))}
    </View>
  )
}

AtDialogFooter.defaultProps = {}

export default memo(AtDialogFooter)
