// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import ChevronRight from 'mdi-material-ui/ChevronRight'

const NextButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Suivant' IconComponent={ChevronRight} {...props} iconPosition='right' />
  )
}
export default NextButton
