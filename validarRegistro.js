var formulario = document.getElementById('form-registro');
var error = document.getElementById('error');
var correcto = document.getElementById('correcto');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    var bolError = false;

    var user = document.getElementById('username').value.trim();
    var passwd = document.getElementById('password').value.trim();
    var listaError = document.createElement("ul");

    error.innerHTML = ""; 

    const regexUser = /^(?!_)([a-zA-Z0-9_]{5,20})(?<!_)$/;
    const regexPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regexUser.test(user)) {
        var elementoLista = document.createElement('li');
        elementoLista.textContent = "El usuario no es válido. Debe tener entre 5-20 caracteres y no comenzar/terminar con '_'.";

        listaError.appendChild(elementoLista);
        bolError = true;
    }

    if (!regexPasswd.test(passwd)) {
        var elementoLista = document.createElement('li');
        elementoLista.textContent = "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un símbolo (@$!%*?&).";

        listaError.appendChild(elementoLista);
        bolError = true;
    }


    if(bolError){
        error.appendChild(listaError);
        error.classList.remove('d-none');
        correcto.classList.add('d-none');
    }
    
    if(!bolError){
    error.innerHTML = ""; 
        
        error.classList.add('d-none');
        correcto.classList.remove('d-none');

    }



    return

})


