import * as React from 'react'
import BoldTypography from './BoldTypography'
import VeryBoldTypography from './VeryBoldTypography'
import { TypographyProps } from './Typography.types'
import Typography from './Typography'

const Body2Typography: React.FC<TypographyProps & { type?: 'base' | 'bold' | 'verybold' }> = props => {
  const { type, ...rest } = props
  switch (type) {
    case 'bold':
      return <BoldTypography {...rest} variant='body2' />
    case 'verybold':
      return <VeryBoldTypography {...rest} variant='body2' />
    default:
      return <Typography {...rest} variant='body2' />
  }
}

export default Body2Typography
