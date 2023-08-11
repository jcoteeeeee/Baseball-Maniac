import React from 'react'  
import styles from '/css-modules/Homepage.module.css'
import Header from './Header.jsx'   

const Homepage = ({goToSignup, goToLogin}) => { 
    console.log(typeof(goToLogin))
    return(
        <div id={styles.homepageContainer}> 
            <div>  
                <Header/>
            </div> 
            <div id={styles.homeMain}>
                <h2 id={styles.slogan}>A place for baseball fans to record their own history</h2> 
                <button id={styles.toLoginBtn} onClick={goToLogin}>Login</button>
                <p id={styles.toSignupP} onClick={goToSignup}>Or create an account</p> 
            </div>
        </div> 
    ) 
}    
    
export default Homepage 