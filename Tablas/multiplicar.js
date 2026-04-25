function generarTablas(){
    let numero = document.getElementById("numero").value;
    let contenido = "";
    let contenedor = document.getElementById("tablas").querySelector("tbody");
    
    for(let i = 1; i<=10; i++){
        contenido += `
            <tr>
                <td>${numero} x ${i}</td>
                <td>${numero*i}</td>
            <tr>
                `;
    }
    contenedor.innerHTML = contenido;
}