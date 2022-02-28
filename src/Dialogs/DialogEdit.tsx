import * as React from 'react'
import Dialog from './Dialog'
import { CancelButton, ValidateButton } from '../Button'
import { ButtonProps } from '../Button/Button.types'
import { DialogProps } from './Dialogs.types'
export interface IDialogEdit extends DialogProps {
  children?: React.ReactNode;
  /**
   * Propriétés passé au bouton fermer
   */
  cancelButtonProps?: ButtonProps;
  /**
   * Propriétés passé au bouton valider
   */
  validateButtonProps?: ButtonProps;
  /**
   * Le titre de la boîte de dialogue
   * @default Modifier
   */
  title?: string;
}

const DialogEdit = (props: IDialogEdit) => {
  const {
    children,
    name,
    actions,
    onClose,
    cancelButtonProps,
    validateButtonProps,
    title,
    buttonsVariant = 'outlined',
    id,
    ...rest
  } = props
  const realTitle = title
  const realName = `${id || name}-edit`
  const formId = `${realName}-form`
  const trueActions = actions || (
    <>
      <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
      <ValidateButton variant={buttonsVariant} form={formId} {...validateButtonProps} />
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

export default DialogEdit
