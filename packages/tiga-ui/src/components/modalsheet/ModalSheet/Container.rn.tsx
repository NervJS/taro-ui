import React from 'react'
import {
  Platform,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleProp,
  ViewStyle
} from 'react-native'
import { PLATFORM, SYSTEMINFO } from '../../../utils'

const Container: React.FC<KeyboardAvoidingViewProps> = props => {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height'
  const containerStyle: StyleProp<ViewStyle> = React.useMemo(() => {
    if (PLATFORM.isRN && SYSTEMINFO.safeArea) {
      return {
        minHeight: 0.4 * SYSTEMINFO.safeArea?.height,
        maxHeight: 0.7 * SYSTEMINFO.safeArea?.height,
        paddingBottom: SYSTEMINFO.screenHeight - SYSTEMINFO.safeArea?.bottom
      }
    }
    return {}
  }, [])

  return (
    <KeyboardAvoidingView
      {...props}
      behavior={behavior}
      className='at-modal-sheet__container'
      style={containerStyle}
    />
  )
}

export default Container
