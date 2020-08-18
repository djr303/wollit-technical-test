import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import theme from '../../common/theme'
import './index.scss'
import { colours } from '../../common/constants'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: colours.lightGray,
  }
}));

export type SelectInputProps = {
  label: string
}

const SelectInput: React.FC<SelectInputProps> = ({ label }) => {

  const classes = useStyles(theme)

  return (
    <FormControl variant="outlined">
    <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
    <Select
      classes={classes}
      native
      value={10}
      onChange={() => console.log('onChange')}
      label={label}
    >
      <option aria-label="None" value="" />
      <option>Root category</option>
    </Select>
  </FormControl>
  )
}


export default SelectInput