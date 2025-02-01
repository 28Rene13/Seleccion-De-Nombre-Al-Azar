/* Se selecciona al azar y muestra el nombre de un amigo de varios que ingresa el usuario, 
la lista de amigos se muestra cada vez que el usuario ingresa un nuevo nombre. */

let listaAmigos = []; //Se crea arreglo para almacenar los nombres de los amigos.


//Funcion para agregar el nombre de los amigoa al arreglo.
function agregarAmigo(){
    //Variable para almacenar del nombre del amigo antes de guardarla en el arreglo.
    let nombreAmigo = document.getElementById('amigo').value;
    
    //Si el usuario ingresa un nombre se almacena en el arreglo.
    //en caso contrario se muestra una alerta.
    if (nombreAmigo != ""){
        //Agregamos el numbre al arreglo.
        listaAmigos.push(nombreAmigo);
        //Limpiamos el input.
        document.getElementById('amigo').value = '';
        //console.log(listaAmigos);
        //Llamamos a la funcion para actualizar la lista de nombres.
        actualizaListaAmigos();
    } else{
        //En caso de que el usuario no ingrese datos, se manda una alerta.
        alert('Por favor, inserte un nombre.');
    }
    
    return;
}


//Funcion para actualizar y mostrar la lista de nombres.
function actualizaListaAmigos(){
    //Creamos una referencia a la lista creada en el archivo HTML.
    const lista = document.getElementById('listaAmigos');
    //Limpiamos la lista antes de actualizarla.
    lista.innerHTML = '';

    //Agregamos los nombres de los amigos a la lista.
    for (let i=0; i < listaAmigos.length; i++){
        //Se crea un  nuevo elemento para cada nombre del arregelo.
       const nuevoElemento = document.createElement('li');
       /* Definimos el texto que se añadira a la lista enumerando los elemetos que se estaran 
        mostrando (i+1) y despues el nombre. */
       nuevoElemento.textContent =  `${i + 1}.  ${listaAmigos[i]}`;
       //Añadimos el texto definido a la lista como un nuevo elemento.
       lista.appendChild(nuevoElemento);
    }

    return;
}

//Función para seleccionar de manera aleatoria el nombre de uno de los amigos.
function sortearAmigo(){
    //Creamos una variable que almacena la longitud del arreglo.
    let longitudArreglo = listaAmigos.length;
    /* Verifica que el arreglo no este vacio. Si no esta vacio actualiza la lista 
    y la muestra. Si esta vacio muestra una alerta. */
   if (longitudArreglo === 0) {
        alert("No hay amigos en la lista. Agregue al menos uno.");
    } else {
        /* Generamos un numero aleatorio que nos servira como indice para seleccionar 
        al azar el nombre del amigo dentro del arreglo. */
        let indice =  Math.floor(Math.random()*longitudArreglo);
        //console.log(indice);
        let amigoSeleccionado = listaAmigos[indice];
        //console.log(amigoSeleccionado);
        //Mostramos el nombre del amigo seleccionado.
        document.getElementById('resultado').innerHTML = `La amistad seleccionada es: ${amigoSeleccionado}.`;
    }
    return;
}