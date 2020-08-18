import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { colours } from '../../common/constants'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  containedPrimary: {
    backgroundColor: colours.lighter1,
    color: colours.lightGray,
    border: `1px solid ${colours.lighter1}`,
    '&:hover': {
      backgroundColor: colours.lighter1,
      border: `1px solid ${colours.lightGray}`
    }
  },
  label: {
    textTransform: 'capitalize'
  }
}))

type ActionButtonProps = {
  children: React.ReactNode
}

const ActionButton: React.FC<ActionButtonProps> = ({ children }) => {

  const classes = useStyles();

  return (
      <Button classes={classes} variant="contained" color="primary" disableElevation>
        { children }
      </Button>
  )
}

export default ActionButton