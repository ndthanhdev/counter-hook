import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { initStore } from './store/utils'
import MainPage from './MainPage'
import * as actions from './store/actions'

jest.useFakeTimers()

test('render', () => {
  const store = initStore()
  const wrapper = mount(
    <Provider store={store}>
      <MainPage />
    </Provider>
  )

  expect(wrapper.find('Button').find({ text: 'Increase' })).toHaveLength(1)
  expect(wrapper.find('Button').find({ text: 'Decrease' })).toHaveLength(1)
  expect(wrapper.find('Button').find({ text: 'Increase Async' })).toHaveLength(
    1
  )
  expect(wrapper.find('Label').find({ value: '0' })).toHaveLength(1)
})

describe('test actions', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('increase, decrease, increaseAsync', () => {
    const store = initStore()
    const wrapper = mount(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )

    jest.spyOn(actions, 'increase')
    wrapper
      .find('Button')
      .find({ text: 'Increase' })
      .simulate('click')
    expect(actions.increase).toHaveBeenCalledTimes(1)

    jest.spyOn(actions, 'decrease')
    wrapper
      .find('Button')
      .find({ text: 'Decrease' })
      .simulate('click')
    expect(actions.decrease).toHaveBeenCalledTimes(1)

    jest.spyOn(actions, 'increaseAsync')
    wrapper
      .find('Button')
      .find({ text: 'Increase Async' })
      .simulate('click')
    jest.advanceTimersByTime(1500)
    expect(actions.increaseAsync).toHaveBeenCalledTimes(1)
  })
})
