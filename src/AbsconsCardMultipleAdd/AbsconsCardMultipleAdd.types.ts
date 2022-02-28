// Generated with util/create-component.js
export interface AbsconsCardMultipleAddProps {

    /**
     * Permet de modifier l'aspect des boutons ajouter et supprimer
     * @default outlined
     */
    variantButton?: 'outlined' | 'text' | 'contained'

    /**
     * Permet de modifier le titre de la cardeMultipleAdd
     * @default 'Ajout multiple'
     */
    title?: string

    /**
     * Permet de désactiver le bouton ajouter
     * @default false
     */
    disabled?: boolean

    /**
     * Permet de modifier le composant du titre
     * @default BoldTypography
     */
    titleComponent?: any

    /**
     * Permet d'ajouter un composant à gauche du bouton ajouter
     */
    headerComponent?: any

    /**
     * Permet de rejouter un divider entre le continue
     * @default false
     */
    hasDivider?: boolean
    onClickAdd?: any
    onClickRemove?: any
    children?: any
    className?: any
    error?: any
    plusButtonProps?: any
}
