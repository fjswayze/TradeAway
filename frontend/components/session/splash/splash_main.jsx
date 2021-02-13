import React from 'react';

export default function SplashMain() {
    return (
    <div>
        <div className='splash-main'>
           <div className='splash-main-left'>
                <h2>Investing for Everyone</h2>
                <p>Commision-free investing, plus the tools
                you need to put your money in motion. Sign
                up and get your first stock for free. Certain
                limitations apply.
                </p>
                <button>Demo</button>
           </div>
           <div className='splash-main-right'>
                <img className='phone-image' src={window.phoneURL}/> 
           </div>
        </div>
        <div className='splash-main-2'>
            <div className='splash-main-2-left'>
            <h1>Introducing Fractional Shares
                 <p>Invest in thousands of stocks with as little as $1</p>
            </h1>
            <div className="product-features">
                <h2>
                    Invest Any Amount
                    <p>Choose how much you want to invest, and we’ll 
                        convert from dollars to parts of a whole share.</p>
                </h2>
                <h2>
                        Build a Balanced Portfolio
                    <p>Customize your portfolio with pieces of different companies 
                        and funds to help reduce risk.</p>
                </h2>
                <h2>
                        Trade in Real Time
                    <p>Trades placed during market hours are executed at that time, 
                        so you’ll always know the share price.</p>
                </h2>
                    

            </div>
               
            <div className='disclosure'>
                    Fractional Shares Disclosure
            </div>
            </div> 
         <img className='shapes-image' src={window.shapesURL} /> 
        </div>
    </div>
    )
}