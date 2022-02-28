import React from 'react'
import { FormHelperText, Checkbox } from '@material-ui/core'
import clsx from 'clsx'
import { PlusIconButton, DeleteIconButton } from '../IconButton'
import Card from '../Card'
import StackHorizontal from '../StackHorizontal'
import Stack from '../Stack'
import { useFlexStyles, useGlobalStyles } from '../styles'
import { FormCheckbox } from '../Checkboxes'
import { Body2Typography } from '../Typography'

// interface CardMultipleAddProps extends Omit<CardProps, 'title'> {
//   /**
//    * La carte est-elle désactivée
//    * @default false
//    */
//   disabled?: boolean;

//   /**
//    * Le titre de la carte
//    * @default 'Ajout Multiple'
//    */
//   title?: React.ReactNode;

//   /**
//    * Fonction exécutée quand le bouton Ajout est cliqué
//    */
//   onClickAdd: () => void;

//   /**
//    * Fonction exécutée quand le bouton Suppression est cliqué
//    */
//   onClickRemove: (index: number) => void;

//   /**
//    * Valeurs à Afficher
//    */
//   values: Array<React.ReactNode>;

//   /**
//    * Erreur à Afficher
//    */
//   error?: string;
// }

const CardMultipleAdd: React.FC<any> = props => {
  const {
    title = 'Ajout Multiple',
    disabled = false,
    onClickAdd,
    onClickRemove,
    children,
    className,
    error,
    plusButtonProps = {},
    headerComponent,
    ...rest
  } = props
  const globalClasses = useGlobalStyles()
  const flexClasses = useFlexStyles()
  return (
    <>
      <Card
        headerProps={{
          title: title,
          action: onClickAdd && (
            <>
              {headerComponent}
              <PlusIconButton disabled={disabled} onClick={onClickAdd} {...plusButtonProps} />
            </>)
        }}
        className={clsx(className, globalClasses.fullHeight)}
        {...rest}
      >
        <Stack spacing={1.5}>
          {React.Children.map(children, (child, index) => {
            return (
              <StackHorizontal fullHeight={false} spacing={2} key={index}>
                <div className={flexClasses.remainingSpace}>{child}</div>
                <DeleteIconButton
                  disabled={disabled}
                  onClick={() => onClickRemove(index)}
                />
              </StackHorizontal>
            )
          })}
        </Stack>
      </Card>
      {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  )
}

export default CardMultipleAdd
