import React from 'react'; 
import SplashHeader from './splash_header'; 
import SplashMain from './splash_main'; 
import SplashFooter from './splash_footer'
export default function Splash(){

    return(
    <div>
        <SplashHeader></SplashHeader>
        <SplashMain></SplashMain>
        <SplashFooter></SplashFooter>
    </div>)
}