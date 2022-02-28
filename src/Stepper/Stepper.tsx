import React from 'react'
import clsx from 'clsx'
import { Stepper as StepperMUI, makeStyles, Step, StepLabel, Theme, Divider } from '@material-ui/core'
import { useFlexStyles } from '../styles'
import Stack from '../Stack'
import Paper from '../Paper'

const useStyles = makeStyles((theme: Theme) => ({
  root: { backgroundColor: 'unset' },
  active: { fontSize: '1.2rem' },
  stepContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    margin: theme.spacing(2)
  }
}))

const Stepper: React.FC<any> = ({ variant, currentStep = 0, stepperProps = { children: [] }, steps }: any) => {
  const classes = useStyles()
  const flexClasses = useFlexStyles()
  const Content = steps[currentStep].Content
  const contentProps = steps[currentStep].contentProps
  const ButtonRow = steps[currentStep].ButtonRow
  const buttonRowProps = steps[currentStep].buttonRowProps
  const { className, ...rest } = stepperProps

  return (
    <Stack component={Paper}>
      <StepperMUI
        alternativeLabel
        nonLinear
        component='div'
        activeStep={currentStep}
        className={clsx(flexClasses.neededSpace, classes.root, className)}
        {...rest}
      >
        {steps.map((step: any, idx: any) => {
          return (
            <Step key={idx}>
              <StepLabel classes={{ active: classes.active }}>{step.name}</StepLabel>
            </Step>
          )
        })}
      </StepperMUI>
      <Divider />
      <Stack fullWidth={false} className={classes.stepContent} spacing={2}>
        <div
          className={clsx(
            flexClasses.remainingSpace
          )}
        >
          <Content {...contentProps} />
        </div>
        {ButtonRow && (
          <div className={clsx(flexClasses.neededSpace)}>
            <ButtonRow {...buttonRowProps} />
          </div>
        )}
      </Stack>
    </Stack>
  )
}

export default Stepper
