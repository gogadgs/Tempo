 import { api } from './api.js';
import { ConstrutoraData } from './tempo.js';
 


 
 const procura = document.querySelector('.procura');

 const valorQuery=(evt)=>{
    
    evt.keyCode == 13? valorResultado(procura.value):
    "";
};
procura.addEventListener("keypress",valorQuery);



const valorResultado = (weather)=>{
    fetch(`${api.base}weather?q=${weather}&units=metric&appid=${api.key}`)
    .then((weather)=>{
                return weather.json();
    }).then(ResultadoNoDisplay);

};


const ResultadoNoDisplay = (weather)=>{
    console.log('resultado',weather);
    let cidade = document.querySelector(".cidade");
    cidade.innerText=`${weather.name},${weather.sys.country}`;


    /*  seção de tempo */
     /* primeira seção */
    let agora = new Date();
    let data = document.querySelector(".data");
    data.innerText = ConstrutoraData(agora);

/* segunda seção  */

let tempo = document.querySelector(".temperatura");
tempo.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

let clima = document.querySelector(".clima");
let valorEmIngles = weather.weather[0].main;
let valorEmPortugues;

switch (valorEmIngles) {
  case "Clear":
    valorEmPortugues = "Céu limpo";
    break;
  case "Clouds":
    valorEmPortugues = "Nuvens";
    break;
  case "Rain":
    valorEmPortugues = "Chuva";
    break;


  default:
    valorEmPortugues = valorEmIngles; 
}

clima.innerText = valorEmPortugues;



let maximaEMinima2 = document.querySelector('.maximaEMinima');
maximaEMinima2.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;


}
