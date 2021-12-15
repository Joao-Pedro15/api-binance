require('dotenv').config()
const api = require('./api')
const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api', async (req, res)=>{
    const result = await api.depth()
    res.send(result)
})


app.listen(process.env.PORT, ()=>{
    console.log('Server running')
})