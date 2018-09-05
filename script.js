//----------*variaveis*---------------
//Botões
var um = document.getElementById("um");
var dois = document.getElementById("dois");
var tres = document.getElementById("tres");
var quatro = document.getElementById("quatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var sete = document.getElementById("sete");
var oito = document.getElementById("oito");
var nove = document.getElementById("nove");
var zero = document.getElementById("zero");
var somar = document.getElementById("somar");
var subtrair = document.getElementById("subtrair");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");
var reset = document.getElementById("reset");
var igual = document.getElementById("igual");
var result = document.getElementById("input-valor");

//Valores
var valorA;
var valorB;
var operador;

//-------------*Funções*----------------
painel();

function painel() {
    //Números:
    um.onclick = function(){
        result.textContent = result.textContent + "1";
    }
    dois.onclick = function(){
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(){
        result.textContent = result.textContent + "3";
    }
    quatro.onclick = function(){
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(){
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(){
        result.textContent = result.textContent + "6";
    }
    sete.onclick = function(){
        result.textContent = result.textContent + "7";
    }
    oito.onclick = function(){
        result.textContent = result.textContent + "8";
    }
    nove.onclick = function(){
        result.textContent = result.textContent + "9";
    }
    zero.onclick = function(){
        result.textContent = result.textContent + "0";
    }
    //Operações:
    somar.onclick = function(){
        valorA = parseInt(result.textContent);
        operador = "+";
        limpar();
    }
    subtrair.onclick = function(){
        valorA = parseInt(result.textContent);
        operador = "-";
        limpar();
    }
    multiplicar.onclick = function(){
        valorA = parseInt(result.textContent);
        operador = "*";
        limpar();
    }
    dividir.onclick = function(){
        valorA = parseInt(result.textContent);
        operador = "/";
        limpar();
    }
    igual.onclick = function(){
        valorB = parseInt(result.textContent);
        calcular();
    }
    reset.onclick = function(){
        resetar();
    }
}

function calcular(){
    var total = 0;

    if(operador == "+"){
        total = valorA + valorB;
    } else if (operador == "-"){
        total = valorA - valorB;
    } else if (operador == "*"){
        total = valorA * valorB;
    } else if (operador == "/"){
        total = valorA / valorB;
    }
    resetar();
    console.log(total)
    result.innerHTML = total;
}

function limpar(){
    result.textContent = "";
}

function resetar(){
    result.textContent = "";
    valorA = 0;
    valorB = 0;
    operador = "";
}