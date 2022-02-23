import React from 'react'
import Modal from 'react-native-modal'
import ActionSheet from './ActionSheet'
import { AtActionSheetProps } from '../../../types/action-sheet'

const AtActionSheet: React.FC<AtActionSheetProps> = props => {
  const { isOpened } = props

  return (
    <Modal
      useNativeDriverForBackdrop
      isVisible={!!isOpened}
      swipeDirection={['down']}
      style={{
        justifyContent: 'flex-end',
        margin: 0
      }}
    >
      <ActionSheet {...props} />
    </Modal>
  )
}

AtActionSheet.displayName = 'AtActionSheet'

export default AtActionSheet
