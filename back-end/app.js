const express = require('express') // require is how you import 
const app = express() // express() creates an express object which is server itself
const fs = require('fs') 
const cors = require('cors')
const { receiveMessageOnPort } = require('worker_threads')

app.use(express.json()) 
app.use(cors()) 

app.get('/', (req, res) => {
    console.log(req.path) 
    res.send('hello world')
}) 

app.get('/games', (req, res) => {
    console.log(req.path) 
    fs.promises.readFile('./data/games.txt').then((games) => {
        const gamesObj = JSON.parse(games) 
        res.send(gamesObj)
    })
}) 

app.post('/games', (req, res) => {
    fs.promises.readFile('./data/games.txt').then((games) => {
        const gamesArr = JSON.parse(games) 
        const gamesObj = req.body 
        const id = Date.now() 
        gamesObj.id = Math.floor(id / 100)   
        gamesArr.push(gamesObj) 
        const gamesStr = JSON.stringify(gamesArr) 
        fs.promises.writeFile('./data/games.txt', gamesStr)
            .then(() => {
                res.send('success')
            })
            .catch(error => console.log(error))   
    })
}) 

app.put('/games/:id', (req, res) => {
    fs.promises.readFile('./data/games.txt').then((games) => {
        const gamesArr = JSON.parse(games)
        const gamesObj = req.body
        gamesArr.push(gamesObj)
        const gamesStr = JSON.stringify(gamesArr)
        fs.promises.writeFile('./data/games.txt', gamesStr)
            .then(() => {
                res.send('success')
            })
            .catch(error => console.log(error))
    })
}) 

app.delete('/games/:id', (req, res) => {
    fs.promises.readFile('./data/games.txt').then((games) => {
        const gamesObj = JSON.parse(games) 
        console.log(req.params.id, games[0].id)
        const returnedGames = gamesObj.filter((game) => req.params.id != game.id)
        const gamesStr = JSON.stringify(returnedGames)  
        fs.promises.writeFile('./data/games.txt', gamesStr)
            .then(() => {
                res.send('success')
            })
            .catch(error => console.log(error)) 
    })
})  

app.listen(3000, () => console.log('app is listening on', 3000)) 
