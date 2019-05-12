import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logins from './paginas/login';
import inicio from './paginas/inicio';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';





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
<Navbar bg="light" expand="lg">
  <Navbar.Brand>UADE CINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/'>Inicio</Nav.Link>
      <Nav.Link href='/series'>Series y peliculas</Nav.Link>
      <Nav.Link href='/calificadas'>Calificadas</Nav.Link>
      <Nav.Link  href='/login'>Iniciar sesion</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Route path='/' exact component={inicio}/>
<Route path='/series' component={Users}/>
<Route path='/calificadas' component={nueva}/>
<Route path='/login' component={logins}/>
</Router>


    )
    }
  }

  export default Navegador;