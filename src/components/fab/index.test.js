import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtFab from '../../../.temp/components/fab/index'

describe('AtFab Snap', () => {
  it('render AtFab -- default props', () => {
    const component = renderToString(<AtFab>按钮</AtFab>)
    expect(component).toMatchSnapshot()
  })

  it('render AtFab -- props className', () => {
    const component = renderToString(<AtFab className="button">按钮</AtFab>)
    expect(component).toMatchSnapshot()
  })

  it('render AtFab -- size 50', () => {
    const component = renderToString(<AtFab size={50}>按钮</AtFab>)
    expect(component).toMatchSnapshot()
  })
})

describe('AtFab Event', () => {
  it('AtFab onClick', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtFab onClick={onClick}>按钮</AtFab>)
    const componentDom = findDOMNode(component, 'at-fab')
    Simulate.click(componentDom)
    expect(onClick).toBeCalled()
  })
})
