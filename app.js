// Desafío de lógica: Sorteo de Amigos Secretos
// Este programa permite agregar amigos a una lista y realizar un sorteo aleatorio.

// Declaración de variables globales
let amigos = []; // Array donde se almacenan los nombres de los amigos
let nombresDeAmigos = document.getElementById('amigo'); // Input donde el usuario ingresa los nombres
let lista = document.getElementById('listaAmigos'); // Elemento HTML donde se muestra la lista de amigos
let result = document.getElementById('resultado'); // Elemento donde se mostrará el amigo sorteado


// Función para agregar amigos a la lista
function agregarAmigo() {
    // Verifica si el campo de entrada está vacío
    if (nombresDeAmigos.value === '') {
        alert('Por favor, inserte un nombre');
    } else {
        // Agrega el nombre ingresado a la lista de amigos
        amigos.push(nombresDeAmigos.value); 
        nombresDeAmigos.value = ''; // Limpia el campo de entrada después de agregar
        listaAmigos(); // Actualiza la lista en la interfaz
    }
}

// Función para actualizar la lista de amigos en el DOM
function listaAmigos() {
    lista.innerHTML = ''; // Limpia la lista antes de actualizarla
    
    // Recorre el array de amigos y los agrega a la lista en el DOM
    for (let i = 0; i < amigos.length; i++) {
        let nombre = document.createElement('li'); // Crea un elemento de lista
        nombre.textContent = amigos[i]; // Asigna el nombre del amigo
        lista.appendChild(nombre); // Agrega el elemento a la lista en el DOM
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Verifica si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    } else {
        // Genera un índice aleatorio dentro del array de amigos
        let i = Math.floor(Math.random() * amigos.length);
        let nombreElegido = amigos[i]; // Selecciona el amigo sorteado
        
        // Muestra el nombre del amigo sorteado en el resultado
        result.textContent = `Amigo Secreto elegido es: ${nombreElegido}`;
        

        lista.innerHTML = '';
    }
}

