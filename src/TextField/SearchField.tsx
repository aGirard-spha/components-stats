import * as React from 'react'
import useInput from '../hooks/useInput'
import { InputAdornment, makeStyles, TextFieldProps } from '@material-ui/core'
import SearchIconButton from '../IconButton/SearchIconButton'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'
import StandardTextField from './StandardTextField'

const useStyles = makeStyles(theme => ({
  rootOutlined: {
    '& > label': {
      transform: 'translate(14px, 9px) scale(1)'
    },
    '& > div': {
      paddingRight: '4px',
      '& > input': {
        padding: '8px 14px',
        '&:-webkit-autofill': {
          WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
          caretColor: theme.palette.type === 'light' ? null : '#fff',
          borderRadius: 'inherit'
        }
      }
    }
  }
}))

const SearchField = ({
  onSubmit,
  defaultValue,
  formId,
  variant,
  InputProps = {},
  label = 'Rechercher',
  ...props
}: {
  onSubmit: any;
  defaultValue: any;
  formId: any;
  variant: any;
  label?: string;
  InputProps: any;
}) => {
  const [text, handleOnChange] = useInput(defaultValue || '')
  const handleSubmit = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    onSubmit(text)
  }

  const classes = useStyles()

  const textFieldProps: TextFieldProps = {
    ...props,
    label,
    InputProps: {
      ...InputProps,
      endAdornment: (
        <InputAdornment position='end'>
          <SearchIconButton type='submit' />
        </InputAdornment>
      )
    },
    value: text,
    onChange: handleOnChange
  }
  let Component = null
  switch (variant) {
    case 'filled': {
      Component = FilledTextField
      break
    }
    case 'outlined': {
      Component = OutlinedTextField
      textFieldProps.classes = { root: classes.rootOutlined }
      break
    }
    case 'standard': {
      Component = StandardTextField
      break
    }
    default: {
      Component = OutlinedTextField
      textFieldProps.classes = { root: classes.rootOutlined }
      break
    }
  }

  return (
    <form id={formId || 'search-form'} onSubmit={handleSubmit}>
      <Component {...textFieldProps} size='medium' />
    </form>
  )
}

export default SearchField
