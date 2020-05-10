import React from 'react'
import { mount } from 'enzyme'
import { Image, Text } from '@tarojs/components'
import AtCard from '../../lib/components/card'

const imageLink = 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
const renderIcon = () => {
  return (
    <Text className='at-icon at-icon-settings' />
  )
}
const extraStyle = {
  color: 'red',
  backgroundColor: 'blue'
}
const iconObject = { value: 'chevron-down', color: 'red' }
const iconStyle = { color: 'red', fontSize: 'undefinedpx' } // TODO: 确保不出现 undefinedpx

describe('Card Component', () => {
  it('render initial Card', () => {
    const component = mount(<AtCard>测试文字</AtCard>)
    expect(component.find('taro-view-core')).toHaveLength(4)
    expect(component.find('taro-text-core')).toHaveLength(1)
    expect(component.find('.at-card').length).toBeGreaterThanOrEqual(1)
    expect(component.find('.at-card__header-title').length).toBeGreaterThanOrEqual(1)
    expect(component.find('.at-card__content-info').first().text()).toBe('测试文字')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props title', () => {
    const component = mount(<AtCard title='测试标题'>测试文字</AtCard>)
    expect(component.prop('title')).toBe('测试标题')
    expect(component.find('.at-card__header-title').first().text()).toBe('测试标题')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props note', () => {
    const component = mount(<AtCard note='testNote'>测试文字</AtCard>)
    expect(component.prop('note')).toBe('testNote')
    expect(component.find('taro-view-core')).toHaveLength(5)
    expect(component.find('.at-card__content-note').first().text()).toBe('testNote')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props thumb', () => {
    const component = mount(<AtCard thumb={imageLink}>测试文字</AtCard>)
    expect(component.prop('thumb')).toBe(imageLink)
    expect(component.find('taro-view-core')).toHaveLength(5)
    expect(component.find('taro-image-core')).toHaveLength(1)
    expect(component.find('.at-card__header-thumb').length).toBeGreaterThanOrEqual(1)
    expect(component.find(Image).first().prop('src')).toBe(imageLink)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props renderIcon', () => {
    const component = mount(<AtCard renderIcon={renderIcon()}>测试文字</AtCard>)
    expect(component.prop('renderIcon')).toMatchObject(renderIcon())
    expect(component.find('taro-view-core')).toHaveLength(4)
    expect(component.find('taro-text-core')).toHaveLength(2)
    expect(component.find('.at-icon.at-icon-settings').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props extra', () => {
    const component = mount(<AtCard extra='额外信息'>测试文字</AtCard>)
    expect(component.prop('extra')).toBe('额外信息')
    expect(component.find('taro-view-core')).toHaveLength(4)
    expect(component.find('taro-text-core')).toHaveLength(2)
    expect(component.find('.at-card__header-extra').first().text()).toBe('额外信息')
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props extraStyle', () => {
    const component = mount(<AtCard extra='额外信息' extraStyle={extraStyle}>测试文字</AtCard>)
    expect(component.prop('extraStyle')).toMatchObject(extraStyle)
    expect(component.find('.at-card__header-extra').first().prop('style')).toMatchObject(extraStyle)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props isFull', () => {
    const component = mount(<AtCard isFull>测试文字</AtCard>)
    expect(component.find('.at-card--full').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })

  it('render Card -- props icon', () => {
    const component = mount(<AtCard icon={iconObject}>测试文字</AtCard>)
    expect(component.prop('icon')).toMatchObject(iconObject)
    expect(component.find('.at-icon.at-icon-chevron-down.at-card__header-icon').length).toBeGreaterThanOrEqual(1)
    expect(component.find('.at-icon').first().prop('style')).toMatchObject(iconStyle)
    expect(component.html()).toMatchSnapshot()
  })
})

describe('Card Behavior', () => {
  it('handle Card -- event onClick', () => {
    const handleClick = jest.fn()
    const component = mount(<AtCard onClick={handleClick}>测试文字</AtCard>)
    component.props().onClick()
    expect(handleClick).toBeCalled()
  })
})
