import Nerv from 'nervjs'
import { View } from '@tarojs/components'
import { renderToString } from 'nerv-server'
import AtAccordion from '../../.temp/components/accordion'

describe('AtAccordion Snap', () => {
  it('render initial AtAccordion', () => {
    const component = renderToString(<AtAccordion />)
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props title', () => {
    const component = renderToString(<AtAccordion title='title' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props open', () => {
    const component = renderToString(<AtAccordion open />)
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props icon', () => {
    const component = renderToString(
      <AtAccordion icon={{ value: 'chevron-down', color: 'red' }}>
        <View></View>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })
  it('render AtIcon -- props icon prefixClass', () => {
    const component = renderToString(
      <AtAccordion
        icon={{ prefixClass: 'prefixClass', value: 'star', color: 'red' }}
      >
        <View></View>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props note', () => {
    const component = renderToString(
      <AtAccordion note='note'>
        <View></View>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })
})
