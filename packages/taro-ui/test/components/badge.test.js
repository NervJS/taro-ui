import React from 'react'
import { mount } from 'enzyme'
import { View } from '@tarojs/components'
import AtBadge from '../../lib/components/badge'

describe('Badge Component', () => {
  it('render initial Badge', () => {
    const component = mount(
      <AtBadge>
        <View>测试文字</View>
      </AtBadge>
    )
    expect(component.find('taro-view-core')).toHaveLength(2)
    expect(component.find('.at-badge').length).toBeGreaterThanOrEqual(1)
    expect(component.text()).toBe('测试文字')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Badge -- props dot', () => {
    const component = mount(
      <AtBadge dot>
        <View>测试文字</View>
      </AtBadge>
    )
    expect(component.find('.at-badge__dot').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Badge -- props value(string)', () => {
    const component = mount(
      <AtBadge value='3'>
        <View>测试文字</View>
      </AtBadge>
    )
    expect(component.prop('value')).toBe('3')
    expect(component.find('.at-badge__num').first().text()).toBe('3')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Badge -- props value(number)', () => {
    const component = mount(
      <AtBadge value={6}>
        <View>测试文字</View>
      </AtBadge>
    )
    expect(component.prop('value')).toBe(6)
    expect(component.find('.at-badge__num').first().text()).toBe('6')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Badge -- props value(string but not a number)', () => {
    const component = mount(
      <AtBadge value='Test'>
        <View>测试文字</View>
      </AtBadge>
    )
    expect(component.prop('value')).toBe('Test')
    expect(component.find('.at-badge__num').first().text()).toBe('Test')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Badge -- props maxValue', () => {
    const component = mount(
      <AtBadge value='10' maxValue={9}>
        <View>测试文字</View>
      </AtBadge>
    )
    expect(component.prop('value')).toBe('10')
    expect(component.prop('maxValue')).toBe(9)
    expect(component.find('.at-badge__num').first().text()).toBe('9+')
    expect(component.html()).toMatchSnapshot()
  })
})
