import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});



function GrillaPeliculas(props) {
  

  const { classes } = props;
  console.log("props",props);
  
   //console.log("tileDAta", tileData); 
   const tileData = props.grilla;
   
    
  
  return (

    <div className={classes.root}>
      
      {tileData.map(tile => (
        <Card>
  <Card.Img variant="top" src={tile.img} />
  <Card.Body>
    <Card.Title>{tile.title}</Card.Title>
    <Card.Text>
      {tile.author}
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Button href="#" style={{margin:'10px'}}>Calificar</Button>
    <Button href="#">Comentarios</Button>
  </Card.Body>
</Card>
        ))}
      

      </div>
    
  );
}

GrillaPeliculas.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(GrillaPeliculas);