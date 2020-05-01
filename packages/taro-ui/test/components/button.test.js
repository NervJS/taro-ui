import React from 'react'
import { mount } from 'enzyme'
import { Button } from '@tarojs/components'
import AtButton from '../../lib/components/button'
import AtLoading from '../../lib/components/loading'

const colorStyle = {
  border: '1px solid #fff',
  borderColor: '#fff transparent transparent transparent'
}

const sizeStyle = {
  width: '30rpx', // TODO: 应该是 rem
  height: '30rpx'
}

describe('Button Component', () => {
  it('render initial Button', () => {
    const component = mount(<AtButton>按钮</AtButton>)
    expect(component.find('taro-view-core')).toHaveLength(2)
    expect(component.find('taro-button-core')).toHaveLength(1)
    expect(component.find('.at-button').length).toBeGreaterThanOrEqual(1)
    expect(component.find('.at-button__wxbutton').length).toBeGreaterThanOrEqual(1)
    expect(component.find('.at-button__text').first().text()).toBe('按钮')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props type(primary)', () => {
    const component = mount(<AtButton type='primary'>按钮</AtButton>)
    expect(component.prop('type')).toBe('primary')
    expect(component.find('.at-button--primary').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props type(secondary)', () => {
    const component = mount(<AtButton type='secondary'>按钮</AtButton>)
    expect(component.prop('type')).toBe('secondary')
    expect(component.find('.at-button--secondary').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props size(normal)', () => {
    const component = mount(<AtButton size='normal'>按钮</AtButton>)
    expect(component.prop('size')).toBe('normal')
    expect(component.find('.at-button--normal').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props size(small)', () => {
    const component = mount(<AtButton size='small'>按钮</AtButton>)
    expect(component.prop('size')).toBe('small')
    expect(component.find('.at-button--small').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props circle', () => {
    const component = mount(<AtButton circle>按钮</AtButton>)
    expect(component.find('.at-button--circle').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props full', () => {
    const component = mount(<AtButton full>按钮</AtButton>)
    expect(component.find('.at-button--full').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props loading', () => {
    const component = mount(<AtButton loading>按钮</AtButton>)
    expect(component.find('taro-view-core')).toHaveLength(7)
    expect(component.find(AtLoading)).toHaveLength(1)
    expect(component.find('.at-button.at-button--icon').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props loading(with primary type)', () => {
    const component = mount(<AtButton loading type='primary'>按钮</AtButton>)
    expect(component.prop('type')).toBe('primary')
    expect(component.find(AtLoading).prop('color')).toBe('#fff')
    expect(component.find('.at-loading__ring').first().prop('style')).toMatchObject(colorStyle)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props loading(with small size)', () => {
    const component = mount(<AtButton loading size='small'>按钮</AtButton>)
    expect(component.prop('size')).toBe('small')
    expect(component.find(AtLoading).prop('size')).toBe('30')
    expect(component.find('.at-loading__ring').first().prop('style')).toMatchObject(sizeStyle)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props disabled', () => {
    const component = mount(<AtButton disabled>按钮</AtButton>)
    expect(component.find('.at-button--disabled').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props formType', () => {
    const component = mount(<AtButton formType='submit'>按钮</AtButton>)
    expect(component.prop('formType')).toBe('submit')
    expect(component.find(Button).prop('formType')).toBe('submit')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Button -- props lang', () => {
    const component = mount(<AtButton lang='zh_CN'>按钮</AtButton>)
    expect(component.prop('lang')).toBe('zh_CN')
    expect(component.find(Button).prop('lang')).toBe('zh_CN')
    expect(component.html()).toMatchSnapshot()
  })
})

describe('Button Behavior', () => {
  it('handle Button -- event onClick', () => {
    const handleClick = jest.fn()
    const component = mount(<AtButton onClick={handleClick}>按钮</AtButton>)
    component.instance().onClick()
    expect(handleClick).toBeCalled()
  })

  it('handle Button -- when prop disabled, event onClick not to be called', () => {
    const handleClick = jest.fn()
    const component = mount(<AtButton disabled onClick={handleClick}>按钮</AtButton>)
    component.instance().onClick()
    expect(handleClick).not.toBeCalled()
  })
})
