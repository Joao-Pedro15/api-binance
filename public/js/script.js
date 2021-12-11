function t(element, element2){
    fetch('/api').then(res => res.json()).then(data => {
        const atual = parseInt(data.bids[0][0])
        const real = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const btc = data.bids[0][1]
        element.innerHTML = real
        element2.innerHTML = btc
    })
}

function startTimer(duration, display){
    
    let timer = duration, minutes, seconds
    let num = 0

    setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds
        if(--timer < 0){
            timer = duration
            const element = document.getElementById('n')
            const element2 = document.getElementById('btc')

            t(element, element2)
        }
    }, 1000)
}


window.addEventListener('DOMContentLoaded', ()=>{
    const duration = 60 * .1 //conversão para segundos
    const display = document.querySelector("#timer") // Elemento span
    t(document.getElementById('n'), document.getElementById('btc'))
    startTimer(duration, display)
})