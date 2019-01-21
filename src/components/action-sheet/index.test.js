import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtActionSheet from '../../../.temp/components/action-sheet'
import AtActionSheetItem from '../../../.temp/components/action-sheet/body/item'

describe('ActionSheet Snap', () => {
  it('render initial ActionSheet', () => {
    const component = renderToString(
      <AtActionSheet>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened ActionSheet', () => {
    const component = renderToString(
      <AtActionSheet isOpened>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props cancelText', () => {
    const component = renderToString(
      <AtActionSheet isOpened cancelText='取消'>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props title', () => {
    const component = renderToString(
      <AtActionSheet
        isOpened
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened  ActionSheet -- props completed ', () => {
    const component = renderToString(
      <AtActionSheet
        isOpened
        cancelText='取消'
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(component).toMatchSnapshot()
  })
})

describe('ActionSheet Behavior ', () => {
  it('ActionSheet onClose & onCancel & onClick', () => {
    const onClose = jest.fn()
    const onClick = jest.fn()
    const onCancel = jest.fn()

    const component = renderIntoDocument(
      <AtActionSheet
        isOpened
        cancelText='取消'
        onClose={onClose}
        onCancel={onCancel}
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem onClick={onClick}>按钮一</AtActionSheetItem>
      </AtActionSheet>
    )
    const componentDom = findDOMNode(component, 'at-action-sheet')

    const bodyItemDom = componentDom.querySelector('.at-action-sheet__item')
    const footerDom = componentDom.querySelector('.at-action-sheet__footer')
    const overlayDom = componentDom.querySelector('.at-action-sheet__overlay')

    Simulate.click(bodyItemDom)
    expect(onClick).toBeCalled()

    Simulate.click(footerDom)
    expect(onCancel).toBeCalled()

    Simulate.click(overlayDom)
    process.nextTick(() => {
      expect(onClose).toBeCalled()
    })
  })

  it('ActionSheet onClose', () => {
    const onClose = jest.fn()

    const component = renderIntoDocument(
      <AtActionSheet
        isOpened
        cancelText='取消'
        onClose={onClose}
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem>按钮一</AtActionSheetItem>
      </AtActionSheet>
    )
    const componentDom = findDOMNode(component, 'at-action-sheet')
    const footerDom = componentDom.querySelector('.at-action-sheet__footer')

    Simulate.click(footerDom)
    process.nextTick(() => {
      expect(onClose).toBeCalled()
    })
  })
})
