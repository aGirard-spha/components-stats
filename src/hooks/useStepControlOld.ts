import { useState } from 'react'
const useStepControlOld = (initialStep = 0) => {
  const [step, setStep] = useState(initialStep)
  const next = () => setStep(step + 1)
  const back = () => setStep(step - 1)
  const goto = (step: number) => setStep(step)
  return { step, next, back, goto }
}

export default useStepControlOld
