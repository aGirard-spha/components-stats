import * as React from 'react'
import { CancelButton, ValidateButton } from '../Button'
import Dialog from './Dialog'
import { ButtonProps } from '../Button/Button.types'
import { DialogProps } from './Dialogs.types'

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

const DialogAdd = (props: IDialogAdd) => {
  const {
    children,
    name,
    actions,
    title,
    onClose,
    id,
    cancelButtonProps,
    validateButtonProps,
    buttonsVariant = 'outlined',
    ...rest
  } = props
  const realTitle = title || 'Ajouter'
  const realName = `${id || name}-add`
  const formId = `${realName}-form`
  const trueActions = actions || (
    <>
      <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
      <ValidateButton form={formId} variant={buttonsVariant} {...validateButtonProps} />
    </>
  )
  return (
    <Dialog
      {...rest}
      actions={trueActions}
      onClose={onClose}
      name={realName}
      id={realName}
      title={realTitle}
    >
      {children}
    </Dialog>
  )
}

export default DialogAdd
