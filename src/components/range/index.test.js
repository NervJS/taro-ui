import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtRange from '../../../.temp/components/range/index'

describe('AtRange Snap', () => {
  it('render initial AtRange', () => {
    const componet = renderToString(<AtRange isTest />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props className', () => {
    const componet = renderToString(<AtRange isTest className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props customStyle', () => {
    const componet = renderToString(<AtRange isTest customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props sliderStyle', () => {
    const componet = renderToString(<AtRange isTest sliderStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props railStyle', () => {
    const componet = renderToString(<AtRange isTest railStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props trackStyle', () => {
    const componet = renderToString(<AtRange isTest railStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props value', () => {
    const componet = renderToString(<AtRange isTest value={[0, 30]} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props min', () => {
    const componet = renderToString(<AtRange isTest min={10} value={[10, 30]} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props max', () => {
    const componet = renderToString(<AtRange isTest max={50} value={[10, 30]} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props disabled', () => {
    const componet = renderToString(<AtRange isTest disabled />)
    expect(componet).toMatchSnapshot()
  })
})
