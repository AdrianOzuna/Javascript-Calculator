const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multiplicar");
const dividirBtn = document.getElementById("dividir");
const temaBtn = document.getElementById("tema");

const valor1 = document.getElementById("valor1").value;
const valor2 = document.getElementById("valor2").value;

var theme_selector = document.getElementById("theme-selector");

sumarBtn.addEventListener("click", function(){
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById("resultadoH1").innerHTML = (resultado);
});

restarBtn.addEventListener("click", function(){
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    document.getElementById("resultadoH1").innerHTML = (resultado);
    console.log("restar clicked");
});

multiplicarBtn.addEventListener("click", function(){
    let resultado = parseFloat(valor1) * parseFloat(valor2);
    document.getElementById("resultadoH1").innerHTML = (resultado);
});

dividirBtn.addEventListener("click", function(){
    let resultado = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById("resultadoH1").innerHTML = (resultado);
});

temaBtn.addEventListener("click", function(){
    theme_selector = document.getElementById("theme-selector");
    if(theme_selector.getAttribute("href") == '../styles/main.css'){
        document.getElementById("theme-selector").href = "../styles/maindark.css";
        temaBtn.innerHTML = "Modo claro";
    }else{
        document.getElementById("theme-selector").href = "../styles/main.css";
        temaBtn.innerHTML = "Modo oscuro";
    }
});
