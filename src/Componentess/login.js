import React from "react";
import indigo from '@material-ui/core/colors/indigo';
import BotonRegisto from './BotonRegisto'
import { Container ,Form, Button,Input} from "react-bootstrap";
import {Row,Col} from 'react-flexbox-grid';
import BotonRegistro from "./BotonRegisto";


function logins(){
    return ( 
      
    <Container style={{background:"lightblue"}}>

    <Row>
    
      <Col>
      
      <Form style={{padding:"10px 30px"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="email" placeholder="Usuario..." />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña..." />
  </Form.Group>
  
  <Button variant="primary" type="submit" style={{margin:"10px"}}>
    Ingresar
  </Button>
  <BotonRegisto/>
</Form>
      </Col>
    </Row>
    </Container>
    
    )
}
    

export default logins;
