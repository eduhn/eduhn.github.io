function analisar() {
    var numeroC = document.querySelector("#number")
    var cvvC = document.querySelector("#cvv")
    var senhaC = document.querySelector("#password")
    var resultado = document.querySelector("#resultado")

    var numeroC = Number(numeroC.value)
    var cvvC = Number(cvvC.value)
    var senhaC = Number(senhaC.value)

        resultado.innerHTML = (`Seu cartão n° ${numeroC}, cvv: ${cvvC} e senha: ${senhaC} <strong>foi clonado!!</strong><br>Para desclonar mande R$ 500,00 na chave pix: <a href="12 34567-8910">12 34567-8910</a>`)
    }
