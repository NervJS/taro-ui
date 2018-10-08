import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtSlider from '../../../.temp/components/slider/index'

describe('AtSlider Snap', () => {
  it('render initial AtSlider', () => {
    const component = renderToString(<AtSlider />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props value', () => {
    const component = renderToString(<AtSlider value={50} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props step', () => {
    const component = renderToString(<AtSlider step={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props min', () => {
    const component = renderToString(<AtSlider min={50} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props max', () => {
    const component = renderToString(<AtSlider max={200} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props disabled', () => {
    const component = renderToString(<AtSlider disabled />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props activeColor', () => {
    const component = renderToString(<AtSlider activeColor='#4285F4' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props backgroundColor', () => {
    const component = renderToString(<AtSlider backgroundColor='#BDBDBD' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props blockColor', () => {
    const component = renderToString(<AtSlider blockColor='#4285F4' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props blockSize', () => {
    const component = renderToString(<AtSlider blockSize={24} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtSlider -- props showValue', () => {
    const component = renderToString(<AtSlider showValue />)
    expect(component).toMatchSnapshot()
  })
})
