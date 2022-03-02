import React from 'react'

export const View: React.FC = props => <view {...props}>{props.children}</view>
export const Text: React.FC = props => <text {...props}>{props.children}</text>
// eslint-disable-next-line prettier/prettier
export const Button: React.FC = props => <button {...props}>{props.children}</button>

export default {}
