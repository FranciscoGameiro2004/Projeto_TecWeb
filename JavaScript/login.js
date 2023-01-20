let formularioConta = document.forms["formulario"]
document.forms["formulario"].addEventListener('submit', function(event){
    event.preventDefault()
    window.location.href = 'index.html?login=1'
});