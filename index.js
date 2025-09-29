//Declaración

const Coche = {
    marca: "Toyota",
    modelo: "Prius",
    matricula: "4356 BGA",

};

const Casa = {
    codPostal: 28982,
    calle: "Isabel II",
    portal: 34,
    piso: 2,
};

const FullStackDeveloper = {
    lenguajes:["JavaScript", "Java", "HTML", "CSS"],
    proyectos:["Comercio", "Blog", "Aplicación"],
};

const Perro = {
    nombre: "Juan",
    raza: "labrador",
    color: "marrón",
    edad: 3,
    ladrar: function(){
        console.log("Woof!");
    },
    popo: function(){
        return Math.random() * 3;
    },
}

//Lectura de propiedades

const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil["marca"];
const grupos = Concierto.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propiedades

Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo: "imprimir",
    copias: 4,
    numPaginas: 5,
};

//Iteraciones :crossed_swords: Pair Programming :crossed_swords:
//Declaración

const Noticia = {
    titular: "La vuelta al cole",
    cuerpo: "En el Corte Inglés",
};

const Persona = {
    nombre: "Rebeca",
    apellidos: "Díaz-Montenegro Sánchez",
    edad: 25,
};

const Avion = {
    numPasajeros: 345,
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    },
};

const Paquete = {
    contenido: ["Juego", "Mantas", "Comida", "Ropa"],
};

const Pais = {
    numHabitantes: 3000000,
    continente: "Europa",
    gentilicio: "Española",
}

//Lecturta de propiedades

const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles =  Pantalla.pixeles;
const especificaciones = Movil["especificaciones"];

//Modificaciones de propiedades

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
if(Led.encendido){
    Led.encendido = false;
} else {
    Led.encendido = true;
};
Movil.temperatura = "20º";

