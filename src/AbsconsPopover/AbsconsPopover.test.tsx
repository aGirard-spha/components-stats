// Generated with util/create-component.js
import React from 'react'
import { render } from '@testing-library/react'
import AbsconsPopover from './AbsconsPopover'
import { AbsconsPopoverProps } from './AbsconsPopover.types'
describe('Test Component', () => {
  let props: AbsconsPopoverProps
  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })
  const renderComponent = () => render(<AbsconsPopover {...props} />)
  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()
    const component = getByTestId('Popover')
    expect(component).toHaveTextContent('harvey was here')
  })
})
