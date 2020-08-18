import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import theme from '../../common/theme'
import './index.scss'
import { colours } from '../../common/constants'

const useStyles = makeStyles((theme) => ({
  root: {
    // border: `1px solid ${colours.lightGray}`
  }
}))

export type TextInputProp = {
  label: string
}

const TextInput: React.FC<TextInputProp> = ({ label }) => {
  const classes = useStyles(theme)

  return (
    <TextField classes={classes} variant="outlined" label={label} />
  )
}

export default TextInput