import * as React from 'react'
import { OutlinedTextFieldProps } from './TextField.types'
import { TextField as TextFieldMUI } from '@material-ui/core'

const TextField: React.FC<OutlinedTextFieldProps> = (props) => {
  const { size = 'small', ...rest } = props
  return (
    <TextFieldMUI
      size={size}
      {...rest}
      variant='outlined'
      autoComplete='off'
    />
  )
}
export default TextField
