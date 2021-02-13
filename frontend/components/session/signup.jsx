import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { signupAction, clearErrors, loginAction } from '../../actions/session_actions'; 

export default function SignUp(){
    const[firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); 

    const handleSubmit = (evt) => {
        debugger
        evt.preventDefault(); 
        dispatch(signupAction({
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password
        }))
    }

    return(
        <div className='sign-up-form'>
            <div className='session'>
                <h1>TradeAway</h1>
                <h2>Make Your Money Move</h2>
                <p>Robinhood lets you invest in companies you love, commision free.</p>
                <form onSubmit={handleSubmit}>
                    <div className='row-1'>
                        <input type="text"
                            className="short-input"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                        ></input>
                        <input type="text"
                            className="short-input"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last name"
                        ></input>
                    </div>
                        <br></br>
                        <input
                            className="long-input"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username"
                        ></input>
                        <br></br>
                         <input type="text"
                            className="long-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                        ></input>
                        <br></br>
                        <input type="text"
                            className="long-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password (min. 10 characters)"
                        ></input>
                        <br></br>
                        <div className="row-5">
                            <button type="submit" onClick={handleSubmit}>Sign Up</button>
                            <div>
                                <div>Already started?</div>
                                <div className='log-in-option'>Log in to complete your application</div>
                            </div> 
                        </div>  
                </form>
                <div className='terms-and'>
                    <p>All investments involve risk including the possible loss of principal. Investors should consider their investment objectives and risks carefully before investing. </p>
                    <p> Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or web. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see Robinhood Financial’s fee schedule to learn more.</p>
                    <p>Securities trading offered through Robinhood Financial LLC. Brokerage clearing services offered through Robinhood Securities, LLC. Both are subsidiaries of Robinhood Markets, Inc.</p>
                    <p>Check the background of Robinhood Financial LLC and Robinhood Securities, LLC on FINRA’s BrokerCheck.</p>
                    <p>Robinhood Terms and Conditions  Disclosure Library  Contact Us  FAQ</p>
                    <p>© 2020 Robinhood. All rights reserved.</p>
                </div>
            </div>
            <div className='copy'>
                <h2> Commision-free trading
                    <p>Break free from commission-fees and make unlimited commission-free trades in stocks, funds, and options with Robinhood Financial. Other fees may apply. View our fee schedule to learn more.</p>
                </h2>
                <h2> Account Protection 
                    <p>Robinhood Financial is a member of SIPC. Securities in your account protected up to $500,000. For details, please see www.sipc.org.</p>
                </h2>
                <h2> Stay on top of your portfolio 
                    <p>Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
                </h2>
            </div>
        </div>
    )
}