import React, {useState, useEffect} from 'react'   
import Header from './Header'  
import styles from '/css-modules/UserProfilePage.module.css' 

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
            <section id={styles.profileContainer}> 
                <div id={styles.userInfo}>
                    <h1>@Username</h1>  
                    <img id={styles.userImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hxIGIRPVvvpnSQjDGNI0undzKEHbVYvWe-7bvt9W4A&s' alt='profile picture' />  
                    <p>Name</p>  
                </div> 

                <div id={styles.userStats}>
                    <h1>@Username's history</h1> 
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