import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import AbsconsPopoverA from '../AbsconsPopover'
export default {
  title: 'AbsconsPopover'
}
export const AbsconsPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleOnClose = () => setAnchorEl(null)
  const handleOnClick = (e) => setAnchorEl(e.currentTarget)
  const open = Boolean(anchorEl)
  return (
    <>
      <Button onClick={handleOnClick}>coucou</Button>
      <AbsconsPopoverA
        open={open}
        anchorEl={anchorEl}
        onClose={handleOnClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div>coucou</div>
        <div>coucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucoucou</div>
      </AbsconsPopoverA>
    </>
  )
}
