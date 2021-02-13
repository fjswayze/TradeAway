import React from 'react'; 

export default function SplashHeader(){
    return(
        <div className='splash-header'>
            <div className="robin">TradeAway</div>
            <a href="https://www.linkedin.com/in/francis-swayze/" target="_blank">LinkedIn</a>
            <a href="https://fjswayze.github.io/" target="_blank">Portfolio</a>
            <a href="https://github.com/fjswayze" target="_blank">GitHub</a>
            <button className='log-in'>Log In</button>
            <button className='sign-up'>Sign Up</button>
        </div>
    )
}