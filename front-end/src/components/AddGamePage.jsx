import React from 'react'  

const AddGamePage = () => {
    return(
        <>  
            <form> 
                <input placeholder='date' /> 
                <input placeholder='result' /> 
                <input placeholder='score' /> 
                <input placeholder='opponent' /> 
                <input placeholder='location'/> 
                <input placeholder='starting pitcher' />  
                <input placeholder='note' />   
                <button>Add game</button>
            </form>
        </>
    )
} 

export default AddGamePage 