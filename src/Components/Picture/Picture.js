import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Picture = (props) => {

  const{url} = props.image;
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Avatar src={url} />
        </div>
    );
};

export default Picture;