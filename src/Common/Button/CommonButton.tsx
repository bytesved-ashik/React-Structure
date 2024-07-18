import React from 'react';
import Button from '@mui/material/Button';

export const CommonButton: React.FC<{label:string}> = ({ label }) => {
  return (
    <Button 
      fullWidth
      color='primary'
      variant="contained">
      {label}
    </Button>
  );
};

