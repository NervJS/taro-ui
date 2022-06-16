import React from 'react'
import Modal from 'react-native-modal'
import ModalSheet from './ModalSheet'
import { AtActionSheetProps } from '../../../types/action-sheet'

const AtModalSheet: React.FC<AtActionSheetProps> = props => {
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
      <ModalSheet {...props} />
    </Modal>
  )
}

AtModalSheet.displayName = 'AtModalSheet'

export default AtModalSheet
