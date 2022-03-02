import React, { Fragment } from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('AtButton test in h5', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'h5'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)

  const AtButton = jest.requireActual('../../components/button').default

  it('render by default', () => {
    const component = renderer.create(<AtButton>click me</AtButton>)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render by different type', () => {
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

  it('render by different size', () => {
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

  it('when fire click clickFn should be called', () => {
    const clickFn = jest.fn()
    const { getByText } = render(
      <AtButton onClick={clickFn} size='tiny'>
        click
      </AtButton>
    )

    fireEvent.click(getByText(/click/i))
    expect(clickFn).toBeCalledTimes(1)
  })

  it('when fire click a disabled button clickFn should not be called', () => {
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
