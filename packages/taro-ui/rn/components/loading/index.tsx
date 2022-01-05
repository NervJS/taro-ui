import React from 'react'
import { ActivityIndicator } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import omit from 'lodash/omit'

interface AtLoadingProps {
  size?: string | number
  color?: string
}

export default class AtLoading extends React.Component<AtLoadingProps> {
  public static defaultProps: AtLoadingProps
  public static propTypes: InferProps<AtLoadingProps>

  public render(): JSX.Element {
    const restProps = omit(this.props, ['size'])
    return <ActivityIndicator {...restProps} />
  }
}

AtLoading.defaultProps = {
  size: 0,
  color: ''
}

AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
