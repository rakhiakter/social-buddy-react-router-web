import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight:'bold'
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = ({ post, showButton }) => {
  const classes = useStyles();
  console.log(post);
  const {id,title, body } = post;
  console.log(id);
  return (
   
    <Container maxWidth="sm"> 
      
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom 
              
            >
              {title}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {body}
            </Typography>
          </CardContent>
          <CardActions>
         {
             showButton !== false && 
           <Link to={{pathname:'/post/'+id}}>
           <Button size="small">Learn More</Button></Link>
         }
         
          </CardActions>
          
        </Card>
      
    </Container>
  );
};

export default Posts;
