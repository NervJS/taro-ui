import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtRange from '../../.temp/components/range/index'

describe('AtRange Snap', () => {
  it('render initial AtRange', () => {
    const componet = renderToString(<AtRange />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props className', () => {
    const componet = renderToString(<AtRange className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props customStyle', () => {
    const componet = renderToString(<AtRange customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props sliderStyle', () => {
    const componet = renderToString(<AtRange sliderStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props railStyle', () => {
    const componet = renderToString(<AtRange railStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props trackStyle', () => {
    const componet = renderToString(<AtRange railStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props value', () => {
    const componet = renderToString(<AtRange value={[0, 30]} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props min', () => {
    const componet = renderToString(<AtRange min={10} value={[10, 30]} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props max', () => {
    const componet = renderToString(<AtRange max={50} value={[10, 30]} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtRange -- props disabled', () => {
    const componet = renderToString(<AtRange disabled />)
    expect(componet).toMatchSnapshot()
  })
})
