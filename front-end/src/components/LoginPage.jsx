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
                <div id={styles.formContainer}> 
                    <form id={styles.loginForm} onSubmit={handleSubmit} >
                        <h1 id={styles.loginFormHeading}>Weclome back</h1>
                        <input className={styles.loginInput} id='username' name='username' type='string' placeholder='Username' value={username} onChange={handleUsrChange} /> 
                        <input className={styles.loginInput} id='password' name='password' type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />   
                        <button id={styles.loginBtn}>Login</button>  
                    </form>   
                </div> 
            </div>    
        </>
    )
}  

export default LoginPage 