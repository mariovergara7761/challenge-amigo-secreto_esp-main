/*Funcionalidades:
commit "agregar nombre" Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar". Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

comit "actualizar lista"Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

let amigos = [];

function agregarAmigo() {
    let ingresarNombre = document.getElementById("amigo").value;
    if (ingresarNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(ingresarNombre);
    limpiarCaja();
    actualizarLista();

}

function limpiarCaja() {
    document.querySelector("#amigo").value = '';
    return;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
