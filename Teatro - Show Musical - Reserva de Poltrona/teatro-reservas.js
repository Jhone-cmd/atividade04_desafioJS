const Poltronas = 240

let reservadas = []

function mostrarPalco(){
   
    //alert("teste")
    let ocupadas = []

    if (localStorage.getItem("teatroOcupadas")){
        ocupadas = localStorage.getItem("teatroOcupadas").split(";")
    }

    let palco = document.getElementById("palco")

    for (let i = 1; i <= Poltronas; i++){
        
        let figure = document.createElement("figure")
        let statusimagem = document.createElement("img")

        if (ocupadas.indexOf(i.toString()) >= 0){
            statusimagem.src = "ocupada.jpg"
        }else{
            statusimagem.src = "disponivel.jpg"
        }
        statusimagem.className = "poltrona"

        let figuracapturada  = document.createElement("figcaption")

        let zeros = ""
        if ( i < 10){
            zeros = "00"
        }else if (i < 100){
            zeros = "0"
        }

        let numeroCadeira = document.createTextNode("[" + zeros + i + "]")

        figuracapturada.appendChild(numeroCadeira)
        figure.appendChild(statusimagem)
        figure.appendChild(figuracapturada)

        if  (i % 24 == 12){
            figure.style.marginRight = "60px"
        }

        palco.appendChild(figure)

        if ( i % 24 == 0){
            let br = document.createElement("br")
            palco.appendChild(br)
        }
    }
}

mostrarPalco();

function reservarPoltrona(){
    let poltrona = Number(nPoltrona.value)

    if (poltrona  <= 0 || isNaN(poltrona) || poltrona > Poltronas){
        alert('Informe um número da poltrona')
        nPoltrona.focus()
        return
    }

    let ocupadas = []

    if (localStorage.getItem("teatroOcupadas")){
        ocupadas = localStorage.getItem("teatroOcupadas").split(";")
    }

    if (ocupadas.indexOf(poltrona.toString()) >= 0){
        alert("Poltrona" + poltrona + "já está ocupada...")
        nPoltrona.value = ""
        nPoltrona.focus()
        return
    }
    let palco = document.getElementById("palco")

    let imagemPoltrona = palco.getElementsByTagName("img")[poltrona - 1]

    imagemPoltrona.src = "reservada.jpg"

    reservadas.push(poltrona)

    nPoltrona.value = ""
    nPoltrona.focus()
}

let botaoReservar = document.getElementById("botaoReservar")
botaoReservar.addEventListener("click", reservarPoltrona)

let nPoltrona = document.getElementById("nPoltrona")
nPoltrona.addEventListener("keypress", function (tecla){
    if (tecla.key == 13) {
        reservarPoltrona()
    }
})

function confirmarPoltrona(){
    if (reservadas.length == 0){
        alert("Não há poltronas reservadas")
        nPoltrona.value = ""
        nPoltrona.focus()
        return
    }

    let palco = document.getElementById("palco")

    let ocupadas = ""

    if (localStorage.getItem("teatroOcupadas")){
        ocupadas = localStorage.getItem("teatroOcupadas") + (";")
    }

    for (let i = 0; i < reservadas.length; i++){

        ocupadas += reservadas[i + ";"]

        let imagemPoltrona = palco.getElementsByTagName("img")[reservadas[i] - 1]

        imagemPoltrona.src = "ocupada.jpg"
    }

    reservadas = []

    localStorage.setItem("teatroOcupadas", ocupadas.substr(0, ocupadas.length -1 ))
}

let botaoConfirmar = document.getElementById("botaoConfirmar")
botaoConfirmar.addEventListener("click", confirmarPoltrona)