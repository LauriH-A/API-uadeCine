import  React,{Component } from "react";
import {Button} from '@material-ui/core'
import ApiController from '../Controller/ApiController'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {M } from 'materialize-css'
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputGroup,Form,Modal} from 'react-bootstrap'

class BotonRegisto extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            nombre:"",
            idUsuario:"",
            dni:"",
            apellido:"",
            mail:"",
            contraseña:""

            
        }
    }
    
    
    
    crearContacto=(e)=>{
      console.log("nombre",this.state.nombre);
      let data = {
          nombre : this.state.nombre,
          apellido : this.state.apellido,
          mail : this.state.mail,
          dni : this.state.dni,
          contraseña : this.state.contraseña,
          idUsuario:this.state.idUsuario
      };
      ApiController.insertContacto(data);
      e.preventDefault();
      alert("Te has registrado con exito...")    
      this.setState({
            open:false,
            nombre:"",
            idUsuario:"",
            dni:"",
            apellido:"",
            mail:"",
            contraseña:""
      })
        
      
      
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
      handleClose = () => {
        this.setState({ open: false });
      };

      nombre=(e)=>{
        this.setState({nombre:e.target.value});
      }
      apellido=(e)=>{
        this.setState({apellido:e.target.value});
      }
      mail=(e)=>{
        this.setState({mail:e.target.value});
      }
      contraseña=(e)=>{
        this.setState({contraseña:e.target.value});
      }
      dni=(e)=>{
        this.setState({dni:e.target.value});
      }
      idUsuario=(e)=>{
        this.setState({idUsuario:e.target.value});
      }
    render(){
        return(
            <div>
            <Modal show={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          dialogClassName="modal-90w"
         
        >
          <Form style={{padding:"30px"}}
          >
<Form.Row>
    <Form.Group  controlId="formGridCity">
      <Form.Label>Nombre</Form.Label>
      <Form.Control onChange={this.nombre.bind(this)} value={this.state.nombre}/>
    </Form.Group>

    

    <Form.Group  controlId="formGridZip">
      <Form.Label>Apellido</Form.Label>
      <Form.Control onChange={this.apellido.bind(this)} value={this.state.apellido}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="text" onChange={this.idUsuario.bind(this)} value={this.state.idUsuario} placeholder="Nombre de usuario..." />
    </Form.Group>

    <Form.Group  controlId="formGridPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" onChange={this.contraseña.bind(this)} value={this.state.contraseña} placeholder="Contraseña..." />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={this.mail.bind(this)} value={this.state.mail} placeholder="Ingrese su Email..." />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>DNI</Form.Label>
    <Form.Control placeholder="DNI..." onChange={this.dni.bind(this)} value={this.state.dni}/>
  </Form.Group>

  

 

  <Button  type="submit" onClick={this.crearContacto.bind(this)}>
    Registrarse
  </Button>
</Form>
</Modal>
        
            <Button onClick={this.handleClickOpen.bind(this)} style={{color:"white", background:"black"}} variant="primary" >
                Registrarse
              </Button>
              
              </div>
              
        )
    }
}

export default BotonRegisto;

