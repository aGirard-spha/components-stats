// Generated with util/create-component.js
import { ButtonProps as ButtonPropsMUI } from '@material-ui/core'

export interface ButtonProps extends Omit<ButtonPropsMUI, 'color'> {
    title?: string;
    icon?: boolean;
    IconComponent?: any;
    iconComponentProps?: any
    iconPosition?: 'left' | 'right'
    useIcon?: boolean
    color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'success' | 'info' | 'warning'
    tooltipProps?: any
    component?: any
}
