const express = require('express') // require is how you import 
const app = express() // express() creates an express object which is server itself
const fs = require('fs') 

app.use(express.json()) 

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
        const gamesObj = JSON.parse(games) 
        gamesObj.push(req.body) 
        const gamesStr = JSON.stringify(gamesObj) 
        fs.promises.writeFile('./data/games.txt', gamesStr)
            .then(() => {})
            .catch(error => console.log(error))   
    })
}) 

app.listen(3000, () => console.log('app is listening on', 3000))