import Nerv from 'nervjs'
import { View } from '@tarojs/components'
import { renderToString } from 'nerv-server'

import AtAccordion from '../../../.temp/components/accordion'

describe('AtAccordion Snap', () => {
  it('render initial AtAccordion', () => {
    const component = renderToString(
      <AtAccordion isTest>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props title', () => {
    const component = renderToString(
      <AtAccordion isTest title='title'>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props open', () => {
    const component = renderToString(
      <AtAccordion isTest open>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtAccordion -- props icon', () => {
    const component = renderToString(
      <AtAccordion isTest icon={{ value: 'chevron-down', color: 'red' }}>
        <View></View>
      </AtAccordion>
    )
    expect(component).toMatchSnapshot()
  })
})
