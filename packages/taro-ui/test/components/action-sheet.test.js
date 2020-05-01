import React from 'react'
import { mount } from 'enzyme'
import AtActionSheet from '../../lib/components/action-sheet'
import AtActionSheetItem from '../../lib/components/action-sheet/body/item'

describe('ActionSheet Component', () => {
  it('render initial ActionSheet', () => {
    const component = mount(
      <AtActionSheet>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component.find('taro-view-core')).toHaveLength(6)
    expect(component.find('.at-action-sheet__item').children().first().text()).toBe('按钮一')
    expect(component.find('.at-action-sheet__item').children().last().text()).toBe('按钮二')
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActionSheet -- props title', () => {
    const component = mount(
      <AtActionSheet title='title'>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component.find('.at-action-sheet__header').children().first().text()).toBe('title')
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActionSheet -- props cancelText', () => {
    const component = mount(
      <AtActionSheet cancelText='cancel'>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component.find('.at-action-sheet__footer').children().first().text()).toBe('cancel')
    expect(component.html()).toMatchSnapshot()
  })

  it('render ActionSheet -- props isOpened ', () => {
    const component = mount(
      <AtActionSheet isOpened>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component.find('.at-action-sheet--active').length).toBeGreaterThanOrEqual(1)
    expect(component.html()).toMatchSnapshot()
  })
})

// describe('ActionSheet Behavior ', () => {
//   it('ActionSheet onClose & onCancel & onClick', () => {
//     const onClose = jest.fn()
//     const onClick = jest.fn()
//     const onCancel = jest.fn()

//     const component = renderIntoDocument(
//       <AtActionSheet
//         isOpened
//         cancelText='取消'
//         onClose={onClose}
//         onCancel={onCancel}
//         title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
//       >
//         <AtActionSheetItem onClick={onClick}>按钮一</AtActionSheetItem>
//       </AtActionSheet>
//     )
//     const componentDom = findDOMNode(component, 'at-action-sheet')

//     const bodyItemDom = componentDom.querySelector('.at-action-sheet__item')
//     const footerDom = componentDom.querySelector('.at-action-sheet__footer')
//     const overlayDom = componentDom.querySelector('.at-action-sheet__overlay')

//     Simulate.click(bodyItemDom)
//     expect(onClick).toBeCalled()

//     Simulate.click(footerDom)
//     expect(onCancel).toBeCalled()

//     Simulate.click(overlayDom)
//     process.nextTick(() => {
//       expect(onClose).toBeCalled()
//     })
//   })

//   it('ActionSheet onClose', () => {
//     const onClose = jest.fn()

//     const component = renderIntoDocument(
//       <AtActionSheet
//         isOpened
//         cancelText='取消'
//         onClose={onClose}
//         title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
//       >
//         <AtActionSheetItem>按钮一</AtActionSheetItem>
//       </AtActionSheet>
//     )
//     const componentDom = findDOMNode(component, 'at-action-sheet')
//     const footerDom = componentDom.querySelector('.at-action-sheet__footer')

//     Simulate.click(footerDom)
//     process.nextTick(() => {
//       expect(onClose).toBeCalled()
//     })
//   })
// })
