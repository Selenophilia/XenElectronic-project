import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../actions/userAction'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader'
import AlertMessages from '../components/AlertMessages';

function Register(props){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')


    const user = useSelector(state => state.userRegister)
    const { userInfo, loading, error }  = user

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        if( password !== confirmpassword) {
            alert('password does not match!')
        } else {
            dispatch(register(name,email,password))

        }   
    }

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect)
        }
    }, [userInfo, props.history, redirect])

    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div> <h1> Register</h1></div>
                {loading && <Loader />}
                {error && <AlertMessages> {error.message}</AlertMessages>}

                <div> <label htmlFor="email"> Name</label>
                    <input type="text" 
                           id="name"
                           placeholder="Enter your name..."
                           onChange={(e) => setName(e.target.value)}  
                           required/>
                </div>

                <div> <label htmlFor="email"> Email</label>
                    <input type="email" 
                           id="email"
                           placeholder="Enter your email..."
                           onChange={(e) => setEmail(e.target.value)}  
                           required/>
                </div>
                <div> <label htmlFor="password"> Password</label>
                    <input type="password" 
                           id="password"
                           placeholder="Enter your password..."
                           onChange={(e) => setPassword(e.target.value)}  
                           required/>
                </div>
                <div> <label htmlFor="password"> Confirm Password</label>
                    <input type="password" 
                           id="confirmpassword"
                           placeholder="confirm your password..."
                           onChange={(e) => setConfirmPassword(e.target.value)}  
                           required/>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit"> Register Account</button>
                </div>
            <div>
                <label/>
                <div>
                   Already have an account ? { ' '}
                    <Link to={`/login?redirect=${redirect}`}> Sign in</Link>
                </div>
            </div>
            </form>
        
        </div>
    );
}

export default Register