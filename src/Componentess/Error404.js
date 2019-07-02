import React,{ Component} from 'react';



class Error extends Component{

    recargar=()=>{
        window.location.reload();
    }
    render(){
        return(
            <div>
            <img src='https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg' alt="error" style={{width:'100%', height:'680px'}}></img>
            <button onClick={this.recargar.bind(this)}>Volver</button>
            </div>
        )
    }
        
    }

    
export default Error