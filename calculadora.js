var display = document.getElementById("display-values");
var displayMemory = document.getElementById("display-values-memory");
var value=[0];
//btnCliques diz quantos digitos podem ser colocados no display;
var btnCliques=1;
var valueTotal=0;
var memoria;
var momento=0
var soma = false, subtrai = false, divide = false, multiplica = false;

display.style.fontSize= "30px"
display.style.height ="30px"
displayMemory.style.fontSize ="12px"
//Função que mostra os valores dos botões da calculadora de 0 a 9;
function displayValue(obj){
    value = obj.value;
    if(btnCliques==1){
        valueTotal= `${value}`
    }
    if(btnCliques>1 && btnCliques<9){
            valueTotal+= `${value}`
    }
    
    display.innerText=valueTotal;
    btnCliques++;
    
}
//Função disparada quandom clicada no sinal de +;
function somar(){
    
    memoria = valueTotal;
    valueTotal=0;
    btnCliques=1;
    soma = true;
    subtrai = false;
    divide = false;
    multiplica = false;
    displayMemory.innerText=memoria;
    display.innerText=null;
}

//Função que soma os valores e coloca no display;
function calculoSoma(){
    valueTotal = Number(valueTotal)+Number(memoria);
    if(valueTotal>99999999){
        display.innerText ="ERR"
    }else{
        display.innerText = valueTotal;
    }
}

//Função disparada quandom clicada no sinal de -;
function subtrair(){
    memoria = valueTotal;
    valueTotal=0;
    btnCliques=1;
    soma = false;
    subtrai = true;
    divide = false;
    multiplica = false;
    displayMemory.innerText=memoria;
    display.innerText=null;
}
//Função que subtrai os valores e coloca no display;
function calculoSubtrai(){
    valueTotal = Number(memoria)-Number(valueTotal);
    if(valueTotal>99999999){
        display.innerText ="ERR"
    }else{
        display.innerText = valueTotal;
    }
}

//Função disparada quandom clicada no sinal de *;
function multiplicar(){
    memoria = valueTotal;
    valueTotal=0;
    btnCliques=1;
    soma = false;
    subtrai = false;
    divide = false;
    multiplica = true;
    displayMemory.innerText=memoria;
    display.innerText=null;
}

//Função que multiplica os valores e coloca no display;
function calculoMultiplicar(){
    valueTotal = Number(valueTotal)*Number(memoria);
    if(valueTotal>99999999){
        display.innerText ="ERR"
    }else{
        display.innerText = valueTotal;
    }
}

//Função disparada quandom clicada no sinal de /;
function dividir(){
    memoria = valueTotal;
    valueTotal=0;
    btnCliques=1;
    soma = false;
    subtrai = false;
    divide = true;
    multiplica = false;
    displayMemory.innerText=memoria;
    display.innerText=null;
}

//Função que divide os valores e coloca no display;
function calculoDividir(){
    valueTotal = Number(memoria)/Number(valueTotal);
    if(valueTotal>99999999){
        display.innerText ="ERR"
    }else{
        display.innerText = valueTotal;
    }
    
}

function operacaoFinal(){
    if(soma==true){
        calculoSoma();
    }else if(subtrai == true){
        calculoSubtrai();
    }else if(multiplica == true){
        calculoMultiplicar();
    }else if(divide == true){
        calculoDividir();
    }else{}
    soma = false;
    subtrai = false;
    divide = false;
    multiplica = false;
    btnCliques=1;
    displayMemory.innerText=null;
    momento=1;
}


function clearValue(){
    btnCliques=1;
    valueTotal=0;
    display.innerText=null;
    
}

function clearAll(){
    memoria=0;
    btnCliques=1;
    valueTotal=0;
    display.innerText=null;
    displayMemory.innerText=null
}

function Deleta(){
    var v = valueTotal.toString();
    v = v.substring(0,v.length-1);
    valueTotal = Number(v)
    if(btnCliques==1){
        valueTotal=null;
    }else{
        btnCliques--;
    }
    display.innerText = valueTotal;
}


