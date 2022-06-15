import React, { useRef, useEffect, useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import {
  Easing,
  TouchableWithoutFeedback,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native'
import { AtSwitchProps } from '../../../types/switch'
import classNames from 'classnames'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

const defaultValues = {
  color: '#ff4d13',
  checked: false,
  disabled: false,
  duration: 200,
  switchWidth: 51,
  buttonWidth: 27,
  switchPadding: 2,
  buttonColor: '#fff',
  backgroundColor: '#e0e0e0'
}

const AtTextarea: React.FC<AtSwitchProps> = props => {
  const {
    checked,
    disabled,
    duration = defaultValues.duration,
    buttonWidth = defaultValues.buttonWidth,
    switchWidth = defaultValues.switchWidth,
    switchPadding = defaultValues.switchPadding,
    buttonColor = defaultValues.buttonColor,
    backgroundColor = defaultValues.backgroundColor,
    color = defaultValues.color,
    onChange
  } = props

  const [_checked, setChecked] = useState(!!checked)
  const colorAnim = useRef(new Animated.Value(0)).current

  const onColorAnimInterpolation = useRef(
    colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [backgroundColor, color],
      easing: Easing.bezier(0.83, 0, 0.17, 1)
    })
  ).current

  const colorAnimInterpolation = useRef(
    colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [color, backgroundColor],
      easing: Easing.bezier(0.83, 0, 0.17, 1)
    })
  ).current

  const toggleStyle: any = {
    alignItems: _checked ? 'flex-end' : 'flex-start',
    width: switchWidth,
    backgroundColor: color ? onColorAnimInterpolation : colorAnimInterpolation,
    borderRadius: buttonWidth * 2 + switchPadding,
    padding: switchPadding
  }

  const buttonStyle: any = {
    height: buttonWidth,
    width: buttonWidth,
    backgroundColor: buttonColor,
    borderRadius: buttonWidth / 2
  }

  const layoutAnim = {
    Opacity: () =>
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          duration,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      )
  }

  const changeColor = useCallback(() => {
    if (_checked) {
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false
      }).start()
    }
  }, [colorAnim, duration, _checked])

  const changeToggle = useCallback(() => {
    setChecked(!_checked)
  }, [_checked])

  useEffect(() => {
    setChecked(v => {
      if (v !== _checked) {
        return _checked
      }
      return v
    })
    if (onChange) {
      onChange(_checked)
    }
    if (color) {
      changeColor()
    }
  }, [_checked, color, onChange, changeColor])

  const rootClassName = classNames('at-switch', {
    'at-switch__disabled': disabled
  })

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        !disabled ? (changeToggle(), layoutAnim.Opacity()) : null
      }}
    >
      <Animated.View className={rootClassName} style={toggleStyle}>
        <View style={buttonStyle}></View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

AtTextarea.defaultProps = defaultValues

AtTextarea.displayName = 'AtTextarea'

export default AtTextarea
