import React, { Component } from 'react';
import GrillaPeliculas from './GrillaPeliculas';
import BuscarPeliculas from './BuscarPeliculas';

import {Container,Row,Col,Button,ButtonToolbar,InputGroup,FormControl,ButtonGroup} from 'react-bootstrap';



 
class inicio extends Component 
{
 
	constructor ()
	{
		super();
		this.state = { 
			grilla : [],
			cajaTexto : "",
		}	
		//linkear funciones
		this.ejecutarBusqueda = this.ejecutarBusqueda.bind(this);
		this.okBusquedaPeli = this.okBusquedaPeli.bind(this);
		this.failBusqueda = this.failBusqueda.bind(this);
		this.actualizar=this.actualizar.bind(this);
  
	}
  
  
	

	componentDidMount()
	{
		BuscarPeliculas.invocarPeliculas("Harry",this.okBusquedaPeli,this.failBusqueda);
	}
	actualizar(nuevoTitulo){
    console.log(nuevoTitulo.target.value)
    this.setState({cajaTexto : nuevoTitulo.target.value});
	}
    
  
	
	
	ejecutarBusqueda()
	{
		console.log("entre a buscar");
		BuscarPeliculas.invocarPeliculas(this.state.cajaTexto,this.okBusquedaPeli,this.failBusqueda);
		
	}
	
	okBusquedaPeli(newData)
	{
		console.log("newData peli",newData);
		this.setState({grilla : newData});
	}
	

	failBusqueda(newData)
	{
		this.setState ({data : 'noData'});
	}
	
		
		
			
		
		render(){
			return(	
				<Container>
      <Row  >
      <Col xl={3} lg={3} md={4} sm={6} xs={12}  >
	  <ButtonToolbar style={{marginTop:'15px',marginBottom:'15px'}}>
    
    <InputGroup>
     
      <FormControl
        type="text"
        placeholder="Buscar..."
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
		value={this.state.cajaTexto} onChange={this.actualizar} style={{width:'190px'}}
      />
    </InputGroup>
    <ButtonGroup className="mr-2" aria-label="First group">      <Button variant="secondary" onClick={this.ejecutarBusqueda}>Buscar</Button>
      
    </ButtonGroup>
  </ButtonToolbar>
				<GrillaPeliculas grilla={this.state.grilla}></GrillaPeliculas></Col></Row></Container>
			)
		}
			

			
		}



export default inicio;


