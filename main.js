//1. Basados en las imágenes solucionar los siguientes puntos:
//a. Describa el paso a paso del ejercicio (comente cada línea de
//código).
//b. Solucione el mismo ejercicio, utilizando solo promesas no
//async/await.
//c. Describa el paso a paso del ejercicio (comente cada línea de código)




/// INICIA EL EJERCICIO #1

// // Esta fraccion de codigo no se usa
// const filtrar = x => x.name === "Evaluacion";

// // se crea una funcion de flecha, se inicia el async
// (async () => {
//   // se crea una peticion para leer el archivo json
//   let response = await fetch("users.json");
//   // se recibe la respuesta del json y se le asigna una varaiable para usarla
//   let user = await response.json();
//   // Ahora se crea una peticion para recibir informacion de los repositorios del usuario del github, se usa la api de github
//   let respuestaGithub = await fetch(
//     `https://api.github.com/users/${user.name}/repos`
//   );
//   // se recibe la respuesta de la api y se le asigna una varaiable para usarla
//   let usuariogithub = await respuestaGithub.json();

//   // se usa el metodo forEach para recorrer todos los elementos del repositorio hasta finalizar el recorrido (no haber mas elementos que recorrer)
//   usuariogithub.forEach((element) => {
//     // se crea una condicional que filtra todos los elementos que en el recorrido no cumplan la condicion, en este caso name seria el nombre del repositorio que sebe ser estrictamente igual a asincronia
//     if (element.name === "asincronia") {
//       // se imprime los elementos encontrados
//       console.log(element);
//     }
//   })
//   // Los corchetes cerrados permiten ejecutar el codigo de la funcion de flecha
// })();

// Alternativa con promesas

// // creamos una funcion para poder crear una conexion entre el javascript y el json
// function json() {
//   // realizamos una peticion para poder recibir desde un json
//   fetch('users.json')
//     // recivimos la respuesta
//     .then(response => response.json())
//     //asaignamos una con funcion flecha y mandamos los datos a una funcion que tomara el parametro name (se creo un callback)
//     .then(data => {
//     filtrar(data.name)
//   })
// }
// // ejecutamos a la funcion creada
// json()

// // creamos otra funcion que nos permitira establecer conexion entre la anterior funcion y la api de github
// function filtrar(name) {
//   // solicitamos un llamado
//   fetch(`https://api.github.com/users/${name}/repos`)
//     .then(response => response.json())
//     // luego de llamar creamos una promesa
//     .then(repos => new Promise(() => {
//       //le establecemos un termporizador
//       setTimeout(() => {
//           //creamos una funcion forEach
//         repos.forEach(((element) => {
//             //establecemos una condiocional
//           if (element.name === "asincronia") {
//               //mostramos por consola
//               console.log(element);
//             }
//         }))
//         //temporizador 2 segundos
//         }, 2000);
//     })
//   )
// }

/// FINALIZA EJERCICIO #1




//2. Lea el archivo users.json suministrado por el instructor y tome como base
//las capturas para luego mostrar todos los datos de usuario de cada
//aprendiz, este ejercicio de desarrolla con promesas.
//a. Imprima el resultado en una tabla donde solo nos mostrar el nombre
//y el avatar de cada aprendiz




/// INICIA EJERCICIO #2

//creamos una funcion para poder crear una conexion entre el javascript y el json
// function json() {
//   // realizamos una peticion para poder recibir desde un json
//   fetch('user.json')
//     // recivimos la respuesta
//     .then(response => response.json())
//     //asaignamos una con funcion flecha y mandamos los datos a una funcion que tomara el parametro name (se creo un callback)
//     .then(data => {
//     for (let i in data.users) {
//       // console.log(data.users[i].avatar_url+ data.users[i].name);
//       filtrar(data.users[i].user);
//       i++
//     }
//   })
// }
// // ejecutamos a la funcion creada
// json()

// // creamos otra funcion que nos permitira establecer conexion entre la anterior funcion y la api de github
// function filtrar(name) {
//   // solicitamos un llamado
//   fetch(`https://api.github.com/users/${name}`)
//     .then(response => response.json())
//     // luego de llamar creamos una promesa
//     .then(repos => new Promise(() => {
//         console.table((repos.name) + "=" + (repos.avatar_url))
//     })
//   )
// }

/// FINALIZA EJERCICIO #2





//3. Basado en la solución del punto 2, transforme esta solución utilizando
//async/await
//a. muestre los repositorios públicos de cada aprendiz en consola.
//b. Una todos los resultados en un solo arreglo
//c. Filtre la consulta con solo los aprendices que tengan el rol de
//aprendiz, esta solución se deba dar antes de realizar la solicitud al
//api.





/// INICIA EJERCICIO #3

// (async () => {
//   // se crea una peticion para leer el archivo json
//   let response = await fetch("user.json");
//   // se recibe la respuesta del json y se le asigna una varaiable para usarla
//   let user = await response.json();
// se crea un arreglo vacio
//   let arreglo = []
// se crea un bucle for in
//   for (let i in user.users) {
  // se crea una condicional que filtre los aprendizes
