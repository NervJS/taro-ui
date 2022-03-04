import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Image } from '../__mock__/taroComponent'

describe('AtCurtain 测试在 weapp 环境，h5类似 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'weapp'
  const curtainPng = 'https://taro-ui.aotu.io/h5/static/images/curtain.png'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)

  const AtCurtain = jest.requireActual('../../components/curtain').default

  it('展示：默认基础幕帘', () => {
    const component = renderer.create(
      <AtCurtain isOpened={true}>
        <Image style={{ width: '100%' }} mode='widthFix' src={curtainPng} />
      </AtCurtain>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：幕帘关闭按钮展示在指定位置', () => {
    const component = renderer.create(
      <AtCurtain isOpened={true} closeBtnPosition='top'>
        <Image style={{ width: '100%' }} mode='widthFix' src={curtainPng} />
      </AtCurtain>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('交互：点击关闭图标关闭幕帘', () => {
    const onCloseFn = jest.fn()

    const { getByTestId } = render(
      <AtCurtain isOpened={true} onClose={onCloseFn}>
        <Image style={{ width: '100%' }} mode='widthFix' src={curtainPng} />
      </AtCurtain>
    )

    const closeBtn = getByTestId('at-curtain__btn-close')
    const container = getByTestId('at-curtain')

    expect(container.className).not.toContain('closed')
    fireEvent.click(closeBtn)
    expect(container.className).toContain('closed')
    expect(onCloseFn).toBeCalledTimes(1)
  })
})
