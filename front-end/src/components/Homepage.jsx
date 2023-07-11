import React from 'react'  
import Header from './Header.jsx'  

const Homepage = () => {
    return(
        <div id='homepage-container'> 
            <div>  
                <Header/>
            </div> 
            <div id='home-main'>
                <h2 id='slogan'>A place for baseball fans to record their own history</h2> 
            </div>
        </div> 
    ) 
}    

export default Homepage 