import React, {useState} from 'react'  
import Header from './Header'     
import styles from '/css-modules/LoginPage.module.css'  

const LoginPage = ({goToProfilePage}) => { 
    const [username, setUsername] = useState('')  
    const [password, setPassword] = useState('')  

    const handleUsrChange = e => {
        setUsername(e.target.value)  
    }  

    const handlePasswordChange = e => {
        setPassword(e.target.value)  
    }   

    console.log(typeof(goToProfilePage))

    const handleSubmit = e => {  
        e.preventDefault() 
        goToProfilePage() 
        console.log('click')
    }  

    return(
        <>
        <Header/> 
        <div id={styles.loginPageContainer}>  
            <div> 
                <form onSubmit={handleSubmit} >
                    <input id='username' name='username' type='string' value={username} onChange={handleUsrChange} /> 
                    <input id='password' name='password' type='password' value={password} onChange={handlePasswordChange} />   
                    <button id='login-btn'>Login</button>
                </form>  
            </div>
        </div>    
        </>
    )
}  

export default LoginPage 