import React from 'react'
import { ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import AtTag from './index'
import { AtTagGroupProps } from '../../../types/tag'

const AtTagGroup: React.FC<AtTagGroupProps> = ({
  type,
  size,
  data,
  disabled,
  isWrap,
  scrollX,
  onClick,
  children
}) => {
  const rootClass = classNames('at-tag-group', `at-tag-group--${type}`, {
    [`at-tag-group--${size}`]: type !== 'form',
    'at-tag-group--wrap': isWrap && !scrollX
  })

  if (data?.length) {
    return (
      <ScrollView scrollX className={rootClass}>
        {data.map((item, index) => (
          <AtTag
            disabled={!!disabled}
            key={`at-tag-${index}`}
            size={size}
            name={item.name}
            active={item.active}
            onClick={onClick}
          >
            标签
          </AtTag>
        ))}
      </ScrollView>
    )
  }

  return (
    <ScrollView scrollX className={rootClass}>
      {children}
    </ScrollView>
  )
}

AtTagGroup.displayName = 'AtTagGroup'

AtTagGroup.defaultProps = {
  isWrap: true,
  scrollX: false,
  size: 'normal',
  type: 'form'
}

export default AtTagGroup
