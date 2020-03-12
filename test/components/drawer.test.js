import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtDrawer from '../../.temp/components/drawer/index'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

describe('AtDrawer Snap', () => {
  it('render AtDrawer -- props show', () => {
    const component = renderToString(<AtDrawer show />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDrawer -- props mask', () => {
    const component = renderToString(<AtDrawer show mask={false} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDrawer -- props width', () => {
    const component = renderToString(<AtDrawer show width='50%' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtDrawer -- props items', () => {
    const component = renderToString(
      <AtDrawer show items={['菜单1', '菜单2']} />
    )
    expect(component).toMatchSnapshot()
  })
})

describe('AtDrawer Event', () => {
  it('AtDrawer onItemClick & onClose', async () => {
    const onItemClick = jest.fn()
    const onClose = jest.fn()
    const component = renderIntoDocument(
      <AtDrawer
        show
        items={['菜单1', '菜单2']}
        onItemClick={onItemClick}
        onClose={onClose}
      />
    )
    await delay(300)
    const items = findDOMNode(component, 'at-drawer').querySelectorAll(
      '.at-list__item'
    )
    const item0 = items[0]
    Simulate.click(item0)
    process.nextTick(() => {
      expect(onItemClick).toBeCalled()
    })
    await delay(350)
    expect(onClose).toBeCalled()
  })

  it('AtDrawer item NO.0 & NO.1 click, onItemClick(index) index should be 0 and 1', async () => {
    const onItemClick = jest.fn()
    const component = renderIntoDocument(
      <AtDrawer show items={['菜单1', '菜单2']} onItemClick={onItemClick} />
    )
    await delay(300)
    const items = findDOMNode(component, 'at-drawer').querySelectorAll(
      '.at-list__item'
    )
    const item0 = items[0]
    const item1 = items[1]
    Simulate.click(item0)
    Simulate.click(item1)
    process.nextTick(() => {
      expect(onItemClick.mock.calls[0][0]).toBe(0)
      expect(onItemClick.mock.calls[1][0]).toBe(1)
    })
  })

  it('AtDrawer click mask onClose', async () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(
      <AtDrawer show items={['菜单1', '菜单2']} onClose={onClick} />
    )
    await delay(300)
    const componentDom = findDOMNode(component, 'at-drawer')
    const mask = componentDom.querySelector('.at-drawer__mask')
    Simulate.click(mask)
    await delay(350)
    expect(onClick).toBeCalled()
  })
})
