// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import DotsVertical from 'mdi-material-ui/DotsVertical'

const ActionsButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Actions' IconComponent={DotsVertical} {...props} />
  )
}
export default ActionsButton
