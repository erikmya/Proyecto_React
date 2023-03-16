import * as React from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import './text-field.css';

export type inputProps = TextFieldProps & {
  label: String;
  id: String;
}

export default function Txtfield({
  label,
  id,
  ...props
}: inputProps ) {
  return (<div className='container-info'>
  <TextField 
  id="datoInput" 
  variant="outlined" 
  color='secondary'
  label={label}
  {...props} />
  </div>
  );
}