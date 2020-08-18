import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
   containedPrimary: {
    
   }
  },
}))

type ActionButtonProps = {
  displayText: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ displayText }) => {

  const classes = useStyles();

  return (
    <Button classes={classes} variant="contained" color="primary" disableElevation>
      { displayText }
    </Button>
  )
}

export default ActionButton