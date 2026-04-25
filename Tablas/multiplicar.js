function generarTablas(){
    let contenido = "";
    let contenedor = document.getElementById("tablas");
    
    for(let i = 1; i<=10; i++){
        contenido += `<p>5 x ${i}= ${5*i}</p>`;
    }
    contenedor.innerHTML = contenido;
}