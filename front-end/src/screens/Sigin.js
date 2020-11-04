import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../actions/userAction'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader'
import AlertMessages from '../components/AlertMessages';

function SignIn(props){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector(state => state.usersignin)
    const { userInfo, loading, error }  = user

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signIn(email, password))
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
                <div> <h1> Sign In</h1></div>
                {loading && <Loader />}
                {error && <AlertMessages> {error}</AlertMessages>}

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
                <div>
                    <label />
                    <button className="primary" type="submit"> Sign In</button>
                </div>
            <div>
                <label/>
                <div>
                    New Customer ? { ' '}
                    <Link to={`/register?redirect=${redirect}`} > Create new account?</Link>
                </div>
            </div>
            </form>
        
        </div>
    );
}

export default SignIn