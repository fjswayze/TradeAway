import { logoutAction} from '../../actions/session_actions'
import React from 'react'; 
import { useDispatch } from 'react-redux';

export default function HomeHeader(){
    const dispatch = useDispatch(); 
    return(
    <div className='home-header'>
            <input
                type='text'
                placeholder='Search'
            ></input>
            <a>LinkedIn</a>
            <a>GitHub</a>
            <a>Portfolio</a>
            <a onClick={() => dispatch(logoutAction())}>Log Out</a>
            <a></a>
    </div>)
}