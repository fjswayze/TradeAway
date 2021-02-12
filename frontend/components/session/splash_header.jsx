import React from 'react'; 

export default function SplashHeader(){
    return(
        <div className='splash-header'>
            <div className="robin">TradeAway</div>
            <a href="https://www.linkedin.com/in/francis-swayze/" target="_blank">LinkedIn</a>
            <a>Portfolio</a>
            <div>GitHub</div>
            <button className='log-in'>Log In</button>
            <button className='sign-up'>Sign Up</button>
        </div>
    )
}