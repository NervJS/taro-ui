import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('AtActionSheet 测试在 weapp 环境，h5 类似 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'h5'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)

  const AtActionSheet = jest.requireActual(
    '../../components/actionsheet'
  ).default
  const AtActionSheetItem = jest.requireActual(
    '../../components/actionsheet/ActionSheet/Item'
  ).default

  it('展示：当 isOpened 属性是 false', () => {
    const component = renderer.create(
      <AtActionSheet cancelText='取消' isOpened={false}>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：当 isOpened 属性是 true', () => {
    const component = renderer.create(
      <AtActionSheet cancelText='取消' isOpened>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：配置 title 和 content 属性', () => {
    const component = renderer.create(
      <AtActionSheet
        cancelText='取消'
        isOpened={true}
        title='此处是操作释义，建议20个字以内，使用陈述句'
        content='展示内容'
      >
        此处内容不展示
      </AtActionSheet>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('交互：当有取消事件处理函数时，点击取消触发改事件，且调用关闭处理函数', () => {
    const cancelFn = jest.fn()
    const closeFn = jest.fn()

    const { getByText } = render(
      <AtActionSheet
        cancelText='取消'
        isOpened={true}
        onCancel={cancelFn}
        onClose={closeFn}
        title='此处是操作释义，建议20个字以内，使用陈述句'
        content='展示内容'
      />
    )

    fireEvent.click(getByText(/取消/i))

    expect(cancelFn).toBeCalledTimes(1)
    expect(closeFn).toBeCalledTimes(1)
  })

  it('交互：点击 mask 时，默认关闭动作面板', () => {
    const cancelFn = jest.fn()
    const closeFn = jest.fn()

    const { getByTestId } = render(
      <AtActionSheet
        cancelText='取消'
        isOpened={true}
        onCancel={cancelFn}
        onClose={closeFn}
        title='此处是操作释义，建议20个字以内，使用陈述句'
        content='展示内容'
      />
    )

    const overlay = getByTestId('at-action-sheet__overlay')

    expect(overlay.parentElement?.className).toContain('active')
    fireEvent.click(overlay)
    expect(overlay.parentElement?.className).not.toContain('active')
    expect(cancelFn).not.toBeCalled()
    expect(closeFn).toBeCalledTimes(1)
  })
})
