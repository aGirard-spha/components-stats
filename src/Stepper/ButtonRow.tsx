import React from 'react'
import { CancelButton, ValidateButton, PreviousButton, NextButton } from '../Button'
import { CircularProgress, makeStyles } from '@material-ui/core'
import StackHorizontal from '../StackHorizontal'

const useStyles = makeStyles((theme: any) => ({
  root: { }
}))

export default (props: any) => {
  const { submitting, formId, previousClick, hasNext, cancel, onSubmit, onClick, onClickOptional } = props
  const isReactElement = React.isValidElement(cancel) || typeof cancel === 'object'
  const classes = useStyles()
  let component
  if (submitting) {
    component = (
      <CircularProgress size={24} />
    )
  } else {
    component = (
      <>
        {previousClick && <PreviousButton onClick={previousClick} />}
        <CancelButton onClick={isReactElement ? undefined : cancel} component={isReactElement ? cancel : undefined} />
        {typeof hasNext === 'boolean' && (
          <>
            {hasNext && <NextButton type={onClick ? 'button' : 'submit'} form={formId} onClick={onClick} />}
            {!hasNext && <ValidateButton type='submit' form={formId} onClick={onSubmit} />}
          </>
        )}
        {onClickOptional && (
          <NextButton type='button' onClick={onClickOptional} title='Passer' />
        )}
      </>
    )
  }
  return (
    <StackHorizontal className={classes.root} spacing={2}>
      {component}
    </StackHorizontal>
  )
}
