// Generated with util/create-component.js
import React from 'react'
import { render } from '@testing-library/react'
import Dialogs from './Dialogs'
import { DialogsProps } from './Dialogs.types'
describe('Test Component', () => {
  let props: DialogsProps
  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })
  const renderComponent = () => render(<Dialogs {...props} />)
  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()
    const component = getByTestId('Dialogs')
    expect(component).toHaveTextContent('harvey was here')
  })
})
