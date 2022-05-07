import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ListItemProps } from '../../../types/list'

const classPrefix = `at-list-item`

export const AtListItem: FC<ListItemProps> = props => {
  const clickable = props.clickable ?? !!props.onClick
  const arrow = props.arrow === undefined ? clickable : props.arrow

  const content = (
    <View className={`${classPrefix}-content`}>
      {props.prefix && (
        <View className={`${classPrefix}-content-prefix`}>{props.prefix}</View>
      )}
      <View className={`${classPrefix}-content-main`}>
        {props.title && (
          <View className={`${classPrefix}-title`}>{props.title}</View>
        )}
        {props.children}
        {props.description && (
          <View className={`${classPrefix}-description`}>
            {props.description}
          </View>
        )}
      </View>
      {props.extra && (
        <View className={`${classPrefix}-content-extra`}>{props.extra}</View>
      )}
      {arrow && (
        <View className={`${classPrefix}-content-arrow`}>
          arrow
          {/* {arrow === true ? <RightOutline /> : arrow} */}
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
      opacity={props.disabled ? 0.4 : 1}
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
