import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import AtTag from './'
import { AtTagGroupProps } from '../../../types/tag'

const AtTagGroup: React.FC<AtTagGroupProps> = ({
  type,
  size,
  data,
  disabled,
  // isWrap,
  scrollX,
  onClick,
  children
}) => {
  const rootClass = classNames('at-tag-group', {
    [`at-tag-group--${size}`]: type !== 'form',
    'at-tag-group--iswrap': !scrollX,
    [`at-tag-group--${type}`]: true
  })

  const content = data?.length
    ? data.map((item, index) => (
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
      ))
    : children

  if (scrollX) {
    return (
      <ScrollView scrollX className={rootClass}>
        <View className='at-tag-group--wrap'>
          {content}
          <View className='at-tag-group--gap' />
        </View>
      </ScrollView>
    )
  }

  return <View className={rootClass}>{content}</View>
}

AtTagGroup.displayName = 'AtTagGroup'

AtTagGroup.defaultProps = {
  isWrap: true,
  scrollX: false,
  size: 'normal',
  type: 'form'
}

export default AtTagGroup
