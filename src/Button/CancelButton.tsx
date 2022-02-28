// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Close from 'mdi-material-ui/Close'

const CancelButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='error' title='Annuler' IconComponent={Close} {...props} />
  )
}
export default CancelButton
