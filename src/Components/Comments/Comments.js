import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState} from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    marginBottom:"5px",
  },
  media: {
    height: 140,
  },
});
const Comments = ({comments}) => {
  const classes = useStyles();
  const {id, name, email, body } = comments;

 

  return (

    <Container maxWidth="sm">
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://lorempixel.com/400/400/people/${id}`}
          title="Contemplative Reptile"
          style ={{ borderRadius:'50%',
                  height: '150px',
                  width: '150px',
                  float: 'left',
                  padding: '10px',
                  marginRight: '20px'
            }} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
        email:{email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Like
        </Button>
        <Button size="small" color="primary">
        Reply
        </Button>
      </CardActions>
    </Card>
    </Container>
  );
};

export default Comments;