import React from 'react'
import { mount } from 'enzyme'
import AtAccordion from '../../lib/components/accordion'

const iconObject = {
  prefixClass: 'prefix',
  value: 'chevron-down',
  color: 'red'
}
const iconStyle = { color: 'red', fontSize: 'undefinedpx' } // TODO: 确保不出现 undefinedpx

describe('Accordion Component', () => {
  it('render initial Accordion', () => {
    const component = mount(<AtAccordion />)
    expect(component.find('taro-view-core')).toHaveLength(8)
    expect(component.find('taro-text-core')).toHaveLength(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Accordion -- props title', () => {
    const component = mount(<AtAccordion title='title' />)
    expect(component.prop('title')).toBe('title')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Accordion -- props open', () => {
    const component = mount(<AtAccordion open />)
    expect(
      component.find('.at-accordion__arrow--folded').length
    ).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Accordion -- props hasBorder', () => {
    const component = mount(<AtAccordion hasBorder={false} />)
    expect(
      component.find('.at-accordion__header--noborder').length
    ).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Accordion -- props icon', () => {
    const component = mount(<AtAccordion icon={iconObject} />)
    expect(component.props().icon).toEqual(iconObject)
    expect(
      component.find('.prefix.prefix-chevron-down').length
    ).toBeGreaterThanOrEqual(1)
    expect(
      component.find('.prefix.prefix-chevron-down').first().prop('className')
    ).toBe('prefix prefix-chevron-down at-accordion__icon')
    expect(
      component.find('.prefix.prefix-chevron-down').first().prop('style')
    ).toEqual(iconStyle)
    expect(component).toMatchSnapshot()
  })

  it('render Accordion -- props note', () => {
    const component = mount(<AtAccordion note='note' />)
    expect(component.prop('note')).toBe('note')
    expect(component).toMatchSnapshot()
  })
})

describe('Accordion Behavior', () => {
  it('handle Accordion -- event onClick', () => {
    const handleClick = jest.fn()
    const component = mount(<AtAccordion onClick={handleClick} />)
    component.instance().handleClick()
    expect(handleClick).toBeCalled()
  })
})
