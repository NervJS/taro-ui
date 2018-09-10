import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtSwitch from '../../../.temp/components/switch/index'

describe('AtRate Snap', () => {
  it('render initial AtSwitch', () => {
    const componet = renderToString(<AtSwitch />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSwitch -- props title', () => {
    const componet = renderToString(<AtSwitch title='开启中' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSwitch -- props checked', () => {
    const componet = renderToString(<AtSwitch title='开启中' checked />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSwitch -- props border', () => {
    const componet = renderToString(<AtSwitch title='开启中' border={false} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSwitch -- props disabled', () => {
    const componet1 = renderToString(<AtSwitch title='开启中' checked disabled />)
    expect(componet1).toMatchSnapshot()
    const componet2 = renderToString(<AtSwitch title='开启中' disabled />)
    expect(componet2).toMatchSnapshot()
  })
})

describe('AtSwitch Event', () => {
  it('AtSwitch onChange', () => {
    const onItemClick = jest.fn()
    const component = renderIntoDocument(<AtSwitch title='开启中' checked onChange={onItemClick} />)
    const items = findDOMNode(component, 'at-switch').querySelectorAll('.at-switch__switch')
    const item0 = items[0]
    Simulate.click(item0)
    expect(onItemClick).toBeCalled()
    expect(onItemClick.mock.calls[0][0].value).toBeFalsy()
  })
})
