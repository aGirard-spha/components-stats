import { useState } from 'react'

const useStepControl = (initialStep = 0): [number, any, any, any] => {
  const [step, setStep] = useState(initialStep)
  const next = () => { setStep(step + 1) }
  const back = () => { setStep(step - 1) }
  const goto = (step: number) => { setStep(step) }
  return [step, next, back, goto]
}

export default useStepControl
