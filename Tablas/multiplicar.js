function generarTablas(){
    let contenido = "";
    let contenedor = document.getElementById("tablas");
    
    for(let i = 1; i<=10; i++){
        contenido += `<p>3 x ${i}= ${3*i}</p>`;
    }
    contenedor.innerHTML = contenido;
}