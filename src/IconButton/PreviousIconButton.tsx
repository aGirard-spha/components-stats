// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

const PreviousButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Précédent' IconComponent={ChevronLeft} {...props} iconPosition='left' />
  )
}
export default PreviousButton
