
window.addEventListener('load',()=>{
    
    console.log('DOM cargado');

    var contenido = document.getElementById('txtArea1');

    document.getElementById('btnTraslate').addEventListener('click',accion);

    function accion(e) {
        console.log('saludo');
        calculator.parse(contenido.value);
    }


});
