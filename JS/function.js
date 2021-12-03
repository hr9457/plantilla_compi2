import {PI,saludo} from './libreria.js';


window.addEventListener('load',()=>{
    
    
    console.log('DOM cargado');
    console.log(PI);
    saludo();


    var contenido = document.getElementById('txtArea1');
    var areaResultado = document.getElementById('txtArea2');

    document.getElementById('btnTraslate').addEventListener('click',accion);

    function accion(e) {
        // console.log('saludo');
        let resultado = calculator.parse(contenido.value);
        areaResultado.innerHTML = resultado;
        saludo();
    }

});
