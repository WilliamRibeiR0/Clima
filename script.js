const key = "395ab18e863d59afc97aad4dd975103f"

function colocarDadosNaTela(dados) {
  document.querySelector(".cidadeUsuario").innerHTML = dados.name
  document.querySelector(".tempAtual").innerHTML = Math.floor(dados.main.temp)
  document.querySelector(".maxTemp").innerHTML = Math.floor(dados.main.temp_max) + "Max"
  document.querySelector(".minTemp").innerHTML = Math.floor(dados.main.temp_min) + "Min"
  document.querySelector(".umidadeAtual").innerHTML = Math.floor(dados.main.humidity) + " %"
  document.querySelector(".vento").innerHTML = Math.floor(dados.wind.speed) + " km/h"
  document.querySelector(".estadoTempo").innerHTML = (dados.weather[0].description)



  console.log(dados)
}

// async usado para operações que demoram (como requisições a APIs) de forma mais legível e eficiente.
async function buscarCidade(cidade) {

  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

  colocarDadosNaTela(dados)

}

function clickBtn() {

  const cidade = document.querySelector(".inputCidade").value

  buscarCidade(cidade)
}


