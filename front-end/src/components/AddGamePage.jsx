import React, {useState} from 'react'  

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
            <form id='ag-form' onSubmit={handleSubmit} >  
                <input id='date' placeholder='date' type='date' value={date} onChange={handleDateChange} /> 
                <input id='result' placeholder='result' type='string' value={result} onChange={handleResultChange} /> 
                <input id='score' placeholder='score' type='string' value={score} onChange={handleScoreChange} /> 
                <input id='opponent' placeholder='opponent' type='string' value={opponent} onChange={handleOpponentChange} /> 
                <input id='location' placeholder='location' type='string' value={location} onChange={handleLocationChange} /> 
                <input id='starting-pitcher' placeholder='starting pitcher' type='string' value={startingPitcher} onChange={handleSPChange} />  
                <input id='note' placeholder='note' type='string' value={note} onChange={handleNoteChange} />    
                <button>Add game</button> 
            </form>
        </>
    )
} 

export default AddGamePage 