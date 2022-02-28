import React from 'react'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'
import StandardTextField from './StandardTextField'
import { InputAdornment } from '@material-ui/core'
import AccountIcon from 'mdi-material-ui/Account'
const LoginField = ({
  variant,
  label = 'Identifiant',
  ...props
}: {
  variant?: any;
  label?: string;
}) => {
  const textFieldProps = {
    ...props,
    label,
    type: 'email',
    InputProps: {
      startAdornment: <InputAdornment position='start'><AccountIcon fontSize='small' /></InputAdornment>
    }
  }
  switch (variant) {
    case 'filled': {
      return <FilledTextField {...textFieldProps} />
    }
    case 'outlined': {
      return <OutlinedTextField {...textFieldProps} />
    }
    case 'standard': {
      return <StandardTextField {...textFieldProps} />
    }
    default: {
      return <OutlinedTextField {...textFieldProps} />
    }
  }
}

export default LoginField
