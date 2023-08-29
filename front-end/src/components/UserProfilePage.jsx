import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import styles from '/css-modules/UserProfilePage.module.css'

const UserProfilePage = ({ goToAddGamePage, goToEditGamePage }) => {
    const [games, setGames] = useState([])
    const pageLoaded = useRef(false)

    useEffect(() => {
        if (!pageLoaded.current) {
            const getRequest = async () => {
                try {
                    const response = await fetch('http://localhost:3000/games')
                    if (response.ok) {
                        const respToJson = await response.json()
                        setGames(respToJson)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            getRequest()

            console.log(games)
        }
        pageLoaded.current = true
    }, [])

    return (
        <>
            <div className={styles.overlay}> 
            </div>
                <div id={styles.dot}>

                </div> 
            <Header />
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
            <section id={styles.userContent} >
                <button onClick={goToAddGamePage} id={styles.addGameBtn} >Add game</button>
                <table id={styles.userTable} >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Result</th>
                            <th>Score</th>
                            <th>Opponent</th>
                            <th>Location</th>
                            <th>Starting Pitcher</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            games.map(game => {
                                return (
                                    <tr key={game.id}>
                                        <td>{game.date}</td>
                                        <td>{game.result}</td>
                                        <td>{game.score}</td>
                                        <td>{game.opponent}</td>
                                        <td>{game.location}</td>
                                        <td>{game.pitcher}</td>
                                        <td>{game.note}</td>
                                        <td>
                                            <button onClick={goToEditGamePage} id={styles.editGameBtn} >Edit Game</button>
                                            <button id={styles.deleteGameBtn} >Delete Game</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default UserProfilePage 