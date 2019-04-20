import React, {Component} from "react";



class Imagen extends Component{
  

  constructor(props){
    super(props)
    this.state={
      comentario:"",
      seleccion:"",
    }

    
  }
  onChange(e){
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  guardar (e){
    this.setState({
      [e.target.name]: e.target.value
      
    })
    console.log(this.state)
    this.setState({
      comentario:"",
      seleccion:"",
    })
  }

  cerrar(e){
    this.setState({
      comentario:"",
      seleccion:"",
    })
  }
  

  
 

  render(){
    

    return(
      
      
      
			<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"> 
				
				<div className="flyer">
					<div className="row img-flyer">
						
            <div className="card" >
            
            <img src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/01/harry-potter.jpg" className="img-thumbnail" alt="Harry potter" /></div>
            <div className="card-body">
            <p></p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" width="100%">
            Calificar
            </button>
            
            </div>
            
              
					</div>
				</div>
				<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">CALIFICACION</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            
              
              <p>Calificacion <select name="seleccion" id="seleccion" value={this.state.seleccion} onChange={this.onChange.bind(this)} >
              <option value="value1">1</option> 
  <option value="value2" selected>2</option>
  <option value="value3">3</option>
  <option value="value4">4</option> 
  <option value="value5" selected>5</option>
  <option value="value6">6</option>
  <option value="value7">7</option> 
  <option value="value8" selected>8</option>
  <option value="value9">9</option>
  <option value="value10">10</option> 
  
</select></p>
              <p>Comentarios <input name="comentario" id="comentario" value={this.state.comentario} onChange={this.onChange.bind(this)} ></input></p>
              
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.cerrar.bind(this)}>Cerrar</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.guardar.bind(this)}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
      
			</div>
      
      
      
      
      
			
      
    )
    
  }
}

export default Imagen;


