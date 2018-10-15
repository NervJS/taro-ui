import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtTabsPane from '../../../.temp/components/tabs-pane/index'

describe('AtTabsPane Snap', () => {
  it('render initial AtTabs', () => {
    const componet = renderToString(<AtTabsPane>test</AtTabsPane>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabsPane -- props customStyle', () => {
    const componet = renderToString(<AtTabsPane customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabsPane -- props className', () => {
    const componet = renderToString(<AtTabsPane className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabsPane -- props index current', () => {
    const componet = renderToString(<AtTabsPane index={0} current={0} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabsPane -- props index current', () => {
    const componet = renderToString(<AtTabsPane index={1} current={0} />)
    expect(componet).toMatchSnapshot()
  })
})
