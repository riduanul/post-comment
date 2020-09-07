import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  
    },
  media: {
    height: 200,
  },
  });

const Post = (props) => {
  const classes = useStyles();
  const {id, title } = props.data;
  const postStyle = {
      border: '1px solid lightgray',
      borderRadius:'5px',
      margin:'20px auto',
      width:'47%',
      boxShadow:'5px 5px 2px lightGray'
      
  }
  return (
  <div className style={postStyle}>
     <Card className={classes.root}>
        <CardActionArea>
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Post No: {id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`postDetail/${id}`}><Button size="small" color="primary">
              Continue reading
            </Button></Link>
        </CardActions>
      </Card>
    </div>
    
  );
};

export default Post;
