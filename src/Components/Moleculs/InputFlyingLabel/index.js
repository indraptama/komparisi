import React from 'raect';


import { withStyles, createStyleSheet } from 'material-ui/styles';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';

function inputFlyingLabel(props) {
  return(
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="name" className={classes.Label}>Name</InputLabel>
      <Input id="name" value={this.state.name} onChange={this.handleChange} className={classes.Input}/>
    </FormControl>
  )
}

const styleSheet = createStyleSheet(theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  Label: {
    top: -2,
  },
  Input: {
    paddingBottom: 8,
  }
}));
