import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtInputNumber from '../../../.temp/components/input-number/index'

describe('AtInputNumber Snap', () => {
  it('render initial AtInputNumber', () => {
    const component = renderToString(<AtInputNumber />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props customStyle', () => {
    const component = renderToString(<AtInputNumber customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props className', () => {
    const component = renderToString(<AtInputNumber className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props type=number', () => {
    const component = renderToString(<AtInputNumber type='number' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props type=digit', () => {
    const component = renderToString(<AtInputNumber type='digit' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props disabled', () => {
    const component = renderToString(<AtInputNumber disabled />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props value', () => {
    const component = renderToString(<AtInputNumber value={2} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props width', () => {
    const component = renderToString(<AtInputNumber width={200} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInputNumber -- props size', () => {
    const component = renderToString(<AtInputNumber size='lg' />)
    expect(component).toMatchSnapshot()
  })
})

describe('AtInputNumber function', () => {
  it('AtInputNumber#addNum', () => {
    expect(AtInputNumber.addNum(1.2, 1.12)).toBe(2.32)
    expect(AtInputNumber.addNum(1.12, 1.2)).toBe(2.32)
  })
  it('AtInputNumber#parseValue', () => {
    expect(AtInputNumber.parseValue('')).toBe('0')
    expect(AtInputNumber.parseValue('01')).toBe('1')
    expect(AtInputNumber.parseValue('1.')).toBe('1.')
  })
})
