// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import ChevronRight from 'mdi-material-ui/ChevronRight'

const NextButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Suivant' IconComponent={ChevronRight} {...props} iconPosition='right' />
  )
}
export default NextButton
