import React from 'react'
import { mount } from 'enzyme'
import AtActivityIndicator from '../../lib/components/activity-indicator'
import AtLoading from '../../lib/components/loading'

const sizeStyle = {
  width: '32rpx', // TODO: 应该是 rem
  height: '32rpx'
}

const colorStyle = {
  border: '1px solid #13CE66',
  borderColor: '#13CE66 transparent transparent transparent'
}

describe('ActivityIndicator Component', () => {
  it('render initial ActivityIndicator', () => {
    const component = mount(<AtActivityIndicator />)
    expect(component.find('taro-view-core')).toHaveLength(6)
    expect(component.find(AtLoading)).toHaveLength(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props mode ', () => {
    const component = mount(<AtActivityIndicator mode='center' />)
    expect(
      component.find('.at-activity-indicator--center').length
    ).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props size', () => {
    const component = mount(<AtActivityIndicator size={32} />)
    expect(component.prop('size')).toBe(32)
    expect(component.find('.at-loading').first().prop('style')).toEqual(
      sizeStyle
    )
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props color', () => {
    const component = mount(<AtActivityIndicator color='#13CE66' />)
    expect(component.prop('color')).toBe('#13CE66')
    expect(
      component.find('.at-loading__ring').first().prop('style')
    ).toMatchObject(colorStyle)
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props content ', () => {
    const component = mount(<AtActivityIndicator content='加载中' />)
    expect(
      component.find('.at-activity-indicator__content').first().text()
    ).toBe('加载中')
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props isOpened ', () => {
    const component = mount(<AtActivityIndicator isOpened={false} />)
    expect(
      component.find('.at-activity-indicator').length
    ).toBeGreaterThanOrEqual(1)
    expect(component.find('.at-activity-indicator--isopened').length).toBe(0)
    expect(component.html()).toMatchSnapshot()
  })
})
