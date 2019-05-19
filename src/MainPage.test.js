import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { initStore } from './store'
import MainPage from './MainPage'

test('render', () => {
  const store = initStore()
  const wrapper = mount(
    <Provider store={store}>
      <MainPage />
    </Provider>
  )

  expect(1).toBe(1)
})
