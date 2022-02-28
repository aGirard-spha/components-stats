import React, { forwardRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link, makeStyles } from '@material-ui/core'
import BoldTypography from '../Typography'
import Button from '../Button'
import Stack from '../Stack'
import { ReactComponent as Logo } from './sadShiba.svg'
import { ErrorProps } from './Error.type'

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '1.50rem'
  }
}))

const Error: React.FC<ErrorProps> = props => {
  const classes = useStyles()
  const { type, errorTitle, defaultLink, titleLink, loginTitle, loginLink, target } = props

  let error = ''
  let href = defaultLink
  let title = titleLink
  switch (type) {
    case 'rights': {
      error = 'Vous ne devriez pas être ici.'
      break
    }
    case 'login': {
      error = "Vous n'êtes pas connecté."
      href = loginLink || defaultLink
      title = loginTitle || 'Se connecter'
      break
    }
    case 'forbidden': {
      error = "Vous n'avez pas d'accès. Veuillez contacter votre administrateur."
      break
    }
    default: {
      error = "CETTE PAGE N'EXISTE PAS."
      break
    }
  }
  return (

    <Stack justify='center' align='center' spacing={2}>
      <Logo {...props} />
      <BoldTypography textTransform='uppercase' className={classes.text}>{errorTitle || error}</BoldTypography>
      <Button color='primary' title={title} href={href} />
    </Stack>

  )
}

export default Error
