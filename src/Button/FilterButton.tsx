// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Filter from 'mdi-material-ui/Filter'

const LinkButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Filtrer' IconComponent={Filter} {...props} />
  )
}
export default LinkButton
