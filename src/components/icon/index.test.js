import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtIcon from '../../../.temp/components/icon/index'

describe('AtIcon Snap', () => {
  it('render initial AtIcon', () => {
    const component = renderToString(<AtIcon />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIcon -- props value', () => {
    const component = renderToString(<AtIcon value='star' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIcon -- props color', () => {
    const component = renderToString(<AtIcon color='#fff' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIcon -- props size', () => {
    const component = renderToString(<AtIcon size='14' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIcon -- props prefixClass', () => {
    const component = renderToString(<AtIcon prefixClass='prefixClass' value='star' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIcon -- props customStyle', () => {
    const component = renderToString(<AtIcon customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIcon -- props className', () => {
    const component = renderToString(<AtIcon className='test' />)
    expect(component).toMatchSnapshot()
  })
})

describe('AtIcon Event', () => {
  it('AtIcon onClick', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(<AtIcon onClick={onClick} />)
    const componentDom = findDOMNode(component, 'at-icon')

    Simulate.click(componentDom)
    expect(onClick).toBeCalled()
  })
})
