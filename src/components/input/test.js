import Nerv from 'nervjs'
import { renderIntoDocument } from 'nerv-test-utils'
import AtInput from '../../../.temp/components/input/index'


describe('Input', () => {
  it('render Input', () => {
    const component = renderIntoDocument(<AtInput></AtInput>)
    expect(component.props.disabled).toBeFalsy()
  })
})
