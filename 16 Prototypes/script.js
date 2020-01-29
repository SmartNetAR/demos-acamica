 var Persona = function (nombre, anyoNac) {
    this.nombre = nombre;
    this.anyoNac = anyoNac;
}
Persona.helper = function() {
    console.log("esta es una ayuda del tipo Persona");
}
Persona.compararEdades = function(persona1, persona2) {
    console.log( persona1.anyoNac - persona2.anyoNac)
}

Persona.prototype.saludar = function () { console.log("Hola soy " + this.nombre); }

var alumno1 = new Persona("martín", 1992);
var alumno2 = new Persona("maría", 1980);

alumno2.saludar();
console.log(alumno1)
console.log(alumno2)

// call () Esta función básicamente le permite llamar a una
// función definida en otro lugar, pero en el contexto actual.
function Directivo (nombre, colegio) {
    Persona.call(this, nombre)
    this.colegio = colegio
}
Directivo.prototype = Object.create(Persona.prototype)

Directivo.prototype.despedirse = function () {
    console.log("Bye, los saluda " + this.nombre + " del colegio " + this.colegio)
}

var directorJuan = new Directivo("juan", "ISFT151")
console.dir(Directivo)

directorJuan.saludar()
directorJuan.despedirse();


var VideoJuego = {
    titulo: "",
    genero: "",
    lanzamiento: "",
    consola: "Nintendo",
    _init: function (titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    },
    jugar: function () {
        console.log("Estoy jugando a " + this.titulo + " en una consola " + this.consola);
    }
}

var Mario = Object.create(VideoJuego);
Mario.titulo = "Mario Bross"
Mario.genero = "Arcade"
Mario.jugar();
console.log(Mario)


var Zelda = Object.create(VideoJuego);
Zelda.titulo = "Zelda"
Zelda.genero = "Aventura"
Zelda.jugar();
console.log(Zelda)

var pacMan = Object.create(VideoJuego);
pacMan._init("PacMan", "Arcade");

var Sonic = Object.create(VideoJuego);
Sonic.consola = "Sega";
Sonic.cantidadJugadores = 2;

var mario1 = Object.create(VideoJuego);
mario1._init("Mario the first", "Arcade");

var sonic3 = Object.create(Sonic);
sonic3._init("Sonic 3", "Aventura");