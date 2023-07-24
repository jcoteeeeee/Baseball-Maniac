import React from 'react'  

const UserProfilePage = ({goToAddGamePage, goToEditGamePage}) => {
    return(
        <> 
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
            <section> 
                <button onClick={goToAddGamePage}>Add game</button>
                <table>
                    <tr> 
                        <th>Date</th>
                        <th>Result</th>  
                        <th>Score</th>  
                        <th>Opponent</th> 
                        <th>Location</th> 
                        <th>Starting Pitcher</th> 
                        <th>Note</th> 
                        <th>Edit/Delete game</th>
                    </tr> 
                    <tr>
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
                    </tr>
                </table> 
            </section>
        </> 
    )
}  

export default UserProfilePage 