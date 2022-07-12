import React from 'react'
import MaterialButton from '@mui/material/Button';

export default function Button({children , variant = "contained" , onClick , startIcon}) {
  return (
    <MaterialButton fullWidth startIcon={startIcon} onClick={onClick} variant={variant}>{children}</MaterialButton>
  )
}
