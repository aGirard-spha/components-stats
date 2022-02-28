import * as React from 'react'
import TextFieldMUI from '@material-ui/core/TextField'
import { StandardTextFieldProps } from './TextField.types'
const StandardTextField: React.FC<StandardTextFieldProps> = (props) => {
  const { size = 'small', ...rest } = props
  return (
    <TextFieldMUI
      size={size}
      {...rest}
      variant='standard'
      autoComplete='off'
    />
  )
}
export default StandardTextField
