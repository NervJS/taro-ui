import bind from 'bind-decorator'

import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtButton from '../../../components/button/index'

import './index.scss'

import DocsHeader from '../../components/doc-header'
import AtCalendar from '../../../components/calendar/index'
import Calendar from 'src/components/calendar/types';

import _cloneDeep from 'lodash/cloneDeep'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: 'Taro日历组件展示'
  }

  state = {
    now: Date.now(),
    minDate: '2018/06/11',
    maxDate: '2020/12/12',
    multiCurentDate: {
      start: Date.now()
    },
    mark: [
      {
        value: '2018/11/11'
      }
    ],
    validDates: [
      {
        value: '2019/04/17'
      },
      {
        value: '2019/06/4'
      },
      {
        value: '2019/06/5'
      },
      {
        value: '2019/06/6'
      },
      {
        value: '2019/05/04'
      },
      {
        value: '2019/05/28'
      }
    ],
    tempValidDates: [],
    priceDates: [
      {
        value: '2019/04/17',
        price: 10
      },
      {
        value: '2019/05/17',
        price: 114
      },
      {
        value: '2019/06/17',
        price: 225
      },
      {
        value: '2019/06/1',
        price: 229
      },
      {
        value: '2019/06/5',
        price: 1210
      },
      {
        value: '2019/06/6',
        price: 11198
      },
      {
        value: '2019/06/21',
        price: 487
      },
    ]
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  @bind
  handleClick (key: string, value: string) {
    this.setState({
      [key]: value
    })
  }

  @bind
  handleDayClick (...arg) {
    // var item: Calendar.Item = arg[0];
    // if(item && item.isSelectedTail){
    //   var tempValidDates = _cloneDeep(this.state.validDates);
    //   this.setState({tempValidDates:tempValidDates, validDates: [{value: '2019/06/6'}]}) 
    // }
    // else if(item && !item.isSelectedTail){
    //   this.setState({validDates:this.state.tempValidDates}) 
    // }
    // console.log(this.state.validDates);
    console.log('handleDayClick', arg);
  }

  @bind
  handleDayLongClick (...arg) {
    console.log('handleDayLongClick', arg)
  }

  @bind
  handleDateChange (arg) {
    console.log('handleDateChange', arg)
  }

  @bind
  handleMonthChange (arg) {
    console.log('handleMonthChange', arg)
  }

  render () {
    const { now, minDate, maxDate, mark, multiCurentDate, validDates, priceDates } = this.state
    return (
      <View className='page calendar-page'>
        <DocsHeader title='Calendar 日历' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>一般案例</View>
            <View className='panel__content'>
              <AtCalendar onMonthChange={this.handleMonthChange} />
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>跳转到指定日期</View>
            <View className='panel__content'>
              <AtCalendar currentDate={now} />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'now', '2018/01/01')}
                >
                  跳转到 2018/01/01
                </AtButton>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'now', '2018/06/18')}
                >
                  跳转到 2018/6/18
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>指定最小日期和最大日期</View>
            <View className='panel__content'>
              <AtCalendar minDate={minDate} maxDate={maxDate} />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'minDate', '2018/01/01')}
                >
                  设置最小值 2018/1/1
                </AtButton>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'maxDate', '2018/12/31')}
                >
                  设置最大值 2018/12/31
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>标记时间</View>
            <View className='panel__content'>
              <AtCalendar marks={mark} />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  className='button'
                  onClick={this.handleClick.bind(this, 'mark', [
                    {
                      value: Date.now()
                    }
                  ])}
                >
                  标记当前时间
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>禁止滑动</View>
            <View className='panel__content'>
              <AtCalendar isSwiper={false} />
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>垂直滑动</View>
            <View className='panel__content'>
              <AtCalendar isVertical onSelectDate={this.handleDateChange}/>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>范围选择</View>
            <View className='panel__content'>
              <AtCalendar
                onSelectDate={this.handleDateChange}
                isMultiSelect
                currentDate={multiCurentDate}
              />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  className='button'
                  onClick={this.handleClick.bind(this, 'multiCurentDate', {
                    start: '2018/10/28',
                    end: '2018/11/11'
                  })}
                >
                  设置选择区间为 2018/10/28 - 2018/11/11
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>有效时间组</View>
            <View className='panel__content'>
              <AtCalendar validDates={validDates}/>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>有效时间组+多选</View>
            <View className='panel__content'>
              <AtCalendar validDates={validDates} priceDates={priceDates} isMultiSelect onDayClick={this.handleDayClick} onSelectDate={this.handleDateChange}/>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
