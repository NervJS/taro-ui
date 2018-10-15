import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtTextarea from '../../../.temp/components/textarea/index'

describe('AtTextarea Snap', () => {
  it('render initial AtTextarea', () => {
    const componet = renderToString(<AtTextarea isTest />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props customStyle', () => {
    const componet = renderToString(<AtTextarea isTest customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props className', () => {
    const componet = renderToString(<AtTextarea isTest className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props value', () => {
    const componet = renderToString(<AtTextarea isTest value='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea isTest maxlength='300' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea isTest placeholder='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea isTest count={3000} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea isTest height={3000} />)
    expect(componet).toMatchSnapshot()
  })
})
