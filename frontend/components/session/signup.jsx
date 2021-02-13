import React, { useState } from 'react'

export default function SignUp(){
    const[firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        this.props.processForm({
            firstName: firstName, 
            lastName: lastName, 
            username: username, 
            email: email, 
            password: password
        })
    }

    return(
        <div className='sign-up-form'>
            <div className='session'>
                <h1>TradeAway</h1>
                <h2>Make Your Money Move</h2>
                <p>Robinhood lets you invest in companies you love, commision free.</p>
                <form onSubmit={handleSubmit}>
                  
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
                            placeholder="Password"
                        ></input>
                        <br></br>
                        <button>Sign Up</button>
                        <div>Already started?</div>
                </form>
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