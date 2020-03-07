import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtForm from '../../../.temp/components/form/index'

describe('AtForm Snap', () => {
  it('render initial AtForm', () => {
    const component = renderToString(<AtForm />)
    expect(component).toMatchSnapshot()
  })

  it('render AtForm -- props reportSubmit', () => {
    const component = renderToString(<AtForm reportSubmit />)
    expect(component).toMatchSnapshot()
  })
})
