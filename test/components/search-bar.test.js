import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtSearchBar from '../../../.temp/components/search-bar/index'

describe('AtSearchBar Snap', () => {
  it('render initial AtSearchBar', () => {
    const componet = renderToString(<AtSearchBar />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props className', () => {
    const componet = renderToString(<AtSearchBar className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props customStyle', () => {
    const componet = renderToString(<AtSearchBar customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props value', () => {
    const componet = renderToString(<AtSearchBar value='value' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props placeholder', () => {
    const componet = renderToString(<AtSearchBar placeholder='placeholder' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props maxlength', () => {
    const componet = renderToString(<AtSearchBar maxlength={120} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props disabled', () => {
    const componet = renderToString(<AtSearchBar fixed />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props focus', () => {
    const componet = renderToString(<AtSearchBar focus />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props disabled', () => {
    const componet = renderToString(<AtSearchBar disabled />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props showActionButton', () => {
    const componet = renderToString(<AtSearchBar showActionButton />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props actionName', () => {
    const componet = renderToString(<AtSearchBar actionName='actionName' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSearchBar -- props inputType number', () => {
    const componet = renderToString(<AtSearchBar inputType='number' />)
    expect(componet).toMatchSnapshot()
  })
})
