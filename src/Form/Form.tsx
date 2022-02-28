import * as React from 'react'
import clsx from 'clsx'
import { Grid, Box } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'
import { BoxProps } from '@material-ui/core/Box'

interface FormProps {
  /**
   * Id du formulaire
   */
  id: string;

  componentProps?: any

  /**
   * Fonction exécutée après la soumission du formulaire
   */
  onSubmit: any;

  /**
   * Composant principal du formulaire
   * @default Grid
   */
  component?: any;

  /**
   * Les enfants du composants
   * @default undefined
   */
  children?: any;

  /**
   * Classes CSS à appliquer au formulaire
   * @default ''
   */
  formClassName?: string;

  /**
   * Classes CSS à appliquer
   * @default ''
   */
  className?: string;

  /**
   * Les propriétés de la grille si le composant par défault est utilisé.
   * @default {}
   */
  gridProps?: GridProps;

  /**
   * Propriétés de la boîte
   */
  boxProps?: BoxProps;

  noPadding?: boolean
}

const defaultGridProps: GridProps = {
  container: true,
  spacing: 2
}

const defaultBoxProps = { height: '100%', clone: true }

const Form: React.FC<FormProps> = ({
  id,
  onSubmit,
  gridProps = defaultGridProps,
  component = undefined,
  children = undefined,
  className = '',
  componentProps = {},
  boxProps = defaultBoxProps,
  noPadding
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    onSubmit()
  }
  const Component = component
  if (Component) {
    return (
      <form id={id} onSubmit={handleSubmit} className={clsx(className)}>
        {component && <Component {...componentProps} className={clsx(className)}>{children}</Component>}
      </form>
    )
  }
  const trueGridProps = { ...defaultGridProps, ...gridProps }
  const gridClassName = clsx(trueGridProps.className, className)
  const trueBoxProps = { p: noPadding ? 0 : (trueGridProps.spacing || 2) / 2, ...defaultBoxProps, ...boxProps }
  return (
    <Box {...trueBoxProps}>
      <form autoComplete='off' id={id} onSubmit={handleSubmit} className={clsx(className)}>
        <Box height='100%' clone>
          <Grid {...trueGridProps} className={gridClassName}>
            {children}
          </Grid>
        </Box>
      </form>
    </Box>
  )
}

export default Form
