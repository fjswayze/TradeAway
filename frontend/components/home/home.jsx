import React from 'react'; 
import HomeHeader from './header'; 
import {requestIBM} from '../../actions/company_actions'; 
import { useDispatch, useSelector } from 'react-redux';

export default function Home(){
    const dispatch = useDispatch(); 
    const handleRequest = () => {
        dispatch(requestIBM())
    }
    return(
        <div className='home'>
            <HomeHeader></HomeHeader>
            <button onClick={handleRequest}>Request IBM</button>
        </div>
    )
}