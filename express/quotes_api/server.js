const express = require('express')
const app = express()
const port = 8000



app.get('/', (req,res)=>{
    res.json({status:'ok', msg:'hello world'})
})







app.listen(port, ()=>console.log(`listening on port ${port}`))
