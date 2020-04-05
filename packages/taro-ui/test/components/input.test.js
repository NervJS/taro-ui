import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtInput from '../../.temp/components/input/index'

describe('AtInput Snap', () => {
  it('render AtInput -- init', () => {
    const component = renderToString(<AtInput />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props style', () => {
    const component = renderToString(<AtInput style='border:none;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props value', () => {
    const component = renderToString(<AtInput value='value' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props name', () => {
    const component = renderToString(<AtInput name='name' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props name', () => {
    const component = renderToString(<AtInput placeholder='placeholder' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props title', () => {
    const component = renderToString(<AtInput title='title' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props maxlength', () => {
    const component = renderToString(<AtInput maxlength='10' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props type(number)', () => {
    const component = renderToString(<AtInput type='number' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props type(password)', () => {
    const component = renderToString(<AtInput type='password' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props type(idcard)', () => {
    const component = renderToString(<AtInput type='idcard' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props type(digit)', () => {
    const component = renderToString(<AtInput type='digit' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props type(phone)', () => {
    const component = renderToString(<AtInput type='phone' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props disabled', () => {
    const component = renderToString(<AtInput disabled />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props border', () => {
    const component = renderToString(<AtInput border={false} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props editable', () => {
    const component = renderToString(<AtInput editable={false} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props error', () => {
    const component = renderToString(<AtInput error />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props clear', () => {
    const component = renderToString(<AtInput clear />)
    expect(component).toMatchSnapshot()
  })

  it('render AtInput -- props required', () => {
    const component = renderToString(<AtInput required />)
    expect(component).toMatchSnapshot()
  })
})
