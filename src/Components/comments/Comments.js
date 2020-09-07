import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Picture from '../Picture/Picture';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Comments = (props) => {
  const {name,email,body} = props.comment;
  const postNo = props.postNo;

  // const [img, setImg] = useState([]);
  // useEffect(() => {
  // const url = `https://jsonplaceholder.typicode.com/photos?userId=${postNo}`;
  // fetch(url)
  // .then(res => res.json())
  // .then(data => setImg(data))
  
  // },[])
  // const images= img.slice(0,500);
    const classes = useStyles();
    
    const bodyStyle ={
    backgroundColor:'lightGray',
    borderRadius:'5px'
    }
      return (
        <div className={classes.root}>
          {/* <div>
            {images.map(image => <Picture postNo={postNo} image={image} key={image.id}></Picture>)}
          </div>  */}
          <div>
            <h5> Name: {name}  Email:  {email}  </h5>
            <p className style={bodyStyle}>{body}</p>
          </div>
        </div>
    );
};

export default Comments;