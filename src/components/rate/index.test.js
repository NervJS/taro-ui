import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtRate from '../../../.temp/components/rate/index'

describe('AtRate Snap', () => {
  it('render initial AtRate', () => {
    const componet = renderToString(<AtRate isTest />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRate -- props customStyle', () => {
    const componet = renderToString(<AtRate isTest customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRate -- props className', () => {
    const componet = renderToString(<AtRate isTest className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRate -- props size', () => {
    const componet = renderToString(<AtRate isTest size='10' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRate -- props value', () => {
    const componet = renderToString(<AtRate isTest value='2' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRate -- props max', () => {
    const componet = renderToString(<AtRate isTest max='10' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRate -- props margin', () => {
    const componet = renderToString(<AtRate isTest margin='10' />)
    expect(componet).toMatchSnapshot()
  })
})
