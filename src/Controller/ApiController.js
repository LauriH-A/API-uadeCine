import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
const url ="http://localhost:8080/contacto";
const urlGetContactos="/leerContacto";
const urlGetContactosById="/leerContacto/idBusqueda";
const urlInsertContacto="/insertarContacto/Contacto";
const urlUpdateContacto='/modificarContacto/Contacto';
const urlDeleteContacto='/borrarContacto/Contacto';
const urlInsertComentario="/insertarComentario/Comentario"
let inicia=false;

class ApiController extends Component
{
   
    getContactos(okBusqueda)
    {
        const endpoint = `${url}${urlGetContactos}`;
        //console.log("Buscando")
       fetch(endpoint).then ((response) => {
            
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
            
                //console.log("Recibi datos");
                okBusqueda(responseData);
                
          
          
          
        });
    }
    getContactosById(data)
    {   
        const endpoint = `${url}${urlGetContactosById}`;
        
        //console.log("Buscando")
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        })
        .then ((response) => {
            
            return response.json();
        }).then (responseData => {
            console.log(responseData)
            
        })
        ;

        


        
       
        
        
        
        
        
    }
    insertContacto(data)
    {
        console.log("guardo contacto",data);
        
        
        const endpoint = `${url}${urlInsertContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }

    insertComentario(data)
    {
        console.log("guardo comentario",data);
        
        
        const endpoint = `${url}${urlInsertComentario}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
    updateContacto(data)
    {
        console.log("actualizo contacto",data);
        
        
        const endpoint = `${url}${urlUpdateContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
    deleteContacto(data)
    {
        console.log("elimino contacto",data);
        
        
        const endpoint = `${url}${urlDeleteContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'DELETE',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
}
export default new ApiController();