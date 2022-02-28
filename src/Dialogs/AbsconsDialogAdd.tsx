import * as React from 'react'
import { CancelButton, ValidateButton } from '../Button'
import Dialog from './Dialog'
import { ButtonProps } from '../Button/Button.types'
import { DialogProps } from './Dialogs.types'
import AbsconsDialog from './AbsconsDialog'
import { CancelIconButton } from '../IconButton'
import { makeStyles } from '@material-ui/core'

export interface IDialogAdd extends DialogProps {
  children?: React.ReactNode;
  /**
   * Propriétés passé au bouton fermer
   */
  cancelButtonProps?: ButtonProps;
  /**
   * Propriétés à passer au bouton valider
   */
  validateButtonProps?: ButtonProps;
  /**
   * Le titre de la boîte de dialogue
   * @default Ajout
   */
  title?: string;
}


const useStyles = makeStyles({
    actions: {
      background: '#FBFBFB',
      justifyContent: 'unset'
    },
    fullHeight: { height: '100%' },
    closeIcon: { textAlign: 'right', position: 'absolute', right: '16px', top: '12px' }
  })

const AbsconsDialogAdd = (props: IDialogAdd) => {
  const {
    children,
    name,
    actions,
    title,
    onClose,
    id,
    cancelButtonProps,
    validateButtonProps,
    closeButtonProps,
    buttonsVariant = 'outlined',
    haveButton = true,
    ...rest
  } = props
  const realTitle = title
  const realName = `${id || name}-add`
  const formId = `${realName}-form`

  const classes = useStyles()

  let trueActions = haveButton ? actions || (
    <>
      <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
      <ValidateButton variant={buttonsVariant} form={formId} {...validateButtonProps} />
    </>) : <CancelIconButton title='Fermer' tooltipProps={{ className: classes.closeIcon }} key='close' {...closeButtonProps} onClick={onClose} />
  

//   const trueActions = actions || (
//     <>
//       <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
//       <ValidateButton form={formId} variant={buttonsVariant} {...validateButtonProps} />
//     </>
//   )
  return (
    <AbsconsDialog
      type='Add'
      {...rest}
      actions={trueActions}
      onClose={onClose}
      name={realName}
      id={realName}
      title={realTitle}
      haveButton={haveButton}
    >
      {children}
    </AbsconsDialog>
  )
}

export default AbsconsDialogAdd
