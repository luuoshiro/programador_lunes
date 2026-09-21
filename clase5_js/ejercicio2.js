//se asigna variable al textarea del html
const textarea = document.getElementById('comentarios');

//se asigna variable al contador del html
const contador = document.getElementById('contador');

//el listener tiene 2 parámetros: lo que tiene que escuchar (keyup) y lo que tiene que hacer (function)
textarea.addEventListener('keyup',function(){
    contador.innerText=textarea.value.length
})

