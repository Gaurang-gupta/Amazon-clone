import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/');
            })
            .catch(error=>alert(error.message));
    }

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // It created new user
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="data:image/png;base64,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" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn}className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to AMAZON FAKE
                    CLONE conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button onClick={register}className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
