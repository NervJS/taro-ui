import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtAccordionProps, AtAccordionState } from '../../../types/accordion'

export default class AtAccordion extends React.Component<
  AtAccordionProps,
  AtAccordionState
> {
  public static defaultProps: AtAccordionProps
  public static propTypes: InferProps<AtAccordionProps>

  public constructor(props: AtAccordionProps) {
    super(props)
    this.state = {
      wrapperHeight: 0
    }
  }

  public componentDidMount(): void {
    // eslint-disable-next-line no-console
    console.warn('Accordion 组件 RN 暂不支持')
  }

  public render(): JSX.Element {
    return <View />
  }
}

AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: { value: '' },
  hasBorder: true,
  isAnimation: true
}

AtAccordion.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  open: PropTypes.bool,
  isAnimation: PropTypes.bool,
  title: PropTypes.string,
  note: PropTypes.string,
  icon: PropTypes.object,
  hasBorder: PropTypes.bool,
  onClick: PropTypes.func
}
