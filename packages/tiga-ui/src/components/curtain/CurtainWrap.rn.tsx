import React from 'react'
import Modal from 'react-native-modal'
import Curtain from './Curtain'
import { AtCurtainProps } from '../../../types/curtain'

const AtCurtain: React.FC<AtCurtainProps> = props => {
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
      <Curtain {...props} />
    </Modal>
  )
}

AtCurtain.displayName = 'AtCurtain'

export default AtCurtain
