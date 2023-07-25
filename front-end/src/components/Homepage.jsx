import React from 'react'  
import Header from './Header.jsx'   

const Homepage = ({goToSignup, goToLogin}) => { 
    console.log(typeof(goToLogin))
    return(
        <div id='homepage-container'> 
            <div>  
                <Header/>
            </div> 
            <div id='home-main'>
                <h2 id='slogan'>A place for baseball fans to record their own history</h2> 
                <button id='tologin-btn' onClick={goToLogin}>Login</button>
                <p id='tosignup-p' onClick={goToSignup}>Or create an account</p> 
            </div>
        </div> 
    ) 
}    

export default Homepage 