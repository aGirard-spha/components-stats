import { TextFieldProps } from '@material-ui/core'
// Generated with util/create-component.js
import { AutocompleteProps as AutocompletePropsMUI } from '@material-ui/lab/Autocomplete'

export interface AutocompleteProps<T> extends Omit<AutocompletePropsMUI<T, boolean | undefined, boolean | undefined, boolean | undefined>, 'renderInput'|'options'> {
  /**
   * Le tableau des suggestions
   * @default []
   */
  suggestions?: T[];
  /**
   * Les clés sur lesquelles chercher les valeus
   * @default ['label']
   */
  keys?: string[];
  /**
   * Les seuil de recherche
   * @default 0.6
   */
  threshold?: number;
  /**
   * Calcul du label à partir de ces clés
   * @default ['label']
   */
  labelFromKeys?: string[] | ((element: any) => string);

  textfieldProps: TextFieldProps

  onSelect: (param: any) => void

  options?: T[]

  renderInput?: any

  label?: string
  error?: boolean
  helperText?: string
  required?: boolean
}
