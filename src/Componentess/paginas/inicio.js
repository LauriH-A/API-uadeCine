import React from "react";
import Imagenes from "./Imagenes";
import { Container,Row,Col } from "react-bootstrap";
function inicio(){
    return (
        <Container>
        <Row>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
        <Col xl='3' lg='3' md='4' sm='6' xs='12'><Imagenes/></Col>
</Row>
        
        </Container>
    )
}

export default inicio;