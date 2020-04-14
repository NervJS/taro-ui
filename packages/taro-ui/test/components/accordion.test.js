import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AtAccordion } from '../../dist'

Enzyme.configure({
  adapter: new Adapter()
})

describe('AtAccordion Component', () => {
  it('render initial AtAccordion', () => {
    const component = shallow(<AtAccordion />)
    expect(component).toMatchSnapshot()
  })

  // it('render AtAccordion -- props title', () => {
  //   const component = renderToString(<AtAccordion title='title' />)
  //   expect(component).toMatchSnapshot()
  // })

  // it('render AtAccordion -- props open', () => {
  //   const component = renderToString(<AtAccordion open />)
  //   expect(component).toMatchSnapshot()
  // })

  // it('render AtAccordion -- props icon', () => {
  //   const component = renderToString(
  //     <AtAccordion icon={{ value: 'chevron-down', color: 'red' }}>
  //       <View></View>
  //     </AtAccordion>
  //   )
  //   expect(component).toMatchSnapshot()
  // })
  // it('render AtIcon -- props icon prefixClass', () => {
  //   const component = renderToString(
  //     <AtAccordion
  //       icon={{ prefixClass: 'prefixClass', value: 'star', color: 'red' }}
  //     >
  //       <View></View>
  //     </AtAccordion>
  //   )
  //   expect(component).toMatchSnapshot()
  // })

  // it('render AtAccordion -- props note', () => {
  //   const component = renderToString(
  //     <AtAccordion note='note'>
  //       <View></View>
  //     </AtAccordion>
  //   )
  //   expect(component).toMatchSnapshot()
  // })
})
