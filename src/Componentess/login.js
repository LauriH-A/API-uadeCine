import React from "react";
import indigo from '@material-ui/core/colors/indigo';

import { Container ,Form, Button,Input} from "react-bootstrap";
import {Row,Col} from 'react-flexbox-grid';

const primary = indigo[300];

function logins(){
    return ( 
      
    <Container>

    <Row>
    
      <Col>
      
      <Form>
      
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="email" placeholder="Ingrese usuario" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Ingrese contraseña"/>
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Recordarme" />
  </Form.Group>
  <Button variant="primary" type="submit" style={{margin:'10px'}}>
    Ingresar
  </Button>
  <Button variant="primary" type="submit">
    Registrarse
  </Button>
</Form>
      </Col>
    </Row>
    </Container>
    
    )
}
    

export default logins;
