// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Check from 'mdi-material-ui/Check'

const ValidateButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Valider' type='submit' IconComponent={Check} {...props} />
  )
}
export default ValidateButton
