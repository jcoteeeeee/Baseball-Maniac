import React, {useState, useEffect} from 'react'   
import Header from './Header'  

const UserProfilePage = ({goToAddGamePage, goToEditGamePage}) => {   
    const [games, setGames] = useState([])   

    useEffect(() => {        
        const getRequest = async () => {
            try{
                const response = await fetch('http://localhost:3000/user-games') 
                if (response.ok){
                    const respToJson = await response.json()  
                    setGames(respToJson) 
                }
            } catch(error){
                console.log(error) 
            }
        }   
        getRequest()  
    
        console.log(games)  
    }, [])

    return(
        <> 
            <Header/> 
            <section>
                <div>
                    <h1>@Username</h1>  
                    <p>Name</p>  
                    <img alt='profile picture' />  
                </div> 

                <div>
                    <h1>@Username's stats</h1> 
                    <p>Total games attended:</p> 
                    <p>Win-Loss Record: </p> 
                    <p>Winnng percentage: </p> 
                </div> 
            </section> 
            <section id='user-table'>  
                <button onClick={goToAddGamePage}>Add game</button>
                <table>
                    <thead> 
                        <th>Date</th>
                        <th>Result</th>  
                        <th>Score</th>  
                        <th>Opponent</th> 
                        <th>Location</th> 
                        <th>Starting Pitcher</th> 
                        <th>Note</th> 
                        <th>Edit/Delete game</th>
                    </thead> 
                    <tbody> 
                        {
                            games.map(game => {
                                <tr>
                                    <td>{game.date}</td>
                                </tr>
                            })
                        }
                        {/* <tr>
                            <td>7/20/2030</td> 
                            <td>Win</td> 
                            <td>1-0</td> 
                            <td>Marlins</td> 
                            <td>Citi Field</td> 
                            <td>Fake Pitcher</td> 
                            <td>Great</td> 
                            <td>
                                <button onClick={goToEditGamePage}>Edit Game</button> 
                                <button>Delete Game</button>  
                            </td>    
                        </tr>   */}
                    </tbody>
                </table> 
            </section>
        </> 
    )
}  

export default UserProfilePage 