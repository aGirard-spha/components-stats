// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Close from 'mdi-material-ui/Close'

const CancelButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='error' title='Annuler' IconComponent={Close} {...props} />
  )
}
export default CancelButton
