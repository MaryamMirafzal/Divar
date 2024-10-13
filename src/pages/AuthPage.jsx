import { useState } from "react"
import CheckOTPForm from "../components/templates/CheckOTPForm"
import SendOTPForm from "../components/templates/SendOTPForm"

function AuthPage() {
    const [ step , setStep ] = useState(2)
    const [ mobile , setMobile ] = useState("")
    const [ code , setCode ] = useState("")
  return (
    <div>
        { step == 1 && (
          <SendOTPForm 
            setStep={setStep} 
            mobile={mobile} 
            setMobile={setMobile} 
          />)}
        { step == 2 && (
          <CheckOTPForm 
            code={code} 
            setCode={setCode} 
            mobile={mobile} 
            setStep={setStep}
          />)}
    </div>
  )
}

export default AuthPage