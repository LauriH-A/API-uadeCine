import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logins from './login';
import inicio from './inicio';
import {Navbar,Nav,Form} from 'react-bootstrap';




function nueva() {
  return <h2>Users</h2>;
}


class Navegador extends Component{
  
  
	

  
  
  render(){
    return(
      


<Router>
<Navbar bg="light" expand="lg">
  <Navbar.Brand>UADE CINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/'>Inicio</Nav.Link>
      
      <Nav.Link href='/calificadas'>Calificadas</Nav.Link>
     
     
    </Nav>
    <Form inline>
    <Nav className="mr-auto">
      <Nav.Link  href='/login' >Iniciar sesion</Nav.Link>
      </Nav>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Route path='/' exact component={inicio}/>

<Route path='/calificadas' component={nueva}/>
<Route path='/login' component={logins}/>
</Router>


    )
    }
  }

  export default Navegador;