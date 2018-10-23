import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtDivider from '../../../.temp/components/divider/index'

describe('AtDivider Snap', () => {
  it('render initial AtDivider', () => {
    const component = renderToString(<AtDivider isTest />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props customStyle', () => {
    const component = renderToString(<AtDivider isTest customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props className', () => {
    const component = renderToString(<AtDivider isTest className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props content', () => {
    const component = renderToString(<AtDivider isTest content='content' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props height', () => {
    const component = renderToString(<AtDivider isTest height='120' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props fontColor', () => {
    const component = renderToString(<AtDivider isTest fontColor='#fff' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props fontSize', () => {
    const component = renderToString(<AtDivider isTest fontSize='56' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props lineColor', () => {
    const component = renderToString(<AtDivider isTest lineColor='#fff' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props childen', () => {
    const component = renderToString(<AtDivider isTest>test</AtDivider>)
    expect(component).toMatchSnapshot()
  })
})
