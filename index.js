require('dotenv').config()
const api = require('./api')
const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))
// app.set("views", path.join(__dirname, 'public'))
// app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))






app.get('/api', async (req, res)=>{
    const result = await api.depth()
    res.send(result)
})

// app.get('/api', api.depth)

app.get('/teste', (req, res)=>{
    console.log('teste')
    res.send('teste')
    return 'teste'
})

app.listen(process.env.PORT, ()=>{
    console.log('Server running')
})

// setInterval(async ()=>{
    // const result = await api.depth()
//     console.log(`Highest Buy: ${result.bids[0][0]}`)
//     console.log(`Lowest Sell: ${result.asks[0][0]}`)

//     const sell = parseInt(result.asks[0][0])
//     const buy = parseInt(result.bids[0][0])
//     console.log(sell, buy)

//     if(sell < 200000){
//         console.log('Hora de comprar')
//     }else if(buy > 230000){
//         console.log('Hora de vender')
//     }else{
//         console.log('Esperando o mercado se mexer')
//     }
// }, process.env.CRAWLER_INTERVAL)

// bids 
// array de lances(ordens de compra), ofertas para comprar
// Do maior lance para o menor
// retorna o preço e quantos btc comprar

// asks
// Ofertas de vendas
// preço da venda
