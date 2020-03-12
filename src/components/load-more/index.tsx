import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtLoadMoreProps } from 'types/load-more'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import AtActivityIndicator from '../activity-indicator/index'
import AtButton from '../button/index'

export default class AtLoadMore extends AtComponent<AtLoadMoreProps> {
  public static defaultProps: AtLoadMoreProps
  public static propTypes: InferProps<AtLoadMoreProps>

  private onClick(): void {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  public render(): JSX.Element {
    const {
      className,
      customStyle,
      loadingText,
      moreText,
      status,
      moreBtnStyle,
      noMoreTextStyle,
      noMoreText
    } = this.props

    let component: JSX.Element | null = null
    if (status === 'loading') {
      component = <AtActivityIndicator mode='center' content={loadingText} />
    } else if (status === 'more') {
      component = (
        <View className='at-load-more__cnt'>
          <AtButton
            full
            onClick={this.onClick.bind(this)}
            customStyle={moreBtnStyle}
          >
            {moreText}
          </AtButton>
        </View>
      )
    } else {
      component = (
        <Text className='at-load-more__tip' style={noMoreTextStyle}>
          {noMoreText}
        </Text>
      )
    }

    return (
      <View
        className={classNames('at-load-more', className)}
        style={customStyle}
      >
        {component}
      </View>
    )
  }
}

AtLoadMore.defaultProps = {
  customStyle: '',
  className: '',
  noMoreTextStyle: '',
  moreBtnStyle: '',
  status: 'more',
  loadingText: '加载中',
  moreText: '查看更多',
  noMoreText: '没有更多',
  onClick: () => {}
}

AtLoadMore.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  noMoreTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  moreBtnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  status: PropTypes.oneOf(['more', 'loading', 'noMore']),
  loadingText: PropTypes.string,
  moreText: PropTypes.string,
  noMoreText: PropTypes.string,
  onClick: PropTypes.func
}
