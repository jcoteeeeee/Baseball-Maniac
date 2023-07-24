import React from 'react'  
import Header from './Header.jsx'   

const Homepage = ({goToSignup}) => {
    return(
        <div id='homepage-container'> 
            <div>  
                <Header/>
            </div> 
            <div id='home-main'>
                <h2 id='slogan'>A place for baseball fans to record their own history</h2> 
                <button onClick={goToSignup}>Create an account</button> 
            </div>
        </div> 
    ) 
}    

export default Homepage 