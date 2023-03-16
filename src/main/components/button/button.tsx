import * as React from 'react';
import { Button, ButtonProps} from '@mui/material';
import './button.css';

export type buttonsProps = ButtonProps & {
  children: React.ReactNode;
}

export default function btn({
  ...props
}: buttonsProps) {
  return (
      <Button 
      className='btn'
      variant="contained"
      color='secondary'
      {...props}
      ></Button>
  );
}