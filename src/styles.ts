import { makeStyles } from '@material-ui/core'

export const useGlobalStyles = makeStyles(theme => ({
  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },
  whiteSpacePre: { whiteSpace: 'pre' },
  textAlignLeft: { textAlign: 'left' },
  textAlignCenter: { textAlign: 'center' },
  textAlignRight: { textAlign: 'right' },
  textAlignJustify: { textAlign: 'justify' },
  margin075: { margin: theme.spacing(0.75) }
}))

export const useFlexStyles = makeStyles({
  root: { display: 'flex' },
  alignCenter: { alignItems: 'center' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  column: { flexDirection: 'column' },
  remainingSpace: { flex: '1 1 auto' },
  neededSpace: { flex: '0 1 auto' },
  justifyCenter: { justifyContent: 'center' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyAround: { justifyContent: 'space-around' },
  justifyBetween: { justifyContent: 'space-between' }
})
