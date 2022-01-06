import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtIndexesProps, AtIndexesState } from '../../../types/indexes'

export default class AtIndexes extends React.Component<
  AtIndexesProps,
  AtIndexesState
> {
  public static defaultProps: AtIndexesProps
  public static propTypes: InferProps<AtIndexesProps>

  public constructor(props: AtIndexesProps) {
    super(props)
    this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB
    }
  }

  public componentDidMount(): void {
    // eslint-disable-next-line no-console
    console.warn('Indexes 组件 RN 暂不支持')
  }

  public render(): JSX.Element {
    return <View />
  }
}

AtIndexes.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  animation: PropTypes.bool,
  isVibrate: PropTypes.bool,
  isShowToast: PropTypes.bool,
  topKey: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  onScrollIntoView: PropTypes.func
}

AtIndexes.defaultProps = {
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: []
}
