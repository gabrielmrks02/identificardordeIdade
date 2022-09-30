function carregar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById("ano")
    var msg = document.getElementById("msg")
    var dimg = document.getElementById("foto")
    var img = document.getElementById("imagem")



    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert("[Erro] Verifique os dados e tente novamente")

    } else {
        var sexo = document.querySelector('input[name="genero"]:checked').value;
        var idade = anoatual - Number(ano.value)



        if (sexo == "masculino") {
            msg.innerText = `Detectamos que você é uma homem de ${idade} anos`
            dimg.style.textAlign = 'center'
            if (idade >= 0 && idade < 13) {
                img.src = "h1.png"


            } else if (idade < 21) {
                img.src = "h2.png"


            } else if (idade < 50) {
                img.src = "h3.png"

            } else {
                img.src = "h4.png"

            }


        } else {
            msg.innerHTML = `Detectamos que você é uma mulher de ${idade} anos`
            if (idade >= 0 && idade < 13) {
                img.src = "m1.png"

            } else if (idade < 21) {
                img.src = "m2.png"

            } else if (idade < 50) {
                img.src = "m3.png"

            } else {
                img.src = "m4.png"

            }
        }
    }

}