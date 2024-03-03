import { useContext, useRef, useState } from "react";
import { PasswordsContext } from "./store";

function Home(){
    let inputValue=useRef("");
    let {add}=useContext(PasswordsContext);
    const handleSubmit=(val)=>{
       add(val);
       inputValue.current.value="";
    }
    const [checkedStrength,setStrength]=useState("no");
    const handleCheck=(val)=>{
        let length=val.length;
        setStrength(length);
    }
    return <>
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto rk">
        <form>
          <h1 className="h3 mb-3 fw-normal">Enter your password</h1>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={inputValue}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-danger w-100 py-2" type="submit" onClick={()=>{handleCheck(inputValue.current.value)}}>
            Check the Strength
          </button>
          <button className="btn btn-primary w-100 py-2 check-button" type="submit" onClick={()=>{handleSubmit(inputValue.current.value)}}>
            Submit
          </button>
        </form>
        </main>
    </div>
    {checkedStrength!=="no" ?<div className="checker"><h1>The Strength of the password is {checkedStrength}</h1></div> : <div></div>}
    </>

}

export default Home;