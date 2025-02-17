/*
    Advertencias:
    - En español por fines didacticos, en la vida real usa nombres en ingles.
    - Test en cada ejercicio, lo veremos al final del curso para ir al grano.
    - Ejercicios genéricos, puedes usar cualquier lenguaje.
    - Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
    - Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
    - Hay muchas soluciones validas para un mismo ejercicio.
     
    Enunciado Ejercicio 5:
    Dado un array de personas con nombres y apellidos
    crear una función para ordenar el array por los apellidos
    en orden alfabético
     
    Ejemplo:
    ordenarPorApellidos([
        "Víctor Robles",
        "Antonio Alcantara",
        "Al Pacino",
        "Robert DeNiro",
        "Brad Pitt",
        "Sylvester Stallone"
    ]);  
     
    */

function ordenarPorApellidos(personas) {

    // Crear variable con un nuevo array de apellidos
    const apellidos = personas.map((apellido) => apellido.split(" ")[1]);

    apellidos.sort();

    const personasOrdenadas = apellidos.map(apellido => {
        
        const nombreOriginal = personas.find(nombreCompleto => {
            return nombreCompleto.split(' ')[1] === apellido
        }
        )

        return nombreOriginal;
    })
        
    return personasOrdenadas;
    }

    console.log(ordenarPorApellidos([
      "Víctor Robles",
      "Antonio Alcantara",
      "Al Pacino",
      "Robert DeNiro",
      "Brad Pitt",
      "Sylvester Stallone",
    ]));  
