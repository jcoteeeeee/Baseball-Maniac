import React, { useState } from 'react' 

const SignupPage = () => { 
    const [name, setName] = useState('') 
    const [username, setUsername] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')  
    const [favTeam, setFavTeam] = useState('') 

    const handleNameChange = e => {
        setName(e.target.value) 
    }  

    const handleUsrChange = e => {
        setUsername(e.target.value)  
    }  

    const handleEmailChange = e => {
        setEmail(e.target.value) 
    }  

    const handlePswdChange = e => {
        setPassword(e.target.value) 
    } 

    const handleFavTeamChange = e => {
        setFavTeam(e.target.value) 
    }

    return(
        <>  
            <form id='signup-form'>
                <input id='name' placeholder='name' type='text' value={name} onChange={handleNameChange} />
                <input id='username' placeholder='username' type='text' value={username} onChange={handleUsrChange} />
                <input id='email' placeholder='email' type='email' value={email} onChange={handleEmailChange} />
                <input id='password' placeholder='password' type='password' value={password} onChange={handlePswdChange} />
                <input id='fav_team' placeholder='fav_team' type='text' value={favTeam} onChange={handleFavTeamChange} />
            </form>  
        </>
    )
}  

export default SignupPage 