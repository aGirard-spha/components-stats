import React from 'react'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'
import StandardTextField from './StandardTextField'
const DateField = ({
  variant,
  InputLabelProps = {},
  label = 'Date',
  ...props
}: {
  variant?: any;
  label?: string;
  InputLabelProps: any;
}) => {
  const textFieldProps = {
    ...props,
    label,
    type: 'date',
    InputLabelProps: { shrink: true, ...InputLabelProps }
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

export default DateField
