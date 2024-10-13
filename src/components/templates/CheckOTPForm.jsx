import { checkOtp } from "../../Services/auth";

function CheckOTPForm({code , setCode , mobile , setStep}) {

  const submitHandler = async (event)=>{
    event.preventDefault()
    // console.log({code, mobile});

    if( code.length !== 5) return;

    const { response , error } = await checkOtp(mobile, code)
    console.log({response , error});
    if(response){
      console.log(response);
    }
    if(error) console.log(error.response.data.message);
  }
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده.</p>
      <span>کد تایید شده به شماره {mobile} را وارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input 
        type="text" 
        id="input" 
        placeholder="کد تایید" 
        value={code} 
        onChange={e => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={()=> setStep(1)}>تغیر شماره موبایل</button>
    </form>
  )
}

export default CheckOTPForm