let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1)?'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //como limpiar si el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
          asignarTextoElemento('p', 'El número secreto es menor');
        } else {
          asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;  
        limpiarCaja();
    }
    return;
} 

function limpiarCaja (){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
     numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si se sortearon los numeros se cierra el juego
}


if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento ('p', 'ya se sortearon todos los números posibles');
} else{
    // si el numero generado esta en lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
       
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado ;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(params) {
    //limpiar caja  
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    condicionesIniciales();
    //generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //inicializar el numero de intentos
    intentos = 1;
} 

condicionesIniciales();