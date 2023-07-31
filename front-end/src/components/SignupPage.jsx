import React, { useState } from 'react' 
import Header from './Header' 

const SignupPage = ({goToProfilePage}) => { 
    const [name, setName] = useState('')  
    const [username, setUsername] = useState('')  
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')  
    const [favTeam, setFavTeam] = useState('') 

    const handleNameChange = e => {
        setName(e.target.value) 
        console.log(name)
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

    // const handleSubmit = (e) => {  
    //     e.preventDefault() 
    //     console.log('submitted') 
    //     try{ 
    //         const postRequest = async () => {
    //             const response = await fetch('http://localhost:3000/users', {
    //                 method: 'POST', 
    //                 headers: {'Content-type': 'application/json'}, 
    //                 body: JSON.stringify({"user-info": {
    //                     name: name,
    //                     username: username, 
    //                     email: email, 
    //                     password: password, 
    //                     fav_team: favTeam  
    //                 }
    //                 })
    //             })
    //             if (response.ok){
    //                 const respToJson = await response.json() 
    //                 console.log(respToJson) 
    //             }
    //         } 
    //         postRequest() 
    //         // goToProfilePage() 
    //     } catch(error){
    //         console.log(error)   
    //         // res.status(500).json({ error: 'Internal server error' })
    //     }
    // }  

    const handleSubmit = e => {
        e.preventDefault() 
        try{
            const postRequest = async () => {
                const response = await fetch('http://localhost:3000/user-info', {
                    method: 'POST', 
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify({
                        name: name, 
                        username: username, 
                        email: email, 
                        password: password, 
                        favTeam: favTeam 
                    })
                })
                if (response.ok){
                    const respToJson = await response.json() 
                    console.log(respToJson) 
                }
            } 
            postRequest()  
            goToProfilePage() 
        } catch(error){
            console.log(error) 
        }
    }

    return(
        <>  
            <Header/> 
            <form id='signup-form' onSubmit={handleSubmit} >
                <input id='name' name='name' placeholder='Name' type='text' value={name} onChange={handleNameChange} />
                <input id='username' name='username' placeholder='Username' type='text' value={username} onChange={handleUsrChange} />
                <input id='email' name='email' placeholder='Email' type='email' value={email} onChange={handleEmailChange} />
                <input id='password' name='password' placeholder='Password' type='password' value={password} onChange={handlePswdChange} />
                <input id='fav_team' name='favTeam' placeholder='Favorite Team' type='text' value={favTeam} onChange={handleFavTeamChange} />  
                <button>Create account</button>
            </form>  
        </>
    )
}  

export default SignupPage 