import React from 'react'; 
import { Link} from 'react-router-dom'; 

export default function SplashHeader(){
    return(
        <div className='splash-header'>
            <div className="robin">TradeAway</div>
            <a className='splash-header-link' href="https://www.linkedin.com/in/francis-swayze/" target="_blank">LinkedIn</a>
            <a className='splash-header-link' href="https://fjswayze.github.io/" target="_blank">Portfolio</a>
            <a className='splash-header-link' href="https://github.com/fjswayze" target="_blank">GitHub</a>
            <Link className='log-in' to='/login'>Log In</Link>
            <Link className='sign-up-link' to="/signup">Sign Up</Link>
        </div>
    )
}