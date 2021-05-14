import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { signin,signup } from "./../../actions/auth";
import './Auth.css'
const Auth = () => {
    const dispatch = useDispatch()
    // General States
    const [isSignedUp,setIsSignedUp] = useState(true)
    const [passwordVisible,setPasswordVisible]= useState(false)
    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    //Sign In Checker
    const [signedIn,setSignedIn] = useState(JSON.parse(window.localStorage.getItem('u_')))
    // General Form Handlers
    const signSwitcher = () => {
        setIsSignedUp(prev=>!prev)
        // Because They Share The Same Input, Set the input password to default state for sign up
        setPasswordVisible(false)
    }
    const passSwitcher = () => setPasswordVisible(prev=>!prev)
    const changeHandler = e =>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }


    const submitHandler = e =>{
        e.preventDefault()
        if(isSignedUp){
            dispatch(signin(formData))
        }else{
            dispatch(signup(formData))
        }
    }

     //{console.log(formData)}
    return (
        <div className="row container section">
           {(signedIn && signedIn.hasOwnProperty('token')) && window.location.assign('/')}
           <div className="col s12 m6 offset-m3 white auth-form">
               <div className="section">
                   <h2 style={{margin:'0'}} className="center-align"><i className="red medium white-text material-icons auth-icon">lock_outline</i></h2>
                 <h5 className="center-align">{isSignedUp ? "Authentication " : "Sign Up"} Panel</h5>
               </div>
           <form autoComplete="off" onSubmit={submitHandler}>
               {!isSignedUp && 
               <>
             <div className="input-field col s12 m6">
                   <input type="text" id="firstName" onChange={changeHandler} name="firstName" />
                   <label for="firstName">First Name*</label>
               </div>

               <div className="input-field col s12 m6">
                   <input type="text" id="lastName" onChange={changeHandler} name="lastName" />
                   <label for="lastName">Last Name*</label>
               </div>
               </>
               }
            <div className="input-field col s12">
                <input type="email"id="email" onChange={changeHandler} name="email" />
                <label for="email">E-mail</label>
            </div>
               <div className="input-field col s12 pass_visibility_wrapper">
                   <input type={!passwordVisible ? "password" : "text"} id="password" onChange={changeHandler} name="password" />
                  {isSignedUp &&  <i className="material-icons" onClick={passSwitcher}>{!passwordVisible ? "visibility" : "visibility_off"}</i>}
                   <label for="password">Password*</label>
               </div>

              {!isSignedUp && 
              <>
               <div className="input-field col s12">
                   <input type="password" id="confirmPassword" onChange={changeHandler} name="confirmPassword" />
                   <label for="confirmPassword">Confirm Password*</label>
               </div>
              </>
              }

               <div className="col s12">
                   <button className="btn green btn-block" type="submit">{isSignedUp ? "Sign In" : "Sign Up"}</button>
               </div>
               <div className="col s12">
                   <button onClick={signSwitcher} style={{marginTop:'0.5em'}} className="btn blue btn-block" type="submit">{isSignedUp ? "Don't have an accout ? Sign Up" : "Already have an account ? Sign In"}</button>
               </div>
           </form>
           </div>
        </div>
    );
}
 
export default Auth;