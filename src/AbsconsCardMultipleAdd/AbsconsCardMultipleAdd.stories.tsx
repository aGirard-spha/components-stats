// Generated with util/create-component.js
import React, { useState } from 'react'
import CardMultipleAddA from '../AbsconsCardMultipleAdd'
import Typography, { Body2Typography } from '../Typography'
import { Checkbox } from '@material-ui/core'
export default {
  title: 'AbsconsCardMultipleAdd'
}
export const AbsoncsCardMultipleAdd = () => {
  const [state, setState] = useState([])
  const onClickAdd = () => setState(prevState => [...prevState, prevState.length + 1])
  const onClickRemove = (index: number) => setState(prevState => [...prevState.slice(0, index), ...prevState.slice(index + 1)])
  const onClickCheckbox = () => setState(prevState => [...prevState, prevState.length + 1])

  const headerComponent = <><Checkbox onChange={onClickCheckbox} /><Body2Typography>Adresse heritée de l'agence ?</Body2Typography> </>

  return (
    <CardMultipleAddA headerComponent={headerComponent} onClickCheckbox={onClickCheckbox} onClickAdd={onClickAdd} onClickRemove={onClickRemove}>
      {state.map(x => {
        return (
          <Typography key={x}>{x}coucou</Typography>
        )
      })}
    </CardMultipleAddA>

  )
}
