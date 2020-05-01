import React from 'react'
import { mount } from 'enzyme'
import AtAvatar from '../../lib/components/avatar'

describe('Avatar Component', () => {
  it('render initial Avatar', () => {
    const component = mount(<AtAvatar />)
    expect(component.find('taro-view-core')).toHaveLength(1)
    expect(component.find('taro-text-core')).toHaveLength(1)
    expect(component.find('taro-text-core').first().text()).toBe('')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Avatar -- props size(large) ', () => {
    const component = mount(<AtAvatar size='large' />)
    expect(component.find('.at-avatar--large').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Avatar -- props size(normal) ', () => {
    const component = mount(<AtAvatar size='normal' />)
    expect(component.find('.at-avatar--normal').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Avatar -- props size(small) ', () => {
    const component = mount(<AtAvatar size='small' />)
    expect(component.find('.at-avatar--small').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Avatar -- props circle', () => {
    const component = mount(<AtAvatar circle />)
    expect(component.find('.at-avatar--circle').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Avatar -- props image', () => {
    const component = mount(
      <AtAvatar image='https://jdc.jd.com/img/100' />
    )
    expect(component.prop('image')).toBe('https://jdc.jd.com/img/100')
    expect(component.find('taro-image-core')).toHaveLength(1)
    expect(component.find('.at-avatar__img').first().prop('src')).toBe('https://jdc.jd.com/img/100')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Avatar -- props text', () => {
    const component = mount(<AtAvatar text='凹凸实验室' />)
    expect(component.prop('text')).toBe('凹凸实验室')
    expect(component.find('taro-text-core')).toHaveLength(1)
    expect(component.find('.at-avatar__text').first().text()).toBe('凹')
    expect(component.html()).toMatchSnapshot()
  })
})
