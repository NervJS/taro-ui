import React from 'react'
import { View, ViewProps } from '@tarojs/components'

const Container: React.FC<ViewProps> = props => {
  return <View {...props} className='at-modal-sheet__container' />
}

export default Container
