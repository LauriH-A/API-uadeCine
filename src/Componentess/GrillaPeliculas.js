import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';

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
      <Grid Container className={classes.gridList}>
      {tileData.map(tile => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              imagen={tile.img}
              title={tile.title}
              author={tile.author}
            />
          </CardActionArea>
         {/* <Card.Img variant="top" src={tile.img} /> */}
            {/* <Card.Body> */}
          {/* <Card.Title>{tile.title}</Card.Title> */}
            {/* <Card.Text> */}
      {/* {tile.author} */}
    {/* </Card.Text> */}
            {/* </Card.Body> */}
  
              <CardActionArea>
                 <Button size='small' href="#" style={{margin:'10px'}}>Calificar</Button>
                <Button size='small' href="#">Comentarios</Button>
              </CardActionArea>
          </Card>
          </Grid>
        ))}
      </Grid>

      </div>
    
  );
}

GrillaPeliculas.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(GrillaPeliculas);