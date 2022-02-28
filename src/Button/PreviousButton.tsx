// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

const PreviousButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Précédent' IconComponent={ChevronLeft} {...props} iconPosition='left' />
  )
}
export default PreviousButton
