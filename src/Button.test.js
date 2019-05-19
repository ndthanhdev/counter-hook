import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Button from './Button'

test.skip('render', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('should invoke onClick when click on', () => {
  const mockHandleClick = jest.fn()
  const wrapper = shallow(<Button text="test" onClick={mockHandleClick} />)
  wrapper.find('button').simulate('click')
  expect(mockHandleClick).toHaveBeenCalledTimes(1)
})
