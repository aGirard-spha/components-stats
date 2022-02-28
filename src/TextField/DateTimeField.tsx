import React from 'react'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'
import StandardTextField from './StandardTextField'
const DateTimeField = ({
  variant,
  InputLabelProps = {},
  label = 'DateTime',
  ...props
}: {
  variant?: any;
  label?: string;
  InputLabelProps: any;
}) => {
  const textFieldProps = {
    ...props,
    label,
    type: 'datetime-local',
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

export default DateTimeField
