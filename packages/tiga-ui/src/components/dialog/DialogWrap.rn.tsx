import React from 'react'
import Modal from 'react-native-modal'
import Dialog from './Dialog'
import { AtDialogProps } from '../../../types/dialog'

const AtDialog: React.FC<AtDialogProps> = props => {
  const { isOpened } = props

  return (
    <Modal
      animationIn='fadeIn'
      animationOut='fadeOut'
      isVisible={!!isOpened}
      hasBackdrop={false}
      style={{
        margin: 0
      }}
    >
      <Dialog {...props} />
    </Modal>
  )
}

AtDialog.displayName = 'AtDialog'

export default AtDialog
