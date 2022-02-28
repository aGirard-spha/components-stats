// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Magnify from 'mdi-material-ui/Magnify'

const SearchButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Rechercher' IconComponent={Magnify} {...props} />
  )
}
export default SearchButton
