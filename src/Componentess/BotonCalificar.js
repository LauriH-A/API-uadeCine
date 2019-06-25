import  React,{Component } from "react";
import {Button} from '@material-ui/core'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import {InputGroup,FormControl} from 'react-bootstrap'

class BotonCalificar extends Component{
    constructor(){
        super();
        this.state={
            open:false,
            comentarios:"",
            calificacion:"",
        }
    }
    
    comentario=(e)=>{
      this.setState({
        comentarios:e.target.value
      })
      console.log(this.state.comentarios)
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
      handleClose = () => {
        this.setState({ open: false });
      };
    render(){
        return(
            <div>
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Califica tu pelicula!</DialogTitle>
          <DialogContent>
           
            <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Comentarios</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      onChange={this.comentario}
      aria-label="Comentarios..."
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Calificacion</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01" >
    <option selected>Elegir...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>

  </select>
</div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleUpdate} color="primary" >
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
            <Button  color="primary" onClick={this.handleClickOpen.bind(this)} style={{width:'395%',background:"blue",color:"white",border:"black"}} >
                Calificar
              </Button>
              
              </div>
              
        )
    }
}

export default BotonCalificar;

