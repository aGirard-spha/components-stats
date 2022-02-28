// Generated with util/create-component.js
import { DialogProps as DialogPropsMUI } from '@material-ui/core/Dialog'
import { DialogTitleProps } from '@material-ui/core/DialogTitle'
import { DialogActionsProps } from '@material-ui/core/DialogActions'
import { DialogContentProps } from '@material-ui/core/DialogContent'

export interface DialogProps extends DialogPropsMUI {
    /**
     * Le titre de la boîte de dialogue
     * @default Information
     */
    title?: string;
    titleProps?: DialogTitleProps;
    /**
     * Les opérations associées à la boite de
     * dialogue (Action,Annuler,...)
     * @default  Bouton Fermer
     */
    actions?: React.ReactNode;
    /**
     * Propriétés passé au composant DialogActions material-ui
     */
    actionsProps?: DialogActionsProps;
    /**
     * Couleur de fond pour actions
     */
    backgroundActions?: Color;
    /**
     * Propriétés passé au composant DialogContent material-ui
     */
    contentProps?: DialogContentProps;
    /**
     * Propriétés passé au bouton fermer
     */
    closeButtonProps?: any;
    /**
     * Propriétés passé au composant Dialog material-ui
     */
    DialogProps?: DialogProps;
    /**
     * Permet d'identifier de manière unique le dialogue ainsi
     * que le formulaire
     */
    name: string;
    /**
     * Indique que le composant doit prendre toute la place
     */
    full?: boolean;
    /**
     * Indique une aide au remplissage des champs
     */
    hint?: string;

    /**
     * Permet de retirer les bouttons
     * @default true
     */
    haveButton?: boolean

    onClose?: any

    noClose?: boolean
    /**
     * Change le type de la dialog
     * @default dialog
     */
    type?: 'Add' | 'Delete' | 'Edit'

    cancelButtonProps?: any

    validateButtonProps?: any

    buttonsVariant?: 'contained' | 'outlined' | 'text'
  }
