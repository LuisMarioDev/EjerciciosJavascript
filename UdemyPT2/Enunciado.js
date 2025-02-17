    /*
    Advertencias:
    - En español por fines didacticos, en la vida real usa nombres en ingles.
    - Test en cada ejercicio, lo veremos al final del curso para ir al grano.
    - Ejercicios genéricos, puedes usar cualquier lenguaje.
    - Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
    - Siempre mostrar el resultado en la consola / terminal.
    - Hay muchas soluciones validas para un mismo ejercicio.
     
    Enunciado Ejercicio 1:
    Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
    mostrar la información de un superheroe.
     
    Y añade una capacidad de buscar la información de varios superhéroes a la vez.
     
    Ejemplo:
    mostrarInformacionSuperheroe('Iron Man');
     
    Salida:
    Nombre real: Tony Stark
    Poderes: Tecnología avanzada, Movilidad aérea
    Equipo: Los vengadores
     
    Ejemplo 2: 
    mostrarInformacionSuperheroes([array de nombres]]);
     
    Salida:
    Muestra la información de todos los superheroes
     
    */
     
    // Crear array de objetos de superheroes marvel
    const infoSuperheroes = {
        'Iron Man': {
            nombreReal: 'Tony Stark',
            poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
            equipo: 'Los vengadores'
        },
        'Capitán América': {
            nombreReal: 'Steve Rogers',
            poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
            equipo: 'Los vengadores'
        },
        'Thor': {
            nombreReal: 'Thor Odinson',
            poderes: ['Mjolnir', 'Viento y trueno'],
            equipo: 'Los vengadores'
        },
        'Spider-Man': {
            nombreReal: 'Peter Parker',
            poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
            equipo: 'Los vengadores'
        },
        'Hulk': {
            nombreReal: 'Bruce Banner',
            poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
            equipo: 'Los vengadores'
        }
    };

function buscarsuperheroe(nombre) {
        
    //Comprobar si el superheroe existe dentro del objeto
    if (nombre in infoSuperheroes) {
        
        //Conseguir la informacion de ese superheroe
        const informacion = infoSuperheroes[nombre]
        //Mostrar la información
        console.log(`========== ${nombre} ==============`)
        console.log(`Nombre real: ${informacion.nombreReal}`)
        console.log(`Poderes: ${informacion.poderes.join(', ')}`)
        console.log(`Equipo:  ${informacion.equipo} \n`)


    }else {
        console.log(`El ${nombre} no existe en los datos que tengo \n`)
    }
}

buscarsuperheroe("Spider-Man");

const mostrarInformacionSuperheroes = (nombre) => {
    //Recorrer todos los nombres
    nombre.forEach(nombre => {
        //Comprobar si existen en cada iteracion
        
        //Mostrar la info (funcion anterior)
        buscarsuperheroe(nombre)
    })
}

mostrarInformacionSuperheroes(['Capitan America', 'Thor'])
