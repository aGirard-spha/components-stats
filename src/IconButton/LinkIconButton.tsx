// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Link from 'mdi-material-ui/Link'

const LinkButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='success' title='Liens' IconComponent={Link} {...props} iconPosition='right' />
  )
}
export default LinkButton
