import React,{Component } from 'react';
import GrillaPeliculas from './GrillaPeliculas';
import BuscarPeliculas from './BuscarPeliculas';
import ApiController from '../Controller/ApiController'
import {Button,ButtonToolbar,InputGroup,FormControl,ButtonGroup,Table,Jumbotron} from 'react-bootstrap';
import Input from '@material-ui/core/Input';
class calificadaTodos extends Component{
    constructor(){
        super();
        this.state={
            array:[],
            busqueda:''
        }
    }
    
    componentDidMount=()=>{
        
        ApiController.getContactos(this.okBusqueda.bind(this))
        
        
    }

    okBusqueda=(responseData)=>{
        
        var w;
        for(w=0;w<responseData.length;w++){
            let data={
                idUsuario:responseData[w].idUsuario
            }
        ApiController.getComentarioById(data,this.okComentario.bind(this))
        
        }
        
        
        
        
    }

    okComentario=(responseData)=>{
        var w;
        
        for(w=0;w<responseData.length;w++){
            let data={
                idUsuario:responseData[w].idUsuario,
                idPelicula:responseData[w].idPelicula,
                calificacion:responseData[w].calificacion,
                comentario:responseData[w].comentario
            }
            this.state.array.push(data)
            
        }

        this.setState({array:this.state.array})
        
        
    }
    cambio=(e)=>{
        this.setState({busqueda:e.target.value})
    }
    
    iniciarBusqueda=(e)=>{
        this.setState({array:[]})
        let data={
            
            idPelicula:this.state.busqueda
        }
        ApiController.getComentarioByIdUsuariosComunidad(data,this.okComentario.bind(this))
        e.preventDefault();
    }

    limpiar=(e)=>{
        this.setState({busqueda:"",array:[]})
        this.componentDidMount()

    }
    
    
	render(){
        
       
        const tileData=this.state.array;
        
        return(
            <div>
            
            <Jumbotron >
  <h1>Calificaciones de todos los usuarios de la comunidad</h1>
  </Jumbotron>
  <Input style={{background:'white',margin:"10px"}} value={this.state.busqueda} onChange={this.cambio.bind(this)}></Input>
  <Button onClick={this.iniciarBusqueda.bind(this)} style={{margin:'10px'}}>Buscar</Button>
  <Button onClick={this.limpiar.bind(this)}>Limpiar</Button>
            <Table>
                 <thead>
                    <tr>
      
               <th>Usuario</th>
                <th>Pelicula</th>
                <th>Calificacion</th>
                <th>Comentarios</th>
                </tr>
             </thead>
            <tbody>{tileData.map(tile => (
                <tr>
      <td>{tile.idUsuario}</td>
      <td>{tile.idPelicula}</td>
      <td>{tile.calificacion}</td>
      <td>{tile.comentario}</td>
    </tr>))}
            
        </tbody>
        </Table>
        
        </div>
        )
    }
    
}
		


export default calificadaTodos;