import React from "react";
import indigo from '@material-ui/core/colors/indigo';
import color from "@material-ui/core/colors/orange";

const primary = indigo[300];

function logins(){
    return ( 
      // <body style={{backgroundImage:'url(https://www.arrayanesalamos.edu.ec/themes/themes_configuration/images/images/login/fondo.png)',backgroundSize:'100%'}}>
      <body style ={{backgroundColor: primary }}>
    <div class='container' >

    
      
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class='jumbotron' style={{marginTop:'50px'}}>
          <form>
          <h2>Inicie Sesion</h2>
            <div class='form-group' style={{margin:'10px',padding:'10px'}}>
              <input type='email' class='form-control' placeholder='Ingrese usuario' style={{margin:'10px'}}></input>

              
              <input type='password' class='form-control' placeholder='Ingrese contraseña' style={{margin:'10px'}}></input>
                
              
              <div class='checkbox'>
              <label>
                <input type='checkbox'/>
                Recordarme
              </label>
              </div>
                <div>
              
              
              <button type='submit' class='btn btn-primary form-control'style={{margin:'10px'}}> login</button>
              <button type='submit' class='btn btn-primary form-control'style={{margin:'10px'}}> Registrarse</button>

            </div>
            </div>
          </form>
  
    </div>
    </div>
    </div>
    </body>
    )
}
    

export default logins;
