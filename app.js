// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroMaximo = 0;

function actualizarAmigo(){
    let listaAmis = document.getElementById('listaAmigos');
    listaAmis.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        const elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        listaAmis.appendChild(elemento);
    }
}

function agregarAmigo(){ //Función que se llama cuando el usuario presiona "Añadir"    
    asignarTextoElementoMas('resultado','');
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);
    if(nuevoAmigo == ''){ //El usuario ingresó una entrada vacía
        alert("Por favor, inserte un nombre.");
    }else{
        if(amigos.includes(nuevoAmigo)){
            alert("Este amigo ya está en la lista, inserte otro.");
            limpiarCaja();
        }else{
            amigos.push(nuevoAmigo); //El usuario ingresó un usuario válido         
            limpiarCaja(); //Luego de que se agrega el usuario a la lista, se "limpia" la caja            
            actualizarAmigo(); //Muestra la lista de amigos       
        }
    }
    return;
}
function asignarTextoElementoMas(id, texto){
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = ""; // Limpiar contenido anterior        
        let li = document.createElement("li");
        li.textContent = texto;
        elemento.appendChild(li);
    }
}
function sortearAmigo(){
    if(amigos.length == 0){ //Array vacio       
    alert("No se puede sortear, no hay amigos!");
    }else{
        let listaAmis = document.getElementById('listaAmigos'); //No mostrar mas la lista        
        listaAmis.innerHTML = "";
        numeroMaximo = amigos.length; //El numero maximo es el largo del arreglo      
        let numero = Math.floor(Math.random()*numeroMaximo);
        console.log(amigos[numero]);
        resultadoTexto = amigos[numero];
        asignarTextoElementoMas('resultado','El amigo sorteado es: '+resultadoTexto); //Amigo sorteado
        
        amigos = []; //Reinicio. 
        //No se especifica si deberia hacerse asi pero considero que queda mejor de esta manera. Se puede sacar.
    }
}
function limpiarCaja(){
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}