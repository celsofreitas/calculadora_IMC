function calculadora() {
    var altura = document.getElementById("altura").value / 100
    var peso = document.getElementById("peso").value

    var imc = peso / altura ** 2
    var texto = ""
    if (imc < 18.5) {
        texto="Você está magro"
    } else if (imc < 24.9) {
        texto="Você está com peso ideal"
    }
    else if (imc < 29.9) {
        texto="Você está com sobrepeso"
    }
    else if (imc < 39.9) {
        texto="Você está com obesidade"
    }
    else if (imc > 39.9) {
        texto="Você está com obesidade mórbida"
    }
    document.getElementById("resultado").innerText = texto
}