//     if (user.users[i].aprendiz == true) {
  // se crea una peticion a la api de github
//       let respuestaGithub = await fetch(
//         `https://api.github.com/users/${user.users[i].user}/repos`
//       );
// se recibe la  respuesta y se le asigna a una variable
//       let usuariogithub = await respuestaGithub.json();
// se usa el metodo foreach que recorra los elementos y filtre en base la funcion
//       usuariogithub.forEach((element) => {
//         // se crea una condicional que ayudara filtrar los repositorios privados de los publicos
//         if (element.visibility === "public") {
//           // se agregan los elementos publicos a array vacio
//           arreglo.push(element);
//         }
//       });
//     }
//   }
// se imprime el array una vez finalizado el bucle
//   console.log(...arreglo);
// se ejecuta la funcio flecha
// })();

/// FINALIZA EL EJERCICIO #3





//4. Basados en la solución del punto 3 daremos solución a los siguientes
//puntos:
//a. Muestre solo los resultados que tengan menos de 5 repositorios
//públicos en una tabla por consola.
//b. Muestre solo los resultados de los repositorios que contengan la
//palabra JavaScript en su name
//c. Ordene de menor a mayor según el nombre del repositorio
//d. Muestre solo los repositorios que tengan mas de cinco letras en su
//nombre






/// INICIO DEL EJERCICIO #4

// (async () => {
//   // se crea una peticion para leer el archivo json
//   let response = await fetch("user.json");
//   // se recibe la respuesta del json y se le asigna una varaiable para usarla
//   let user = await response.json();
// se crea un arreglo vacio
//   let arreglo = [];
// se crea un bucle for in
//   for (let i in user.users) {
  // se crea una condicional que filtre los aprendizes
//     if (user.users[i].aprendiz == true) {
  // se crea una peticion a la api de github
//       let respuestaGithub = await fetch(
//         `https://api.github.com/users/${user.users[i].user}/repos`
//       );
// se recibe la  respuesta y se le asigna a una variable
//       let usuariogithub = await respuestaGithub.json();
// se usa el metodo foreach que recorra los elementos y filtre en base la funcion
//       usuariogithub.forEach((element) => {
  // se inicia un contador
//         let cantrepo = 0;
// se crea un bucle for in
//         for (let i in usuariogithub) {
  // se crea una condicional que filtre repositorios publicos de privados
//           if (element.visibility === "public") {
  // se incrementa el contador de repositorios publicos
//             let count = cantrepo++;
// cuando el contador llege a 5 pasara en true esta condicional
//             if (count > 5) arreglo.push(element);
// se crea una variable que almacene el nombre del repositorio
//             let validar = element.name;
// se crea la condicional que agregara el elemento al array siempre que sea true
//             if (validar.includes("Javascript") && validar.length > 5) {
  // se agrega el elemento al array
//               arreglo.push(element);
//             }
//           }
//         }
//       });
//     }
//   }
// se imprime los elementos del array por orden con el metodo sort
//   console.log(...arreglo.sort());
// se ejecuta la funcion flecha
// })();

/// FINALIZA EL EJERCICIO #4




// 5. Lea el archivo user.json y transforme todos los nombres a mayúsculas
// (recorra usuario por usuario) validando que solo se permita ingresar letras
// mayúsculas (se valida con un proxy)
// a. Modifique solo los usuarios que tengan el rol aprendiz en true
// b. Modifique solo los usuarios que más de dos nombres ejemplo (John
// Becerra)
// c. Modifique solo los usuarios que contenga la palabra ADSO en su
// user




/// INICIA EL EJERCICIO #5
//(async () => {
//  let response = await fetch("user.json");
//  let user = await response.json();
//  for (let i in user.users) {
//    let validarA = user.users[i].aprendiz;
//    let validarI = user.users[i].user;
//    if (validarA == true && validarI.includes("ADSO")) {
//      let mayus = user.users[i].name;
//      console.log(mayus.toUpperCase());
//    }
//  }
//})();

// se crea una funcios async para llamar el json
async function llamar() {
  // se crea la peticion al archivo json
  let response = await fetch("user.json");
  // se recibe respuesta del archivo
  let user = await response.json();
}
// se llama la funcion
llamar()
const fs = require('fs');

// se crea un proxy
let finish = new Proxy(llamar(), handler)
// se crea una crea un handler proxy que hara la validaciones
const proxyHandler = {
  set: function(target, property, value) {
    // se crea un bucle que recorra los usuarios
    for (let users of user.users) {
      // se crea una condicional que filtre los datos
      if (user.users.aprendiz == true && user.users.name.split(' ').length > 2) {
        if (user.users.user.includes('ADSO')) {
          // se convierte a mayusculas los nombres que pasaron la condicional
          user.users.name = user.users.name.toUpperCase();
        }
      }
    }
    // Permitir la operación de escritura
    return Reflect.set(target, property, value);
  }
};

// Aplicar el proxy a cada usuario
for (let users of user.users) {
  user.users.name = new Proxy(user.users.name, proxyHandler);
}
// se escribe en el json
const updatedData = JSON.stringify(user.users, null, 2);
fs.writeFileSync('user.json', updatedData);