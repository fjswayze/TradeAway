import React, {useState} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {loginAction} from '../../actions/session_actions'; 

export default function login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); 
    const errors = useSelector(state => state.errors.session); 
    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        dispatch(loginAction({
            email: email, 
            password: password
        }))
    }
    
    return(
        <div className='login-form'>
                <div className="left-side">
                    <img src={loginURL}></img>
                </div>
            
                
       
            <div className='right-side'>
                <h1>Welcome to TradeAway</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email
                        <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        >
                        </input>
                    </label>
                    <label>Password
                        <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        >
                        </input>
                    </label>
                    <div className='login-errors'>
                        {errors[0]}
                    </div>
                    <button
                    type='submit'
                    >Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}