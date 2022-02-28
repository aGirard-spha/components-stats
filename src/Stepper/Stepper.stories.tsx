// Generated with util/create-component.js
import React from 'react'
import StepperA from './Stepper'
import useStepControl from '../hooks/useStepControl'
import Form from '../Form'
import ButtonRow from './ButtonRow'
import TextField from '../TextField'
import { Grid } from '@material-ui/core'
import useDialog from '../hooks/useDialog'
import DialogFull from '../Dialogs/DialogFull'
import Button from '../Button'
export default {
  title: 'Stepper'
}

const Step1 = (props) => {
  const handleOnSubmit = () => {
    props.onSubmit()
  }
  return (
    <Form onSubmit={handleOnSubmit} id={props.formId}>
      <Grid item >
        <TextField label='Test' />
      </Grid>
      <Grid item >
        <TextField label='Test' />
      </Grid>
    </Form>
  )
}
const Step2 = (props) => {
  const handleOnSubmit = () => {
    props.onSubmit()
  }

  return (
    <Form onSubmit={handleOnSubmit} id={props.formId}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit id lorem et fermentum. Mauris semper fermentum scelerisque. Nullam ut enim ut odio varius dignissim in eu odio. Donec non tincidunt nibh. Morbi at dolor scelerisque, interdum dui id, tempus urna. Curabitur eget tellus felis. Proin sollicitudin arcu sapien, lacinia hendrerit purus tristique quis. Sed placerat urna in turpis tincidunt viverra. Aenean non accumsan dolor. Maecenas euismod bibendum nibh fermentum lobortis. Nunc ultricies sagittis dictum. Aliquam consequat quam at dolor fermentum convallis.

    In ut sapien aliquet, euismod mauris mattis, efficitur ante. Quisque quis rutrum urna. Sed et ligula ligula. Aenean tincidunt mi at posuere porta. Phasellus ut efficitur eros. Nam a mattis turpis, in pharetra ipsum. Vestibulum vulputate pellentesque efficitur. Aliquam erat volutpat.

    Suspendisse venenatis aliquet lorem vitae porta. Curabitur at lorem dictum, viverra velit vitae, congue lorem. Proin nulla massa, fermentum id condimentum sed, hendrerit nec risus. Cras blandit ultrices scelerisque. Phasellus ut diam vestibulum, blandit sem eget, feugiat enim. Etiam porta a nibh id hendrerit. Curabitur faucibus purus sagittis, vestibulum ligula eget, luctus nibh. Morbi tincidunt est maximus tortor hendrerit, id hendrerit nisi vulputate. Vivamus vel placerat nunc. In ac eleifend ante. Etiam vel lectus sed sem viverra iaculis ac non magna. Curabitur blandit, ipsum ac fringilla pretium, lorem purus elementum eros, vel ultrices diam ligula et metus. Aenean posuere orci at odio consequat imperdiet.

    Suspendisse fringilla hendrerit mi eu pellentesque. Suspendisse fermentum elit at urna rutrum, ac accumsan sem volutpat. Vivamus id congue sapien. Sed consectetur malesuada dui, et semper massa semper vitae. Etiam vulputate nisl vel massa convallis tristique. Praesent ac elementum turpis. Mauris lobortis ligula eget arcu laoreet, at vestibulum leo varius.

    Pellentesque ac dapibus nibh. Proin eget eros a erat laoreet semper non ut diam. Integer rhoncus nisl elit, bibendum lobortis ligula tristique vitae. Duis sit amet gravida augue, at efficitur quam. Curabitur facilisis dictum vestibulum. Morbi elementum lacinia sapien. Curabitur vehicula purus quis erat tincidunt malesuada. Fusce sodales neque at orci dignissim, sit amet convallis velit gravida.
    </Form>
  )
}
export const Stepper = () => {
  const [currentStep, next, previous, goto] = useStepControl()

  const step1Submitted = () => {
    window.alert('step 1 submitted')
    next()
  }

  const step2Submitted = () => {
    window.alert('step 2 submitted')
    goto(0)
  }

  const handleOnCancel = () => {
    goto(0)
  }

  const steps = [
    {
      name: 'Recheche/Sélection Agence',
      Content: Step1,
      contentProps: { onSubmit: step1Submitted, formId: 'agency-select' },
      ButtonRow,
      buttonRowProps: { cancel: handleOnCancel, formId: 'agency-select', hasNext: true }
    },
    {
      name: 'Informations Agence',
      Content: Step2,
      contentProps: {
        defaultValues: {},
        onSubmit: step2Submitted,
        formId: 'agency-informations'
      },
      ButtonRow,
      buttonRowProps: { cancel: handleOnCancel, formId: 'agency-informations', hasNext: false, previousClick: () => previous() }
    }
  ]

  return <StepperA variant='progress' currentStep={currentStep} steps={steps} />
}

export const InDialogFull = () => {
  const { open, handleOnClick, handleOnClose } = useDialog(false)
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <DialogFull name='client' open={open} title='FullScreen' onClose={handleOnClose}>
        <Stepper />
      </DialogFull>
    </>
  )
}
