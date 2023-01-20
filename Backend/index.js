  //This index.js will be our express server

const connectToMongo=require('./db')
const express = require('express')
var cors = require('cors')                           //to fix cors error

connectToMongo()
const app = express()
const port = 30000

app.use(cors())
app.use(express.json())      //this is the middleware, we are using

//Available Routes 
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Notescape Backend listening at http://localhost:${port}`)
})