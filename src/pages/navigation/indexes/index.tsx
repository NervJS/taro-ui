import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIndexes, AtSearchBar } from 'taro-ui'
import mockData, { CityItem } from './mock-data'
import './index.scss'

interface IndexesState {
  value: string
}

export default class Index extends Taro.Component<{}, IndexesState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  public componentDidMount (): void {
    console.log(this.scrollIntoView)
    // this.scrollIntoView && this.scrollIntoView('top', 0)
  }

  private scrollIntoView (key: string): void {
    console.log('不需要实际实现', key)
  }
  
  private onClick (item: CityItem): void {
    console.log(item)
  }

  private handleActionClick (): void {
    if (!this.state.value) {
      return
    }
    this.setState({
      value: ''
    })
    this.scrollIntoView && this.scrollIntoView(this.state.value.toUpperCase())
  }

  private handleChange (value: string): void {
    this.setState({
      value
    })
  }

  public render (): JSX.Element {
    return (
      <View className='page' style='height: 100vh;'>
        {/* 基础用法 */}
        <View style='height: 100%;'>
          <AtIndexes
            list={mockData}
            topKey='Top'
            onClick={this.onClick.bind(this)}
            onScrollIntoView={fn => { this.scrollIntoView = fn }}
          >
            <View className='custom-area'>
              用户自定义内容
              <AtSearchBar value={this.state.value} onChange={this.handleChange.bind(this)} placeholder='跳转到指定Key' onActionClick={this.handleActionClick.bind(this)} />
            </View>
          </AtIndexes>
        </View>
      </View>
    )
  }
}
