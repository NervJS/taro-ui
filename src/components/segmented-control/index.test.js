import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtSegmentedControl from '../../../.temp/components/segmented-control/index'

describe('AtSegmentedControl Snap', () => {
  const values = ['tab1', 'tab2', 'tab3']

  it('render initial AtSegmentedControl', () => {
    const componet = renderToString(<AtSegmentedControl />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props customStyle', () => {
    const componet = renderToString(<AtSegmentedControl customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props className', () => {
    const componet = renderToString(<AtSegmentedControl className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props values', () => {
    const componet = renderToString(<AtSegmentedControl values={values} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props current', () => {
    const componet = renderToString(<AtSegmentedControl current={2} values={values} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props color', () => {
    const componet = renderToString(<AtSegmentedControl color='red' values={values} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props fontSize', () => {
    const componet = renderToString(<AtSegmentedControl fontSize='30' values={values} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props disabled', () => {
    const componet = renderToString(<AtSegmentedControl disabled values={values} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props selectedColor', () => {
    const componet = renderToString(<AtSegmentedControl selectedColor='#fff' values={values} />)
    expect(componet).toMatchSnapshot()
  })
})
