import * as React from 'react'
import TextFieldMUI from '@material-ui/core/TextField'
import { FilledTextFieldProps } from './TextField.types'
const FilledTextField: React.FC<FilledTextFieldProps> = (props) => {
  const { size = 'small', ...rest } = props
  return (
    <TextFieldMUI
      size={size}
      {...rest}
      variant='filled'
      autoComplete='off'
    />
  )
}
export default FilledTextField
