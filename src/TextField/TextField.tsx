import * as React from 'react'
import TextFieldMUI from '@material-ui/core/TextField'
import { OutlinedTextFieldProps } from './TextField.types'

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
