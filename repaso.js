function mostrar(opcion){
    switch (opcion){
        case 1: ejercicio1();
            break;
        case 2: imprimirCentenas();
            break; 
        case 3: imprimirCentenasRegresiva();
            break;
        
    }

}

function ejercicio1(){
    for(let i = 1;  i <= 5; i++){
        console.log(i);

    }
}

function imprimirCentenas(){
    for(let i=100; i <= 1000; i+=100)
        console.log(i);
}

function imprimirCentenasRegresiva(){
    for(let  i = 1000; i >= 100; i-=100)
        console.log(i);
}