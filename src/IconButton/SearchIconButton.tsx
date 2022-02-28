// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Magnify from 'mdi-material-ui/Magnify'

const SearchButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Rechercher' IconComponent={Magnify} {...props} />
  )
}
export default SearchButton
