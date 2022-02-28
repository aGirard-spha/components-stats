import React from 'react'
import FilledTextField from './FilledTextField'
import OutlinedTextField from './OutlinedTextField'
import StandardTextField from './StandardTextField'
const NumberField = ({
  variant,
  label = 'Number',
  min,
  max,
  step,
  inputProps = {},
  ...props
}: {
  variant?: any;
  label?: string;
  InputLabelProps: any;
  min?: number,
  max?: number,
  step?: any,
  inputProps?: any
}) => {
  const textFieldProps = {
    ...props,
    label,
    type: 'number',
    inputProps: { min, max, step, ...inputProps }
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

export default NumberField
