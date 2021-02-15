import {logOutAction} from '../../actions/session_actions'

export default function HomeHeader(){
    return(
    <div className='home'>
        <button onClick={logOutAction}>Log Out</button>
    </div>)
}