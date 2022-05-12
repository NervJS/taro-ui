import React, { CSSProperties, FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ListItemProps } from '../../../types/list'
import AtIcon from '../icon'
import { pxTransform, PLATFORM } from '../../utils'

const classPrefix = `at-list-item`

export const AtListItem: FC<ListItemProps> = props => {
  const {
    prefix,
    title,
    children,
    description,
    extra,
    // arrow,
    ellipsis,
    descriptionLayout,
    onClick
  } = props
  const clickable = props.clickable ?? !!onClick
  const arrow = props.arrow === undefined ? clickable : props.arrow

  const titleStyle: CSSProperties = {}
  // 标题文字超过6个字换行: width = 16 * 6
  if (typeof title === 'string') {
    const len = title.length > 6 ? 6 : title.length
    // 修正像素级导致 RN 标题换行问题
    const fixLen = PLATFORM.isRN ? 2 : 0
    titleStyle.width = pxTransform(len * 16 + fixLen)
  }

  const content = (
    <View className={`${classPrefix}-content`}>
      {prefix && (
        <View className={`${classPrefix}-content-prefix`}>{prefix}</View>
      )}
      <View className={`${classPrefix}-content-main`}>
        {title && (
          <View className={`${classPrefix}-title`} style={titleStyle}>
            {title}
          </View>
        )}
        {children}
        {description && (
          <View
            className={`${classPrefix}-description ${classPrefix}-description-${descriptionLayout}`}
          >
            {description}
          </View>
        )}
      </View>
      {extra && (
        <View
          className={classNames(`${classPrefix}-content-extra`, {
            [`${classPrefix}-content-extra-ellipsis`]: ellipsis
          })}
          // @ts-ignore
          numberOfLines={ellipsis ? 1 : 0}
        >
          {props.extra}
        </View>
      )}
      {arrow && (
        <View className={`${classPrefix}-content-arrow`}>
          {arrow === true ? (
            <AtIcon
              className={`${classPrefix}-content-arrow-icon`}
              value='comm_icon_right_line'
              size={16}
            />
          ) : (
            arrow
          )}
        </View>
      )}
    </View>
  )

  return (
    <View
      className={classNames(
        `${classPrefix}`,
        props.disabled && `${classPrefix}-disabled`,
        props.customClass
      )}
      // @ts-ignore
      opacity={props.disabled ? 0.3 : 1}
      onClick={props.disabled ? undefined : props.onClick}
    >
      {content}
    </View>
  )

  // return withNativeProps(
  //   props,
  //   React.createElement(
  //     clickable ? 'a' : 'div',
  //     {
  //       className: classNames(
  //         `${classPrefix}`,
  //         clickable ? ['adm-plain-anchor'] : [],
  //         props.disabled && `${classPrefix}-disabled`
  //       ),
  //       onClick: props.disabled ? undefined : props.onClick
  //     },
  //     content
  //   )
  // )
}
AtListItem.displayName = 'AtListItem'
AtListItem.defaultProps = {
  descriptionLayout: 'left'
}
