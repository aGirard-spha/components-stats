// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Filter from 'mdi-material-ui/Filter'

const FilterButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Filtrer' IconComponent={Filter} {...props} />
  )
}
export default FilterButton
