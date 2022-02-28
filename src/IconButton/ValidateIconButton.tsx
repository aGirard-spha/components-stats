// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Check from 'mdi-material-ui/Check'

const ValidateButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Valider' type='submit' IconComponent={Check} {...props} />
  )
}
export default ValidateButton
