function loaded(){
    var periodo = window.document.querySelector('h1.per')
    var interno = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagis')
    var time = new Date()
    var hour = time.getHours()
    interno.innerHTML = `Agora são <strong>${hour}:${time.getMinutes()}</strong> em ponto.`
    if (hour >= 0 && hour <= 6) {
        periodo.innerHTML = 'Boa madrugada!'
        img.src = 'madrugada.png'
        document.body.style.background = '#011b1c'
    } else if (hour >= 6 && hour < 12) {
        periodo.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#828d41'
    } else if (hour >= 12 && hour < 18) {
        periodo.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#dc824d'
    } else{
        periodo.innerHTML = 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#004391'
    }
}
