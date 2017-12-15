//login muestra la foto del usuario logeado




var provider = new firebase.auth.GoogleAuthProvider();
$('#login').click(function() {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            console.log(result.user);

            /*$('#login').hide();*/
            $('#root').append("<h1>Bienvenido</h1>");
            $('.background').append("<img src='" + result.user.photoURL + "'/>");
            $("root").append("<a>'" + result.user.email + "'</a>");
            guardaDatos(result.user);

        });
});






// esta función guarda los datos automáticamente
function guardaDatos(user) {

    var usuario = {
        uid: user.uid,
        Nombre: user.displayName,
        Email: user.email,
        Foto: user.photoURL
    };
    firebase.database().ref("usuarios/" + user.uid)
        .set(usuario);
}

//escribir en la base de datos
$('#insertar').click(function() {
    firebase.database().ref("hermanos/")

    .push({
        Nombre: "Juan Luis Erazo",
        Edad: "30",
        Telefono: "98000178"

    });

});




//leyendo de la base de datos
firebase.database().ref("usuarios")
    .on("child_added", function() {
        var user = s.val();
        $('#root').append("<img src='" + user.Foto + "'/>");
    });

//para instalar las herramientas de firebase 
//npm install -g firebase-tools
//npm install - g firebase - tools


firebase.database().ref("personas");
var savePerson = function() {
    var datosPersona = {
        nombre: $("#nombre").value(),
        telefono: $("#telefono").value()
    };
    firebase.set(datosPersona);

};
$("#guardar").click(savePerson);