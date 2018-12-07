import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtTextarea from '../../../.temp/components/textarea/index'

describe('AtTextarea Snap', () => {
  it('render initial AtTextarea', () => {
    const componet = renderToString(<AtTextarea />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props customStyle', () => {
    const componet = renderToString(<AtTextarea customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props className', () => {
    const componet = renderToString(<AtTextarea className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props value', () => {
    const componet = renderToString(<AtTextarea value='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea maxlength='300' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea placeholder='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea count={3000} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const componet = renderToString(<AtTextarea height={3000} />)
    expect(componet).toMatchSnapshot()
  })
})
