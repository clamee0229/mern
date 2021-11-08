const express = require('express')

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))



// imports of mongoose.config and the routes should be below the app.use commands
require('./server/config/mongoose.config')
require('./server/routes/joke.routes')(app)

app.listen(port, () =>{console.log(`listening on port ${port}`)})