function api(){
    fetch('/api').then(res => res.json()).then(data => {

        let bids = data.bids
        let asks = data.asks
        let bodyBids = document.getElementById('bodyBids')
        let bodyAsks = document.getElementById('bodyAsks')

        for(let i = 0; bids.length > i; i++){
            let btc = bids[i][1]
            let price = parseInt(bids[i][0]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            bodyBids.children[i].children[1].innerHTML = btc
            bodyBids.children[i].children[2].innerHTML = price
        }
        for(let i = 0; asks.length > i; i++){
            let btc = asks[i][1]
            let price = parseInt(bids[i][0]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            bodyAsks.children[i].children[1].innerHTML = btc
            bodyAsks.children[i].children[2].innerHTML = price

        }
    })
}

function startTimer(duration, display){
    
    let timer = duration, minutes, seconds

    setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds
        if(--timer < 0){
            timer = duration
            api()
        }
    }, 1000)
}


window.addEventListener('DOMContentLoaded', ()=>{
    const duration = 60 * .1 //conversão para segundos
    const display = document.querySelector("#timer") // Elemento span
    startTimer(duration, display)
    api()
})