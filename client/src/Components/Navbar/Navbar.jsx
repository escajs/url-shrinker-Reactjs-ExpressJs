import React, { useState } from 'react';
import { useDispatch } from "react-redux";
const Navbar = () => {
    const dispatch = useDispatch()
    const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('u_')))
    const signOutHandler = (e) =>{
        e.preventDefault()
        dispatch({type : 'LOGOUT'})
        setUser(null)
    }
    return (
        <nav className="transparent">
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo">Shrink It</a>
                <ul className="right hide-on-med-and-down">
                   {(user && user.hasOwnProperty('token') ) ? 
                    <>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/">New Link</a></li>
                    <li></li> <a className="btn red" onClick={signOutHandler}>Sign Out</a>
                    </>
                    :
                    <li><a href="/auth">Sign In</a></li>
                 }
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;