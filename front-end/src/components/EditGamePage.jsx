import React, {useState} from 'react'  
import Header from './Header'   
import styles from '/css-modules/EditGamePage.module.css'  

const EditGamePage = () => {  
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

    return(
        <>  
            <Header/>   
            <section className={styles.egContainer}>
                <form id={styles.egForm}>    
                    <h1 id={styles.egFormHeader}>Edit your history</h1>
                    <input className={styles.egInput} placeholder='Date' type='date' value={date} onChange={handleDateChange} />
                    <input className={styles.egInput} placeholder='Result' type='string' value={result} onChange={handleResultChange} />
                    <input className={styles.egInput} placeholder='Score' type='string' value={score} onChange={handleScoreChange} />
                    <input className={styles.egInput} placeholder='Ppponent' type='string' value={opponent} onChange={handleOpponentChange} />
                    <input className={styles.egInput} placeholder='Location' type='string' value={location} onChange={handleLocationChange} />
                    <input className={styles.egInput} placeholder='Starting pitcher' type='string' value={startingPitcher} onChange={handleSPChange} />
                    <input className={styles.egInput} placeholder='Note' type='string' value={note} onChange={handleNoteChange} />
                    <button id={styles.egBtn} >Edit game</button>
                </form>  
            </section>
        </> 
    )
}  

export default EditGamePage  