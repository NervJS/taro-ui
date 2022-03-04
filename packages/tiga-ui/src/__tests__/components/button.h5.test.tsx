import React, { Fragment } from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('AtButton 测试在 h5 环境 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'h5'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)

  const AtButton = jest.requireActual('../../components/button').default

  it('展示：默认展示', () => {
    const component = renderer.create(<AtButton>click me</AtButton>)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：不同的 type', () => {
    const component = renderer.create(
      <Fragment>
        <AtButton type='primary'>primary</AtButton>
        <AtButton type='secondary'>secondary</AtButton>
        <AtButton type='tertiary'>tertiary</AtButton>
      </Fragment>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：不同的 size', () => {
    const component = renderer.create(
      <Fragment>
        <AtButton size='full'>full</AtButton>
        <AtButton size='large'>large</AtButton>
        <AtButton size='medium'>medium</AtButton>
        <AtButton size='mini'>mini</AtButton>
        <AtButton size='small'>small</AtButton>
        <AtButton size='tiny'>tiny</AtButton>
      </Fragment>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('交互：点击按钮时触发 onClick 绑定的处理函数', () => {
    const clickFn = jest.fn()
    const { getByText } = render(
      <AtButton onClick={clickFn} size='tiny'>
        click
      </AtButton>
    )

    fireEvent.click(getByText(/click/i))
    expect(clickFn).toBeCalledTimes(1)
  })

  it('交互：当组件属性 disabled 时，点击按钮时不触发 onClick 绑定的处理函数', () => {
    const clickFn = jest.fn()
    const { getByText } = render(
      <AtButton disabled onClick={clickFn}>
        click
      </AtButton>
    )

    fireEvent.click(getByText(/click/i))
    expect(clickFn).toBeCalledTimes(0)
  })
})
