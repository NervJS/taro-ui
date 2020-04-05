import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtTabs from '../../.temp/components/tabs/index'

describe('AtTabs Snap', () => {
  const tabList = [
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' }
  ]

  it('render initial AtTabs', () => {
    const componet = renderToString(<AtTabs />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props customStyle', () => {
    const componet = renderToString(<AtTabs customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props className', () => {
    const componet = renderToString(<AtTabs className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props tabList', () => {
    const componet = renderToString(<AtTabs tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props current', () => {
    const componet = renderToString(<AtTabs current={2} tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props swipeable', () => {
    const componet = renderToString(<AtTabs swipeable tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props scroll', () => {
    const componet = renderToString(<AtTabs scroll tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props tabDirection', () => {
    const componet = renderToString(
      <AtTabs scroll tabDirection='vertical' tabList={tabList} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props animated', () => {
    const componet = renderToString(
      <AtTabs animated={false} tabList={tabList} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabs -- props height', () => {
    const componet = renderToString(
      <AtTabs height='300px' tabDirection='vertical' tabList={tabList} />
    )
    expect(componet).toMatchSnapshot()
  })
})
