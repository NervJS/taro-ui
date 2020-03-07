import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtRadio from '../../.temp/components/radio/index'

const options = [
  { label: '单选项一', value: 'option1' },
  { label: '单选项二', value: 'option2', desc: '单选项描述二' },
  { label: '单选项三', value: 'option3', desc: '单选项描述三', disabled: true }
]

describe('AtRadio Snap', () => {
  it('render AtRadio', () => {
    const componet = renderToString(<AtRadio options={options} />)
    expect(componet).toMatchSnapshot()
  })
})

describe('AtRadio Event', () => {
  it('AtRadio onClick', () => {
    const onItemClick = jest.fn()
    const component = renderIntoDocument(
      <AtRadio value='option2' options={options} onClick={onItemClick} />
    )
    const items = findDOMNode(component, 'at-radio').querySelectorAll(
      '.at-radio__option'
    )
    const item0 = items[0]
    Simulate.click(item0)
    expect(onItemClick).toBeCalled()
    expect(onItemClick.mock.calls[0][0]).toBe('option1')
  })

  it('AtRadio onClick disabled, onClick not to be called', () => {
    const onItemClick = jest.fn()
    const component = renderIntoDocument(
      <AtRadio value='option2' options={options} onClick={onItemClick} />
    )
    const items = findDOMNode(component, 'at-radio').querySelectorAll(
      '.at-radio__option'
    )
    const item2 = items[2]
    Simulate.click(item2)
    expect(onItemClick).not.toBeCalled()
  })
})
