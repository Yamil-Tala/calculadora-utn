// ejercicio 1 ///////////

function suma(a,b,callback) {
    let c = a+b;
    callback(c);
}

// el tercer para metro recibido es otra funcion que se denomina callback
// usamos esto cuando queremos que una tarea se realice despues de otra operacion se haya ejecutado
// se utiliza mucho en funciones asincronas,cuando consumimos apis etc.


suma(10,10,(resultado)=>{ 
    console.log(resultado);
}); 










