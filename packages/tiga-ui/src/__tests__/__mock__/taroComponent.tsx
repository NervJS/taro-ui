import React from 'react'

export const View: React.FC<any> = props => (
  <view {...props}>{props.children}</view>
)

export const Text: React.FC<any> = props => (
  <text {...props}>{props.children}</text>
)

export const Button: React.FC<any> = props => (
  <button {...props}>{props.children}</button>
)

export const Image: React.FC<any> = props => (
  <image {...props}>{props.children}</image>
)

export default {}
