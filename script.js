// Lista de usuarios creados. Cada uno es un objeto.
var usuarios = [];

// Se ejecuta al hacer click en "Crear usuario".
function crearUsuario() {
    // Lee lo que escribieron en los inputs.
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    // Arma un objeto con el usuario y la clave.
    var nuevoUsuario = {
        usuario: usuario,
        clave: clave
    };

    // Lo agrega al final del array.
    usuarios.push(nuevoUsuario);

    document.getElementById("mensaje").innerHTML = "Usuario creado: " + usuario;
    console.log(usuarios);
}

// Guarda el nombre de quien inició sesión. Vacío = nadie logueado.
var usuarioLogueado = "";
// Nombres que se anotaron en el sorteo.
var sorteo = [];

// Se ejecuta al hacer click en "Iniciar sesión".
function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    var encontrado = false;

    // Recorre los usuarios y busca si coinciden usuario y clave.
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario == usuario && usuarios[i].clave == clave) {
            encontrado = true;
        }
    }

    if (encontrado == true) {
        usuarioLogueado = usuario;
        document.getElementById("mensaje").innerHTML = "Sesión iniciada: " + usuario;
    } else {
        document.getElementById("mensaje").innerHTML = "Usuario o clave incorrectos";
    }
}

// Se ejecuta al hacer click en la copa.
function unirmeAlSorteo() {
    // Si no hay sesión, no puede entrar al sorteo.
    if (usuarioLogueado == "") {
        document.getElementById("mensajeSorteo").innerHTML = "Tenés que iniciar sesión";
    } else {
        var yaEsta = false;

        // Revisa si ese nombre ya está en la lista.
        for (var i = 0; i < sorteo.length; i++) {
            if (sorteo[i] == usuarioLogueado) {
                yaEsta = true;
            }
        }

        if (yaEsta == true) {
            document.getElementById("mensajeSorteo").innerHTML = "Ya estás en el sorteo";
        } else {
            sorteo.push(usuarioLogueado);
            document.getElementById("mensajeSorteo").innerHTML = "Te sumaste: " + usuarioLogueado;
            document.getElementById("listaSorteo").innerHTML = "Participan: " + sorteo;
        }
    }
}

// Se ejecuta al hacer click en "Sortear".
function hacerSorteo() {
    if (sorteo.length == 0) {
        document.getElementById("ganador").innerHTML = "No hay participantes";
    } else {
        // Math.random() da un número entre 0 y 1.
        // Al multiplicarlo por la cantidad de participantes y redondear para abajo,
        // queda un índice válido del array.
        var indice = Math.floor(Math.random() * sorteo.length);
        var ganador = sorteo[indice];
        document.getElementById("ganador").innerHTML = "Ganador: " + ganador;
    }
}
