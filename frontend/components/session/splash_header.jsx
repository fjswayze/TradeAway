import React from 'react'; 

export default function SplashHeader(){
    return(
        <div className='splash-header'>
            <div className="robin">TradeAway</div>
            <div>LinkedIn</div>
            <div>Portfolio</div>
            <div>GitHub</div>
            <button className='log-in'>Log In</button>
            <button className='sign-up'>Sign Up</button>
        </div>
    )
}