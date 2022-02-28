// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

const BackButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Retour' IconComponent={ArrowLeft} {...props} />
  )
}
export default BackButton
