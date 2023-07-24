import React, {useState} from 'react'  

const LoginPage = () => { 
    const [username, setUsername] = useState('')  
    const [password, setPassword] = useState('')  

    const handleUsrChange = e => {
        setUsername(e.target.value)  
    }  

    const handlePasswordChange = e => {
        setPassword(e.target.value)  
    }

    return(
        <> 
            <form>
                <input id='username' name='username' type='string' value={username} onChange={handleUsrChange} /> 
                <input id='password' name='password' type='password' value={password} onChange={handlePasswordChange} /> 
            </form>
        </>  
    )
}  

export default LoginPage 