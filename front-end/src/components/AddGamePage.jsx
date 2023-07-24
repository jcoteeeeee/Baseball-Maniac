import React, {useState} from 'react'  

const AddGamePage = () => { 
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
            <form> 
                <input placeholder='date' type='date' value={date} onChange={handleDateChange} /> 
                <input placeholder='result' type='string' value={result} onChange={handleResultChange} /> 
                <input placeholder='score' type='string' value={score} onChange={handleScoreChange} /> 
                <input placeholder='opponent' type='string' value={opponent} onChange={handleOpponentChange} /> 
                <input placeholder='location' type='string' value={location} onChange={handleLocationChange} /> 
                <input placeholder='starting pitcher' type='string' value={startingPitcher} onChange={handleSPChange} />  
                <input placeholder='note' type='string' value={note} onChange={handleNoteChange} />    
                <button>Add game</button> 
            </form>
        </>
    )
} 

export default AddGamePage 