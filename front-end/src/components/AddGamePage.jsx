import React, {useState} from 'react'    
import Header from './Header'   
import styles from '/css-modules/AddGamePage.module.css'  

const AddGamePage = ({goToProfilePage}) => {   
    const [date, setDate] = useState('') 
    const [result, setResult] = useState('') 
    const [score, setScore] = useState('') 
    const [opponent, setOpponent] = useState('') 
    const [location, setLocation] = useState('') 
    const [startingPitcher, setStartingPitcher] = useState('') 
    const [note, setNote] = useState('')           

    const handleDateChange = e => {
        setDate(e.target.value) 
        console.log(date) 
    }    

    const handleResultChange = e => {
        setResult(e.target.value)  
        console.log(result)
    }  
    
    const handleScoreChange = e => {
        setScore(e.target.value) 
    }  

    const handleOpponentChange = e => {
        setOpponent(e.target.value)  
    }  

    const handleLocationChange = e => {
        setLocation(e.target.value)   
    }  

    const handleSPChange = e => {
        setStartingPitcher(e.target.value)  
    }  

    const handleNoteChange = e => {
        setNote(e.target.value)  
    } 

    const handleSubmit = e => {
        e.preventDefault() 
        try{
            const postReq = async () => {
                const response = await fetch('http://localhost:3000/user-games', {
                    method: 'POST', 
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify({
                        date: date, 
                        result: result, 
                        score: score, 
                        opponent: opponent, 
                        location: location, 
                        starting_pitcher: startingPitcher, 
                        note: note
                    })
                }) 
                if (response.ok){
                    const respToJson = await response.json() 
                    console.log(respToJson) 
                }
            }
            postReq() 
            goToProfilePage() 
        } catch(error){
            console.log(error) 
        }
    }
 
    return(
        <>  
            <Header/> 
            <section className={styles.agContainer}>
                <form id={styles.agForm} onSubmit={handleSubmit} >  
                    <h1 id={styles.agFormHeader} >Expand your history</h1>
                    <input className={styles.agInput} id='date' placeholder='Date' type='date' value={date} onChange={handleDateChange} /> 
                    <input className={styles.agInput} id='result' placeholder='Result' type='string' value={result} onChange={handleResultChange} /> 
                    <input className={styles.agInput} id='score' placeholder='Score' type='string' value={score} onChange={handleScoreChange} /> 
                    <input className={styles.agInput} id='opponent' placeholder='Opponent' type='string' value={opponent} onChange={handleOpponentChange} /> 
                    <input className={styles.agInput} id='location' placeholder='Location' type='string' value={location} onChange={handleLocationChange} /> 
                    <input className={styles.agInput} id='starting-pitcher' placeholder='Starting pitcher' type='string' value={startingPitcher} onChange={handleSPChange} />  
                    <input className={styles.agInput} id='note' placeholder='Note' type='string' value={note} onChange={handleNoteChange} />    
                    <button id={styles.agBtn}>Add game</button> 
                </form>   
            </section>
        </>
    )
} 

export default AddGamePage 