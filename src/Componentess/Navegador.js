import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logins from './paginas/login';
import inicio from './paginas/inicio';


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function nueva() {
  return <h2>Users</h2>;
}


class Navegador extends Component{
  
  render(){
    return(
      <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
        <h2 class='navbar-brand'>UADE CINE</h2>
          
          
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      
        <Link class='nav-link' to='/'>Inicio</Link>
          
      
      </li>
      <li class="nav-item">
      
        <Link class='nav-link' to='/series'>Series y peliculas</Link>
          
     
      </li>
      <li class="nav-item">
      
        <Link class='nav-link' to='/calificadas'>Calificadas</Link>
          
      
      </li>
      <li class="nav-item">
      
        <Link class='nav-link'  to='/login'>Iniciar sesion</Link>
          
      
      </li>

    </ul>
    
   


    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  
</nav>
<Route path='/' exact component={inicio}/>
<Route path='/series' component={Users}/>
<Route path='/calificadas' component={nueva}/>
<Route path='/login' component={logins}/>


</div>
 </Router>



    )
    }
  }

  export default Navegador;