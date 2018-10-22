import { ComponentClass } from 'react'
import AtComponent from './base'

declare type SliderFunction = (value: number) => void

export interface AtSliderProps extends AtComponent{
  min?: number

  max?: number

  step?: number

  value?: number

  disabled?: boolean

  activeColor?: string

  backgroundColor?: string

  blockSize?: number

  blockColor?: string

  showValue?: boolean

  onChange?: SliderFunction

  onChanging?: SliderFunction
}

declare const AtSlider: ComponentClass<AtSliderProps>

export default AtSlider
