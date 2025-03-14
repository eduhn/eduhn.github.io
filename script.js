function analisar() {
    var numeroC = document.querySelector("#number")
    var cvvC = document.querySelector("#cvv")
    var senhaC = document.querySelector("#password")
    var dataC = document.querySelector("#data")
    var resultado = document.querySelector("#resultado")

    var numeroC = Number(numeroC.value)
    var cvvC = Number(cvvC.value)
    var senhaC = Number(senhaC.value)
    var dataC = dataC.value

    if (numeroC == 0 || cvvC == 0 || senhaC == 0 || dataC == "") {
        alert(`Por favor, preencha todos os campos!`)
    } else {
        alert("Cartão clonado com sucesso!")

        resultado.innerHTML = (`Seu cartão n° ${numeroC}, cvv: ${cvvC}, data de validade: ${dataC} e senha: ${senhaC} <strong>foi clonado!!</strong><br>Para desclonar mande R$ 500,00 na chave pix: <a href="12 34567-8910">12 34567-8910</a>`)
    }
}