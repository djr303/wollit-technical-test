import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '25ch',
  },
}));

const TextInput: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <TextField classes={classes} id="outlined-basic" label="Outlined" variant="outlined" />
  );
}

export default TextInput