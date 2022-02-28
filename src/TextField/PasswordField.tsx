import React, { useCallback, useState } from 'react'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'
import StandardTextField from './StandardTextField'
import { InputAdornment } from '@material-ui/core'
import LockIcon from 'mdi-material-ui/Lock'
import EyeOnIcon from 'mdi-material-ui/Eye'
import EyeOffIcon from 'mdi-material-ui/EyeOff'
import IconButton from '../IconButton/IconButton'
const PasswordField = ({
  variant,
  label = 'Mot de passe',
  noStartIcon = false,
  ...props
}: {
  variant?: any;
  noStartIcon?: boolean;
  label?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = useCallback(() => {
    setShowPassword(!showPassword)
  }, [setShowPassword, showPassword])

  const textFieldProps = {
    ...props,
    label,
    type: showPassword ? 'text' : 'password',
    InputProps: {
      startAdornment: noStartIcon ? null : <InputAdornment position='start'><LockIcon fontSize='small' color='primary' /></InputAdornment>,
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton
            aria-label='Change visibilité mot de passe'
            onClick={handleClickShowPassword}
            edge='end'
            variant='text'
            color='primary'
            title={showPassword ? 'Cacher mot de passe' : 'Montrer mot de passe'}
            IconComponent={showPassword ? EyeOnIcon : EyeOffIcon}
          />
        </InputAdornment>
      )
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

export default PasswordField
