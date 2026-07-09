const botao = document.querySelector("button");
const resultado = document.getElementById("resultado");
const cidade = document.getElementById("cidade");

const API_KEY = "96d61c550f193a0a6930fd5f9e3583d7";

botao.addEventListener("click", buscarClima);

async function buscarClima() {

    if (cidade.value === "") {
        resultado.innerHTML = "⚠️ Digite uma cidade!";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.value}&appid=${API_KEY}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);

    const dados = await resposta.json();

    if (dados.cod == "404") {
        resultado.innerHTML = "❌ Cidade não encontrada.";
        return;
    }

    resultado.innerHTML = `
        <h2>${dados.name}</h2>
        <p>🌡️ Temperatura: ${dados.main.temp}°C</p>
        <p>☁️ Clima: ${dados.weather[0].description}</p>
        <p>💧 Umidade: ${dados.main.humidity}%</p>
        <p>💨 Vento: ${dados.wind.speed} m/s</p>
    `;

}