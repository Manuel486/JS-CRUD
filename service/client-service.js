//Abrir http(método,url)

// CRUD    -  Métodos HTTP
// Create  - POST
// Read    - GET
// Update  - PUT/PATCH
// Delete  - DELETE

// Fetch API
// si no le ponemos nada por defecto es GET
const listaClientes = () => 
    fetch("json-server --watch db.json").then((respuesta) => respuesta.json());

// const listaClientes = () => {
//     // promisse es una funcion asincrona, no vamos a esperar 
//     // hasta que termine para ejecutar el resto del código
//     const promise = new Promise((resolve,reject)=>{
//         const http = new XMLHttpRequest();
//         http.open("GET","http://localhost:3000/perfil");
//         http.send();
//         http.onload = () => {
//             const response = JSON.parse(http.response);
//             // Si es mayor a 400 significa que hubo un error
//             if(http.status >= 400){
//                 reject(response);
//             } else {
//                 resolve(response);
//             }
//         };
//     });
//     return promise;
// }

const crearCliente = (nombre,email) => {
    return fetch("json-server --watch db.json",{
        method : "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({nombre,email,id: uuid.v4()})
    });
};

export const clientServices = {
    listaClientes,
    crearCliente,
};


