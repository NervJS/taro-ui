import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtModalSheetHeaderProps } from '../../../../types/modal-sheet'
import AtIcon from '../../icon'

const defautlValues = {
  closeIcon: 'comm_icon_false_line',
  noop: () => {}
}

const AtModalSheetHeader: React.FC<AtModalSheetHeaderProps> = ({
  className,
  cancelText,
  resetText,
  confirmText,
  closeIcon = defautlValues.closeIcon,
  children,
  onCancel,
  onReset,
  onConfirm,
  onClose
}) => {
  const rootClass = classNames('at-modal-sheet__header', className)

  /** 操作模式 */
  if (cancelText || resetText || confirmText) {
    return (
      <View className={rootClass}>
        <View className='at-modal-sheet__header--action'>
          <View
            className='at-modal-sheet__header--action__cancel'
            onClick={onCancel}
          >
            {cancelText || '取消'}
          </View>
          <View
            className='at-modal-sheet__header--action__reset'
            onClick={onReset}
          >
            {resetText || '重置'}
          </View>
        </View>
        <View className='at-modal-sheet__header--title'>{children}</View>
        <View
          className='at-modal-sheet__header--action at-modal-sheet__header--action__confirm'
          onClick={onConfirm}
        >
          {confirmText || '确定'}
        </View>
      </View>
    )
  }

  /** 关闭icon 模式 */
  return (
    <View className={rootClass}>
      <View className='at-modal-sheet__header--close' onClick={onClose}>
        <AtIcon value={closeIcon} size='20' color='rgb(153,153,153)' />
      </View>
      <View className='at-modal-sheet__header--title'>{children}</View>
      <View className='at-modal-sheet__header--close'></View>
    </View>
  )
}

export default AtModalSheetHeader
